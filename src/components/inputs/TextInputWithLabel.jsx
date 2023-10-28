import styled from "styled-components";

const Label = styled.div`
  font-weight: 500;
  align-self: flex-start;
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  border-radius: 0.4rem;
  outline: none;
  text-indent: 0.8rem;
  border: 1px solid #9b9cac;
  /* color: #737b86; */
  &:focus {
    border: 1px solid black;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const TextInputWithLabel = ({ label, placeholder }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input placeholder={placeholder} />
    </Wrapper>
  );
};

export default TextInputWithLabel;
