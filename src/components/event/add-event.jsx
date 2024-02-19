import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { useCreateEventMutation } from "../../redux/features/event/eventApi";

const AddEventComponent = () => {
  const [form] = Form.useForm();
  const [createEvent] = useCreateEventMutation();
  const onFinish = async (values) => {
    const formattedValues = {
      ...values,
      startDate: moment(values.startDate).format("YYYY-MM-DD"),
      endDate: moment(values.endDate).format("YYYY-MM-DD"),
    };
    const res = await createEvent(formattedValues);
    if (res) {
      toast(`Event created successfully.!`, {
        autoClose: 1000,
        theme: "light",
        type: "success",
      });
    }
    form.resetFields();
  };

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
              name="eventName"
              label="Name of Event"
              rules={[
                {
                  required: true,
                  message: "Please enter user event name",
                },
              ]}
            >
              <Input placeholder="Please enter user event name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="registrationLink"
              label="Registration link for event"
              rules={[
                {
                  required: true,
                  message: "Please enter registration link",
                },
              ]}
            >
              <Input placeholder="Please enter registration link" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="startDate"
              label="Start Date"
              rules={[
                {
                  required: true,
                  message: "Please choose the type",
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
                  message: "Please end date",
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
              name="eventImage"
              label="Event poster Link"
              rules={[
                {
                  message: "Please enter event poster link",
                },
              ]}
            >
              <Input placeholder="Please enter event poster link" />
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
          Add Event
        </Button>
      </Form>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default AddEventComponent;
