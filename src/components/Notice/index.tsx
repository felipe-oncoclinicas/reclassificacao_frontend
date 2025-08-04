import styled from 'styled-components';

const Notice = styled.div`
  background-color: #16a34a; 
  color: #ffffff;
  padding: 12px 16px;
  border-radius: 40px;
  margin: 16px;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

export const NoticeReclassification = () => {
  return (
    <Notice>
      Neste local, é possível reclassificar e renomear os exames que foram categorizados como "outros", bem como ajustar o título salvo no Tasy.
    </Notice>
  );
};
