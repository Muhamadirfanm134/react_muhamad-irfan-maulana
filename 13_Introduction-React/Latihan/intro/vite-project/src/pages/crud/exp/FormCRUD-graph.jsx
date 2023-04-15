import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  Form,
  Input,
  Popconfirm,
  Space,
  Table,
  Typography,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import Gap from "../../../components/gap/Gap";
import { INITIAL_TABLE_DATA } from "../constants";
import {
  ADD_USER,
  DELETE_USER,
  GET_USERS,
  UPDATE_USER,
} from "../query/users-query";

const FormCRUD_graph = () => {
  const { Title } = Typography;
  const { TextArea } = Input;
  const [formBio] = Form.useForm();

  // Get Data
  const {
    data: usersData,
    loading: isUsersLoading,
    error: usersError,
  } = useQuery(GET_USERS);

  // Add Data
  const [addUser, { loading: loadingAddUser }] = useMutation(ADD_USER, {
    refetchQueries: [GET_USERS],
  });

  // Update Data
  const [updateUser, { loading: loadingUpdateUser }] = useMutation(
    UPDATE_USER,
    {
      refetchQueries: [GET_USERS],
    }
  );

  // Delete Data
  const [deleteUser, { loading: loadingDelete }] = useMutation(DELETE_USER, {
    refetchQueries: [GET_USERS],
  });

  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const TABLE_COLUMNS = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "NIM",
      dataIndex: "nim",
      key: "nim",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
            <a onClick={() => handleEdit(record)}>Edit</a>
            <Popconfirm
              title="Sure to delete?"
              arrow={false}
              onConfirm={() => onDelete(record.id)}
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  //   to handle edit button
  const handleEdit = (row_data) => {
    setRowData(row_data);
    setIsEdit(true);
  };

  //   to handle cancel button
  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    formBio.resetFields();
  };

  //   Add Data to table
  const onAdd = (values) => {
    addUser({
      variables: {
        object: {
          ...values,
        },
      },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
    });
  };

  //   Delete Data from table
  const onDelete = (row_id) => {
    deleteUser({
      variables: { id: row_id },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
    });
  };

  //   Edit Data from table
  const onEdit = (values) => {
    const id = rowData.id;

    updateUser({
      variables: { pk_columns: { id: id }, _set: { ...values } },
      onCompleted: () => {
        handleCancel();
      },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
    });
  };

  useEffect(() => {
    if (usersError) {
      message.open({
        type: "error",
        content: `${usersError?.message}`,
      });
    }
  }, [usersError]);

  return (
    <>
      <Title>Form Biodata Mahasiswa</Title>

      {/* Form */}
      <Form
        name="form-bio"
        form={formBio}
        layout="horizontal"
        onFinish={isEdit ? onEdit : onAdd}
        style={{
          width: "600px",
        }}
        labelAlign="left"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        fields={[
          {
            name: ["firstName"],
            value: rowData?.firstName,
          },
          {
            name: ["lastName"],
            value: rowData?.lastName,
          },
          {
            name: ["nim"],
            value: rowData?.nim,
          },
          {
            name: ["address"],
            value: rowData?.address,
          },
        ]}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input placeholder="Input your first name" />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input placeholder="Input your last name" />
        </Form.Item>

        <Form.Item
          name="nim"
          label="NIM"
          rules={[
            {
              required: true,
              message: "Please input your NIM!",
            },
          ]}
        >
          <Input placeholder="Input your NIM" />
        </Form.Item>

        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <TextArea rows={4} placeholder="Input your address" />
        </Form.Item>

        {isEdit ? (
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              loading={loadingUpdateUser}
            >
              Save
            </Button>
            <Button type="primary" onClick={handleCancel} danger>
              Cancel
            </Button>
          </Space>
        ) : (
          <Button type="primary" htmlType="submit" loading={loadingAddUser}>
            Submit
          </Button>
        )}
      </Form>

      <Gap height={30} />

      {/* Table */}
      <Table
        rowKey="uuid"
        columns={TABLE_COLUMNS}
        dataSource={usersData?.user}
        loading={isUsersLoading || loadingDelete}
      />
    </>
  );
};

export default FormCRUD_graph;
