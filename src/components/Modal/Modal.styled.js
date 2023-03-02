import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  overflow-y: scroll;
`;

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 400px;
  height: 200px;
  padding: 40px;
`;

export const ModalTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ModalDescriptionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ModalDescription = styled.p`
  margin-bottom: 10px;
`;

export const ModalStatus = styled.div`
  display: flex;
  align-items: stretch;
  margin-bottom: 10px;
  margin-right: 5px;
`;

export const ModalBtn = styled.button`
  width: 50px;
  height: 30px;
`;
