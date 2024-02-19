import { Button, Col, Form, Input, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetAllDepartmentsQuery } from "../../redux/features/department/departmentApi";
import { useGetAllInternsQuery } from "../../redux/features/intern/internApi";
import { useCreateSalaryMutation } from "../../redux/features/salary/salaryApi";
const { Option } = Select;

const AddSalary = () => {
  const [departments, setDepartments] = useState([]);
  const [interns, setInterns] = useState([]);
  const { data, isLoading } = useGetAllDepartmentsQuery(undefined);
  const { data: internData } = useGetAllInternsQuery();
  const [createSalary] = useCreateSalaryMutation();
  const [form] = Form.useForm();

  useEffect(() => {
    if (internData && Array.isArray(internData.data.data)) {
      setInterns(internData.data.data);
    }
  }, [internData]);

  useEffect(() => {
    if (data && Array.isArray(data.data.data)) {
      setDepartments(data.data.data);
    }
  }, [data]);

  const onFinish = async (values) => {
    const newValues = {
      ...values,
      status: "PENDING",
    };
    const res = await createSalary(newValues);
    if (res) {
      toast(`Salary added successfully.!`, {
        autoClose: 1000,
        theme: "light",
        type: "success",
      });
    }
    form.resetFields();
  };

  if (isLoading) {
    return <div>Loading...!</div>;
  }

  return (
    <div className="m-4" style={{ width: "60%" }}>
      <Form
        layout="vertical"
        form={form}
        name="control-hooks"
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="internId"
              label="Intern Email"
              rules={[
                {
                  required: true,
                  message: "Select Intern Email",
                },
              ]}
            >
              <Select placeholder="Select department">
                {interns.map((intern) => (
                  <Option key={intern._id} value={intern._id}>
                    {`${intern.email} Dpt: (${intern?.departmentId?.departmentName})`}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="departmentId"
              label="Department"
              rules={[
                {
                  required: true,
                  message: "Select department",
                },
              ]}
            >
              <Select placeholder="Select department">
                {departments.map((department) => (
                  <Option key={department._id} value={department._id}>
                    {department.departmentName}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="amount"
              label="Amount"
              rules={[
                {
                  required: true,
                  message: "Please enter amount",
                },
              ]}
            >
              <Input placeholder="Please enter amount" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="year"
              label="Year"
              rules={[
                {
                  required: true,
                  message: "Please select year",
                },
              ]}
            >
              <Select placeholder="Select department">
                <Option value="2024">2024</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="month"
              label="Month"
              rules={[
                {
                  required: true,
                  message: "Please enter month",
                },
              ]}
            >
              <Select placeholder="Select department">
                <Option value="January">January</Option>
                <Option value="February">February</Option>
                <Option value="March">March</Option>
                <Option value="April">April</Option>
                <Option value="May">May</Option>
                <Option value="June">June</Option>
                <Option value="July">July</Option>
                <Option value="August">August</Option>
                <Option value="September">September</Option>
                <Option value="October">October</Option>
                <Option value="November">November</Option>
                <Option value="December">December</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            backgroundColor: "#1890ff",
            borderColor: "#1890ff",
            color: "#fff",
          }}
        >
          Add Salary
        </Button>
      </Form>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default AddSalary;
