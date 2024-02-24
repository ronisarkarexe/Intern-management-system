/* eslint-disable react/prop-types */
import { Card, Col, Row } from "antd";

const ActivityInfo = ({ profile }) => {
  const joinDateTime = new Date(profile?.joinDate);
  const currentDate = new Date();
  const differenceMs = currentDate - joinDateTime;
  const endDateMs = new Date(profile?.endDate) - currentDate;
  const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  const difEndDays = Math.floor(endDateMs / (1000 * 60 * 60 * 24));

  const statusCounts = profile?.tasks?.reduce((acc, curr) => {
    const status = curr.taskId.status;
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});
  const totalCount = profile?.tasks?.length;

  const ensureNonNegative = (num) => {
    return num < 0 ? 0 : num;
  };

  return (
    <div className="m-4">
      <Row gutter={16}>
        <Col span={8}>
          <Card bordered={false}>
            <div className="card flex flex-row rounded">
              <div className="flex-1">{differenceDays} Days</div>
              <div className="flex-1">
                <div
                  className="radial-progress text-neutral bg-accent text-neutral-content border-4 border-accent"
                  style={{
                    "--value":
                      difEndDays === differenceDays ? 0 : differenceDays,
                  }}
                  role="progressbar"
                >
                  {difEndDays === differenceDays
                    ? 0
                    : ensureNonNegative(difEndDays)}{" "}
                  Days
                </div>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={8}>
          <Card bordered={false}>
            <div className="card flex flex-row rounded">
              <div className="flex-1">{`Total completed tasks ${
                statusCounts?.DONE === undefined ? 0 : statusCounts?.DONE
              } / ${totalCount}`}</div>
              <div className="flex-1">
                <div
                  className="radial-progress text-primary"
                  style={{
                    "--value":
                      statusCounts?.DONE === undefined
                        ? 0
                        : statusCounts?.DONE * 100,
                  }}
                  role="progressbar"
                >
                  {`${
                    statusCounts?.DONE === undefined ? 0 : statusCounts?.DONE
                  } / ${totalCount}`}
                </div>
              </div>
            </div>
          </Card>
        </Col>

        {/* <Col span={8}>
          <Card bordered={false}>
            <div className="card flex flex-row rounded">
              <div className="flex-1">{`Total Completed Task ${statusCounts.TODO} / ${totalCount}`}</div>
              <div className="flex-1">
                <div
                  className="radial-progress text-primary"
                  style={{
                    "--value": 50,
                  }}
                  role="progressbar"
                >
                  50&
                </div>
              </div>
            </div>
          </Card>
        </Col> */}
      </Row>
    </div>
  );
};

export default ActivityInfo;
