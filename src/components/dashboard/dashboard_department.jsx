import { useEffect, useState } from "react";
import { useGetAllDepartmentsQuery } from "../../redux/features/department/departmentApi";
import { Card, Col, Row, Typography } from "antd";
const { Text } = Typography;

const DashboardHeader = () => {
  const [departments, setDepartments] = useState([]);
  const { data, isLoading } = useGetAllDepartmentsQuery(undefined);
  useEffect(() => {
    if (data && Array.isArray(data.data)) {
      setDepartments(data.data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...!</div>;
  }

  return (
    <div className="m-4">
      <Row gutter={16}>
        {departments.map((department) => (
          <Col span={8} key={department._id}>
            <Card
              title={department.departmentName}
              bordered={false}
              style={{
                marginBottom: 16,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* <Text>
                Admin:{" "}
                <Text type="secondary">
                  {department.adminDetails.length
                    ? department.adminDetails[0]?.adminId?.email
                    : "-"}
                </Text>
              </Text>{" "}
              <br /> */}
              <Text>
                Interns:{" "}
                <Text type="secondary">{department.internDetails.length}</Text>
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DashboardHeader;
