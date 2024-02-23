import { Card, Col, Row } from "antd";
import { useGetProfileInfoQuery } from "../../redux/features/profile/profileApi";

const InternTaskDashboard = () => {
  const { data } = useGetProfileInfoQuery();
  const statuses = ["TODO", "IN_PROGRESS", "DONE"];
  const percentages = Object.fromEntries(statuses.map((status) => [status, 0]));
  const statusCounts = data?.data?.tasks.reduce((acc, curr) => {
    const status = curr.taskId.status;
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const totalCount = data?.data?.tasks?.length;
  for (const [status, count] of Object.entries(statusCounts)) {
    percentages[status] = (count / totalCount) * 100;
  }
  // {`Total ${parseInt(totalCount)}`}
  return (
    <div className="m-4">
      <Row gutter={16}>
        <Col span={8}>
          <Card bordered={false}>
            <div className="card flex flex-row rounded">
              <div className="flex-1">ToDo List</div>
              <div className="flex-1">
                <div
                  className="radial-progress text-primary"
                  style={{
                    "--value": percentages.TODO === 0 ? 100 : percentages.TODO,
                  }}
                  role="progressbar"
                >
                  {`${percentages.TODO === 0 ? 100 : `${percentages.TODO} %`}`}
                </div>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={8}>
          <Card bordered={false}>
            <div className="card flex flex-row rounded">
              <div className="flex-1">In Progress List </div>
              <div className="flex-1">
                <div
                  className="radial-progress text-primary"
                  style={{
                    "--value":
                      percentages.IN_PROGRESS === 0
                        ? 100
                        : percentages.IN_PROGRESS,
                  }}
                  role="progressbar"
                >
                  {`${
                    percentages.IN_PROGRESS === 0
                      ? "Done"
                      : `${percentages.IN_PROGRESS}%`
                  }`}
                </div>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={8}>
          <Card bordered={false}>
            <div className="card flex flex-row rounded">
              <div className="flex-1">Done List</div>
              <div className="flex-1">
                <div
                  className="radial-progress text-primary"
                  style={{
                    "--value": percentages.DONE === 0 ? 100 : percentages.DONE,
                  }}
                  role="progressbar"
                >
                  {`${
                    percentages.DONE === 0 ? "Done" : `${percentages.DONE}%`
                  }`}
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default InternTaskDashboard;
