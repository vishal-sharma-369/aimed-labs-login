import styled from "styled-components";

const Text = styled.span`
  font-size: 1.2rem;
  margin-right: 0.4rem;
`;

const Link = styled.a`
  color: #f89636;
  font-size: 1.2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const LabeledLink = ({ text, linkLabel, link, centered }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Link href={link}>{linkLabel}</Link>
    </Wrapper>
  );
};

export default LabeledLink;
