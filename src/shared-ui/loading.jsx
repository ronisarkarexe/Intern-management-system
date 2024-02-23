import { Flex, Spin } from "antd";

const Loading = () => {
  return (
    <Flex align="center" gap="middle">
      <Spin size="large" />
    </Flex>
  );
};

export default Loading;
