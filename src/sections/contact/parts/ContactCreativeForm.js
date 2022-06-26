import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FormattedMessage, useIntl } from "gatsby-plugin-intl";
import { navigate } from "gatsby-link";
import useForm from "../../../hooks/useForm";
import validation from "../../../utils/validation";

const Separator = styled.div`
  height: 5px;
  width: 50px;
  background-color: #04e5e5;
  margin-bottom: 30px;
  margin-left: 6px;
`;

const ContactForm = styled.form`
  padding: 40px;
  width: 100%;
`;

const InputElement = styled.div`
  margin: 20px 0;
`;

const ErrorInputAnimation = keyframes`
        0% {
          border-bottom: 1px solid #111;
        }
        100% {
          border-bottom: 1px solid #ff0000;
        }
    `;

const Input = styled.input`
  width: 100%;
  background-color: #111;
  border: none;
  border-bottom: 1px solid #444;
  padding: 10px 5px;
  border-radius: 0;
  color: #fff;
  transition: 0.5s;
  &:focus {
    border-bottom: 1px solid #04e5e5;
    outline: none;
  }
  &.error {
    animation: ${ErrorInputAnimation} 1s forwards;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background-color: #111;
  border: none;
  border-bottom: 1px solid #444;
  padding: 10px 5px;
  border-radius: 0;
  color: rgb(255, 255, 255);
  transition: all 0.5s ease 0s;
  min-height: 140px;
  margin-top: 0px;
  margin-bottom: 0px;
  height: 100px;
  &:focus {
    border-bottom: 1px solid #04e5e5;
    outline: none;
  }
`;

const Submit = styled.button`
  display: block;
  height: 50px;
  width: 186px;
  position: relative;
  border: none;
  overflow: hidden;
  transition: 0.5s;
  width: 100%;
  margin-top: 100px;
  &::after {
    position: absolute;
    content: "";
    display: inline-block;
    background: rgba(59, 173, 227, 1);
    background: linear-gradient(
      45deg,
      rgba(41, 153, 153, 1) 0%,
      rgba(50, 189, 189, 1) 25%,
      rgba(4, 229, 229, 1) 51%,
      rgba(41, 153, 153, 1) 100%
    );
    height: 100%;
    width: 140%;
    top: 0;
    left: 0;
    transition: 0.5s;
  }

  &:hover {
    &::after {
      transform: translateX(-20%);
    }
  }
  span {
    position: relative;
    top: 0;
    color: #fff;
    z-index: 10;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;


export default function ContactCreativeForm(){

  const intl = useIntl();

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(send, validation);

  function send(){
    const form = document.getElementById('contact-form');
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...values,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  return (
    <ContactForm
      id="contact-form"
      name="contact"
      method="post"
      action="/success/?code=feedback"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <InputElement>
        <Input
          type="text"
          value={values.name || ''}
          name="name"
          className={`name formInput${errors["name"] ? " hasError" : ""}`}
          placeholder={intl.formatMessage({ id: "contact.namePlaceholder" })}
          onChange={handleChange}
        />
        { errors["name"] && <span className="errorMessage">{ errors["name"] }</span> }
        
      </InputElement>
      <InputElement>
        <Input
          type="text"
          value={values.email || ''}
          name="email"
          className={`email formInput${errors["email"] ? " hasError" : ""}`}
          placeholder="Email"
          onChange={handleChange}
        />
        { errors["email"] && <span className="errorMessage">{ errors["email"] }</span> }
      </InputElement>
      <InputElement>
        <Input
          type="text"
          value={values.phone || ''}
          name="phone"
          className={`phone formInput${errors["phone"] ? " hasError" : ""}`}
          placeholder={intl.formatMessage({ id: "contact.phonePlaceholder" })}
          onChange={handleChange}
        />
        { errors["phone"] && <span className="errorMessage">{ errors["phone"] }</span> }
      </InputElement>
      <InputElement>
        <Textarea
          placeholder={intl.formatMessage({ id: "contact.messagePlaceholder" })}
          value={values.message || ''}
          name="message"
          className={`message formInput${errors["message"] ? " hasError" : ""}`}
          onChange={handleChange}
        />
        { errors["message"] && <span className="errorMessage">{ errors["message"] }</span> }
      </InputElement>
      <Submit>
        <span>
          <FormattedMessage id="contact.submitButton" />
        </span>
      </Submit>
    </ContactForm>
  );

};

