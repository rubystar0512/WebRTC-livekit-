import { useState } from "react";
import { Button, Typography, Space, Dropdown } from "antd";
import {
  AudioMutedOutlined,
  VideoCameraOutlined,
  MoreOutlined,
  CopyOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Title, Text } = Typography;

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 70% 30%;
  background-color: #202124;
`;

const VideoPreview = styled.div`
  position: relative;
  background-color: #3c4043;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 20px;
`;

const NoCamera = styled.div`
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 32px;
  display: flex;
  gap: 16px;
`;

const ControlButton = styled(Button)`
  width: 48px;
  height: 48px;
  border-radius: 50% !important;
  background-color: ${(props) =>
    props.disabled ? "#ea4335" : "rgba(60, 64, 67, 0.8)"};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#dc3626" : "rgba(60, 64, 67, 1)"} !important;
  }

  .anticon {
    color: white;
    font-size: 20px;
  }
`;

const JoinSection = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ReadyTitle = styled(Title)`
  color: #e8eaed !important;
  margin-bottom: 8px !important;
`;

const StatusText = styled(Text)`
  color: #9aa0a6;
  display: block;
  margin-bottom: 24px;
`;

const JoinButton = styled(Button)`
  height: 48px;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
`;

const OtherWaysButton = styled(Button)`
  color: #8ab4f8;
  font-family: "Google Sans", Roboto, Arial, sans-serif;

  &:hover {
    color: #aecbfa !important;
    background: transparent !important;
  }
`;

const CallPreparation = () => {
  const [isMicMuted, setIsMicMuted] = useState(true);
  const [isVideoOff, setIsVideoOff] = useState(true);

  const otherWaysItems = [
    {
      key: "1",
      icon: <CopyOutlined />,
      label: "Copy joining info",
    },
    {
      key: "2",
      icon: <SettingOutlined />,
      label: "Settings",
    },
  ];

  return (
    <Container>
      <VideoPreview>
        <NoCamera>No camera found</NoCamera>
        <Controls>
          <ControlButton
            icon={<AudioMutedOutlined />}
            disabled={isMicMuted}
            onClick={() => setIsMicMuted(!isMicMuted)}
          />
          <ControlButton
            icon={<VideoCameraOutlined />}
            disabled={isVideoOff}
            onClick={() => setIsVideoOff(!isVideoOff)}
          />
          <ControlButton icon={<MoreOutlined />} />
        </Controls>
      </VideoPreview>

      <JoinSection>
        <ReadyTitle level={2}>Ready to join?</ReadyTitle>
        <StatusText>No one else is here</StatusText>

        <Space direction="vertical" size={16} style={{ width: "100%" }}>
          <JoinButton type="primary">Join now</JoinButton>

          <Dropdown
            menu={{ items: otherWaysItems }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <OtherWaysButton type="text">Other ways to join</OtherWaysButton>
          </Dropdown>
        </Space>
      </JoinSection>
    </Container>
  );
};

export default CallPreparation;
