import { UploadOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  Form,
  Input,
  Popconfirm,
  Space,
  Table,
  Typography,
  Upload,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import Gap from "../../../components/gap/Gap";
import LoadingComponent from "../../../components/loadingComponent/LoadingComponent";
import { uploaderConfig } from "../../../config/uploader-config";
import { useSingleUploader } from "../../../hooks/useSingleUploader";
import { INITIAL_TABLE_DATA } from "../constants";
import {
  ADD_USER,
  DELETE_USER,
  GET_USERS,
  UPDATE_USER,
} from "../query/users-query";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const FormCRUD_graph = () => {
  const { Title } = Typography;
  const { TextArea } = Input;
  const [formBio] = Form.useForm();
  const [avatar, setAvatar] = useState("");

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

  // Upload Image
  const [isLoadingUpload, uploadFile] = useSingleUploader();

  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const TABLE_COLUMNS = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (_, record, index) => (
        <img
          src={record.avatar}
          alt={`avatar-${index}`}
          style={{ height: "30px" }}
        />
      ),
    },
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
              onConfirm={() => onDelete(record.uuid)}
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
    setAvatar(row_data.avatar);
    formBio.setFieldsValue({
      firstName: row_data.firstName,
      lastName: row_data.lastName,
      nim: row_data.nim,
      address: row_data.address,
    });
  };

  //   to handle cancel button
  const handleCancel = () => {
    setRowData();
    setAvatar("");
    setIsEdit(false);
    formBio.resetFields();
  };

  //   Add Data to table
  const onAdd = (values) => {
    const body = {
      avatar: avatar,
      ...values,
    };
    addUser({
      variables: {
        object: {
          ...body,
        },
      },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
      onCompleted: () => handleCancel(),
    });
  };

  //   Delete Data from table
  const onDelete = (row_id) => {
    deleteUser({
      variables: { uuid: row_id },
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
    const uuid = rowData.uuid;
    const body = {
      avatar: avatar,
      ...values,
    };

    updateUser({
      variables: { pk_columns: { uuid: uuid }, _set: { ...body } },
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

  // to handle Upload Image
  const handleUpload = async (file) => {
    const body = {
      file: await getBase64(file.file.originFileObj),
      upload_preset: uploaderConfig.upload_preset,
      public_id: file.file.name.replace(/\.[^.]*$/, ""),
      api_key: uploaderConfig.api_key,
    };
    uploadFile(body, (data) => {
      setAvatar(data.url);
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
        colon={false}
        style={{
          width: "800px",
        }}
        labelAlign="left"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
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

        <Form.Item label="Avatar">
          <Upload
            showUploadList={false}
            name="file"
            maxCount={1}
            onRemove={() => {
              setAvatar("");
            }}
            customRequest={() => {}}
            onChange={handleUpload}
          >
            <Button
              icon={<UploadOutlined />}
              type={!avatar ? "dashed" : "default"}
            >
              {avatar ? "Change Avatar" : "Upload Avatar"}
            </Button>
          </Upload>

          {isLoadingUpload ? (
            <LoadingComponent />
          ) : (
            avatar && (
              <div>
                <Gap height={20} />
                <img
                  src={avatar}
                  alt="avatar"
                  style={{
                    height: "150px",

                    borderRadius: "10px",
                  }}
                />
              </div>
            )
          )}
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
        dataSource={usersData?.users}
        loading={isUsersLoading || loadingDelete}
      />
    </>
  );
};

export default FormCRUD_graph;
