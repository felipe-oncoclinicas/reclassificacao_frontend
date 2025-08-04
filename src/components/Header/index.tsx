import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #f3f4f6; /* cinza claro */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  border-bottom: 2px solid #e5e7eb; /* cinza */
  padding: 0 16px;
`;

const IconButton = styled.button`
  padding: 8px;
  background: transparent;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e5e7eb;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <IconButton>
        <img src="/icons/logo.png" alt="Oncoclínicas" style={{ width: 60, height: 'auto' }} />
      </IconButton>
      <IconButton onClick={() => console.log('logout')} title="Sair">
        <img src="/icons/log-out.svg" alt="Logout" style={{ width: 20 }} />
      </IconButton>
    </StyledHeader>
  );
};
