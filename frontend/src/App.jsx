import { ConfigProvider, theme } from "antd";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CallPreparation from "./pages/CallPreparation";

function App() {
  return (
    <ConfigProvider
      theme={{
        // Enable dark theme
        token: {
          colorPrimary: "#1a73e8", // Google Meet's blue color
          borderRadius: 4,
          fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
        },
        components: {
          Button: {
            controlHeight: 48,
            fontSize: 16,
            borderRadius: 4,
          },
          Input: {
            controlHeight: 48,
            borderRadius: 4,
          },
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/rooms/:roomId" element={<CallPreparation />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
