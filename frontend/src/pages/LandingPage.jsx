import { useState } from "react";
import { Button, Input, Typography, Space, Modal } from "antd";
import {
  VideoCameraOutlined,
  CloseOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Title, Text } = Typography;

const Container = styled.div`
  max-width: 800px;
  margin: 120px auto;
  text-align: center;
  padding: 0 20px;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
`;

const StyledTitle = styled(Title)`
  font-family: "Google Sans", Roboto, Arial, sans-serif !important;
  font-size: 48px !important;
  margin-bottom: 16px !important;
  font-weight: 400 !important;
  color: #202124 !important;
`;

const StyledSubtitle = styled(Text)`
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 20px;
  color: #5f6368;
  display: block;
  margin-bottom: 48px;
`;

const ActionContainer = styled(Space)`
  width: 100%;
  justify-content: center;
`;

const NewMeetingButton = styled(Button)`
  height: 48px;
  padding: 0 24px;
  font-size: 16px;
  display: flex;
  align-items: center;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-weight: 500;
  background-color: #1a73e8;
  border: none;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);

  &:hover {
    background-color: #1557b0 !important;
  }
  .anticon {
    font-size: 20px;
    margin-right: 8px;
  }
`;

const JoinInput = styled(Input)`
  width: 240px;
  height: 48px;
  border-radius: 4px;
  font-family: "Google Sans", Roboto, Arial, sans-serif;

  &::placeholder {
    color: #5f6368;
  }
`;

const JoinButton = styled(Button)`
  height: 48px;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-weight: 500;
  color: #1a73e8;

  &:disabled {
    color: rgba(0, 0, 0, 0.26) !important;
  }

  &:hover:not(:disabled) {
    color: #1557b0;
    background-color: #f6fafe;
  }
`;
const GlobalStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500&display=swap");
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 8px;
    padding: 24px;
  }

  .ant-modal-header {
    margin-bottom: 20px;
  }

  .ant-modal-title {
    font-family: "Google Sans", Roboto, Arial, sans-serif;
    font-size: 20px;
  }
`;

const LinkContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 4px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const LinkText = styled(Text)`
  color: #202124;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
`;

const ModalDescription = styled(Text)`
  color: #5f6368;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
`;

const CopyButton = styled(Button)`
  margin-left: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const LandingPage = () => {
  const [meetingCode, setMeetingCode] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [meetingLink, setMeetingLink] = useState("");

  const handleNewMeeting = () => {
    const randomMeetingId = Math.random().toString(36).substring(2, 12);
    const link = `http://${window.location.host}/rooms/${randomMeetingId}`;
    setMeetingLink(link);
    setIsModalVisible(true);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(meetingLink);
      // You can add a notification here to show the link was copied
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleJoinMeeting = () => {
    if (meetingCode) {
      console.log("Joining meeting with code:", meetingCode);
    }
  };

  return (
    <GlobalStyle>
      <Container>
        <StyledTitle>Video calls and meetings for everyone</StyledTitle>
        <StyledSubtitle>
          Connect, collaborate, and celebrate from anywhere with Video Meet
        </StyledSubtitle>

        <ActionContainer size={16}>
          <NewMeetingButton
            type="primary"
            icon={<VideoCameraOutlined />}
            onClick={handleNewMeeting}
          >
            New meeting
          </NewMeetingButton>

          <JoinInput
            placeholder="Enter a code or link"
            value={meetingCode}
            onChange={(e) => setMeetingCode(e.target.value)}
            onPressEnter={handleJoinMeeting}
          />

          <JoinButton
            type="text"
            disabled={!meetingCode}
            onClick={handleJoinMeeting}
          >
            Join
          </JoinButton>
        </ActionContainer>

        <StyledModal
          title="Here's your joining info"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
          closeIcon={<CloseOutlined />}
        >
          <ModalDescription>
            Send this to people you want to meet with. Be sure to save it so you
            can use it later, too.
          </ModalDescription>

          <LinkContainer>
            <LinkText>{meetingLink}</LinkText>
            <CopyButton
              type="text"
              icon={<CopyOutlined />}
              onClick={handleCopyLink}
            >
              Copy
            </CopyButton>
          </LinkContainer>
        </StyledModal>
      </Container>
    </GlobalStyle>
  );
};

export default LandingPage;
