import { useGetProfileInfoQuery } from "../../redux/features/profile/profileApi";
import { Card, Col, Row } from "antd";
import CollapseUi from "../../shared-ui/collapse-ui";

const InternSalaryDetails = () => {
  const { data } = useGetProfileInfoQuery();
  return (
    <div className="m-4">
      <Row gutter={16}>
        {data?.data?.salaries.map((month, index) => (
          <Col span={8} key={index}>
            <Card className="mb-4" style={{ cursor: "pointer" }}>
              <CollapseUi title={month.salaryId.month}>
                <div className="flex-1">Amount: {month.salaryId.amount}</div>
                <div className="flex-1">Year: {month.salaryId.year}</div>
                <div className="flex-1">Status: {month.salaryId.status}</div>
              </CollapseUi>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default InternSalaryDetails;
