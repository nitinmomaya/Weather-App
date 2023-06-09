import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 20%;
  }

  button {
    width: 10%;
    height: 30%;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    font-size: medium;
    font-weight: sem-bold;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.font};
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.font};
      background: ${({ theme }) => theme.colors.secondary};
    }

    @media (max-width: 768px) {
      width: 20%;
      height: 30%;
    }

    @media (max-width: 480px) {
      width: 25%;
      height: 30%;
    }
  }

  input {
    width: 50%;
    height: 30%;
    border: none;
    margin: 0.5rem;
    font-size: medium;
    font-weight: semi-bold;
    text-align: center;
    border-radius: 0.5rem;
    background: #fff;
    color: ${({ theme }) => theme.colors.font};
    transition: all 0.3s ease-in-out;
    &::placeholder {
      color: ${({ theme }) => theme.colors.secondary};
      text-align: center;
      font-size: medium;

      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
      }

      @media (max-width: 480px) {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default Container;
