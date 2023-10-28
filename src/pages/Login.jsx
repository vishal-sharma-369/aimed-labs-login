import React from "react";
import TextInputWithLabel from "../components/inputs/TextInputWithLabel";
import CheckInputWithLabel from "../components/inputs/CheckInputWithLabel";
import styled from "styled-components";
import TitleMedium from "../components/titles/TitleMedium";
import ButtonFilled from "../components/buttons/ButtonFilled";
import LabeledLink from "../components/links/LabeledLink";
import loginImage from "../assets/images/login_image.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: black; */
  padding: 4rem;

  @media screen and (max-width: 1024px) {
    padding-block: 4.8em;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 80%;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  height: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 0.8rem;
  float: right;
  padding-inline: 4rem;
  display: flex;
  align-items: center;
  overflow-y: scroll;

  @media screen and (max-width: 1024px) {
    width: 80%;
    float: none;
    margin-inline: auto;
  }
`;

const Form = styled.div`
  height: 70%;
  width: 100%;
  /* background-color: darkslateblue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

const Login = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={loginImage} alt="" />
      </ImageContainer>
      <FormContainer>
        <Form>
          <TitleMedium title="Login" />
          <TextInputWithLabel label="Login ID" placeholder="Enter Login ID" />
          <TextInputWithLabel label="Password" placeholder="Enter Password" />
          <CheckInputWithLabel label="Remember Me" />
          <CheckInputWithLabel
            label="Agree to"
            linkLabel="Terms & Conditions"
            link="/"
          />
          <ButtonFilled />
          <LabeledLink
            text="Don't have an account?"
            linkLabel="Register Here"
            link="/"
            centered={true}
          />
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;
