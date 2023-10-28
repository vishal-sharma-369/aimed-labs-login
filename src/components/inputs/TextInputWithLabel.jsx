import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Label = styled.div`
  font-weight: 500;
  align-self: flex-start;
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  border-radius: 0.4rem;
  border: 1px solid #9b9cac;
  align-items: center;
  padding-inline: 0.8rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  line-height: 3rem;
  border-radius: 0.4rem;
  outline: none;
  border: none;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Link = styled.a`
  display: inline-block;
  float: right;
  color: #f89636;
  font-size: 1.2rem;
  margin-top: 0.8rem;
  text-decoration: none;
`;

const TextInputWithLabel = ({ label, placeholder, password }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputWrapper>
        <Input
          type={password && (showPassword ? "text" : "password")}
          placeholder={placeholder}
        />
        {password ? (
          showPassword ? (
            <Icon
              icon="mdi:eye"
              onClick={() => setShowPassword(false)}
              height="2rem"
              cursor="pointer"
            />
          ) : (
            <Icon
              icon="el:eye-close"
              onClick={() => setShowPassword(true)}
              height="2rem"
              cursor="pointer"
            />
          )
        ) : (
          ""
        )}
      </InputWrapper>
      {password && <Link href="/">Change Password</Link>}
    </Wrapper>
  );
};

export default TextInputWithLabel;
