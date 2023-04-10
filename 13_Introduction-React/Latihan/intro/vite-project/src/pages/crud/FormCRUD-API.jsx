import {
  Button,
  Form,
  Input,
  Popconfirm,
  Space,
  Table,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { INITIAL_TABLE_DATA } from "./constants";
import {
  useDeleteBiodata,
  useGetBiodata,
  usePostBiodata,
  useUpdateBiodata,
} from "./hooks/useBiodatas";
import Gap from "../../components/gap/Gap";

const FormCRUD = () => {
  const { Title } = Typography;
  const { TextArea } = Input;

  const [formBio] = Form.useForm();
  const [isLoadingBiodata, biodata, getBiodata] = useGetBiodata();
  const [isLoadingCreateBiodata, createBiodata] = usePostBiodata();
  const [isLoadingUpdateBiodata, updateBiodata] = useUpdateBiodata();
  const [isLoadingDeleteBiodata, deleteBiodata] = useDeleteBiodata();

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
    window.scrollTo(0, 0);
  };

  //   to handle cancel button
  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    formBio.resetFields();
  };

  //   Add Data to table
  const onAdd = (values) => {
    createBiodata(values, () => {
      getBiodata();
    });

    formBio.resetFields();
  };

  //   Delete Data from table
  const onDelete = (row_id) => {
    deleteBiodata(row_id, () => {
      getBiodata();
    });
  };

  //   Edit Data from table
  const onEdit = (values) => {
    const id = rowData?.id;
    updateBiodata(id, values, () => {
      getBiodata();
      handleCancel();
    });
  };

  useEffect(() => {
    getBiodata();
  }, []);

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
              loading={isLoadingUpdateBiodata}
            >
              Save
            </Button>
            <Button type="primary" onClick={handleCancel} danger>
              Cancel
            </Button>
          </Space>
        ) : (
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoadingCreateBiodata}
          >
            Submit
          </Button>
        )}
      </Form>

      <Gap height={40} />

      {/* Table */}
      <Table
        rowKey="id"
        columns={TABLE_COLUMNS}
        dataSource={biodata}
        loading={isLoadingBiodata || isLoadingDeleteBiodata}
      />
    </>
  );
};

export default FormCRUD;
