import styled from "styled-components";

const CheckBox = styled.input``;

const Label = styled.span`
  display: inline-block;
  margin-left: 0.8rem;
  font-size: 1.2rem;
  color: #53585f;
  margin-right: 0.4rem;
`;

const Link = styled.a`
  color: #f89636;
  font-size: 1.2rem;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const CheckInputWithLabel = ({ label, linkLabel, link }) => {
  return (
    <Wrapper>
      <CheckBox type="checkbox" />
      <Label>{label}</Label>
      {link && <Link href={link}>{linkLabel}</Link>}
    </Wrapper>
  );
};

export default CheckInputWithLabel;
