import { useEffect, useState } from "react";
import { Button, Col, Form, Input, Row, Select, DatePicker } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetAllDepartmentsQuery } from "../../redux/features/department/departmentApi";
import { useGetAllInternsQuery } from "../../redux/features/intern/internApi";
import moment from "moment";
import { useCreateLeaveMutation } from "../../redux/features/leave/leaveApi";
const { Option } = Select;

const AddLeave = () => {
  const [departments, setDepartments] = useState([]);
  const [interns, setInterns] = useState([]);
  const { data, isLoading } = useGetAllDepartmentsQuery(undefined);
  const { data: internData } = useGetAllInternsQuery();
  const [form] = Form.useForm();
  const [createLeave] = useCreateLeaveMutation();
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
    const formattedValues = {
      ...values,
      startDate: moment(values.startDate).format("YYYY-MM-DD"),
      endDate: moment(values.endDate).format("YYYY-MM-DD"),
      appliedDate: moment(values.appliedDate).format("YYYY-MM-DD"),
    };
    const res = await createLeave(formattedValues);
    if (res) {
      toast(`Leave added successfully.!`, {
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
              name="reason"
              label="Reason"
              rules={[
                {
                  required: true,
                  message: "Please enter reason",
                },
              ]}
            >
              <Input placeholder="Please enter reason" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="startDate"
              label="Start Date"
              rules={[
                {
                  required: true,
                  message: "Please enter issue date",
                  type: "date",
                },
              ]}
            >
              <DatePicker
                style={{
                  width: "100%",
                }}
                getPopupContainer={(trigger) => trigger.parentElement}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="endDate"
              label="End Date"
              rules={[
                {
                  required: true,
                  message: "Please enter end date",
                  type: "date",
                },
              ]}
            >
              <DatePicker
                style={{
                  width: "100%",
                }}
                getPopupContainer={(trigger) => trigger.parentElement}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="appliedDate"
              label="Applied Date"
              rules={[
                {
                  required: true,
                  message: "Please enter end date",
                  type: "date",
                },
              ]}
            >
              <DatePicker
                style={{
                  width: "100%",
                }}
                getPopupContainer={(trigger) => trigger.parentElement}
              />
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
          Add Leave
        </Button>
      </Form>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default AddLeave;
