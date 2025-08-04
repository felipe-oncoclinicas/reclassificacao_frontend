import styled from "styled-components";

interface TabButtonProps {
  $active: boolean;
}

const TabWrapper = styled.div`
  width: 100%;
  font-family: sans-serif;
  margin-top: 2rem;
`;

const TabHeader = styled.div`
  display: flex;
  text-align: center;
  overflow: hidden;
`;

const TabButton = styled.button<TabButtonProps>`
  flex: 1;
  text-align: center;
  padding: 14px 18px;
  border: none;
  border-bottom: 4px solid ${({ $active }) => ($active ? "#16a34a" : "transparent")};
  font-weight: bold;
  color: ${({ $active }) => ($active ? "#16a34a" : "#6b7280")};
  cursor: pointer;
  font-size: 1.45rem;
  transition: all 0.2s ease;
`;

interface TabsProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <TabWrapper>
      <TabHeader>
        <TabButton
          $active={activeTab === 1}
          onClick={() => setActiveTab(1)}
        >
          Reclassificação de Exames
        </TabButton>
        <TabButton
          $active={activeTab === 2}
          onClick={() => setActiveTab(2)}
        >
          Validação de Nomes
        </TabButton>
      </TabHeader>
    </TabWrapper>
  );
}
