import styled from "styled-components";

const Button = styled.button`
  width: 70%;
  padding-block: 1.6rem;
  color: white;
  background-color: #1575a7;
  border-radius: 0.8rem;
  border: none;
  /* font-size: ; */
`;

const ButtonFilled = () => {
  return <Button>Login</Button>;
};

export default ButtonFilled;
