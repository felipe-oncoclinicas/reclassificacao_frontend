import { useState } from "react";
import styled from "styled-components";
import { DataTable } from "./components/DataTable";
import { Header } from "./components/Header";
import { NoticeReclassification } from "./components/Notice";
import Tabs from "./components/Tabs";

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6;
`;

const ContentWrapper = styled.div`
  margin: 1.5rem auto 0;
  padding: 0 1rem;
`;

export default function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <AppContainer>
      <Header />
      <NoticeReclassification />

      <ContentWrapper>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 1 && <DataTable activeTab={1} />}
        {activeTab === 2 && <DataTable activeTab={2} />}
      </ContentWrapper>
    </AppContainer>
  );
}
