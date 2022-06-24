/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import { BgOpacity } from '../styles/commonElement';
import { IRef } from '../pages';

const Contact = ({ parentRef }: { parentRef: IRef }) => {
  const form = useRef<HTMLFormElement>();
  const checkBoxRef = useRef<HTMLInputElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (!checkBoxRef.current!.checked)
      alert('개인정보 수집 및 이용 동의에 체크해주세요.');
    else
      emailjs
        .sendForm(
          'thesimple',
          'template_rphyhka',
          form.current as HTMLFormElement,
          'sRYhcmwhyZVXt89Is',
        )
        .then(
          result => {
            alert('성공적으로 전송되었습니다.');
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          },
        );
  };
  return (
    <Wrapper ref={parentRef}>
      <Header data-aos="fade-up">문의하기</Header>
      <FormWrapper data-aos="fade-up">
        <Form
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          ref={form}
          onSubmit={sendEmail}
        >
          <InputWrapper>
            <div>
              <label>이름</label>
              <input required name="user_name" />
            </div>
            <div>
              <label>이메일</label>
              <input required type="email" name="user_email" />
            </div>
          </InputWrapper>
          <TextareaWrapper>
            <label>문의사항</label>
            <TextArea name="message" required />
          </TextareaWrapper>

          <DataAgree data-type="agree">
            <h5>개인정보 수집 및 이용안내</h5>
            <h6>
              문의 신청 시, 아래와 같이 고객님의 개인정보를 수집하고 있습니다.
            </h6>
            <ol>
              <Li>개인정보 수집범위 : 이름, 이메일</Li>
              <Li>개인정보 수집 및 이용목적 : 문의 신청 확인 및 상담자료</Li>
              <Li>
                개인정보 수집 및 보유기간 : 이용자의 개인정보는 원칙적으로
                개인정보의 수집 및 이용 목적이 달성되면 지체 없이 파기하며
                보유기간은 최대 1년을 넘기지 않는 것을 원칙으로 한다.
              </Li>
            </ol>
          </DataAgree>
          <label>
            <input ref={checkBoxRef} type="checkbox" name="agree" />
            개인정보 수집 및 이용 동의
          </label>
          <Submit type="submit" value="보내기" />
        </Form>
      </FormWrapper>
      <BgOpacity />
    </Wrapper>
  );
};

export default Contact;

const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: left !important;
`;
const Header = styled.div`
  margin-top: 80px;
  color: white;
  z-index: 1;
  margin-bottom: 30px;
  font-size: 35px;
  font-family: 'NanumMyeongjo';
`;
const FormWrapper = styled.div`
  z-index: 1;
  max-width: 620px;
  font-size: 16px;
  ${({ theme }) => theme.media.tablet`
    margin-left: 10px;
    margin-right: 10px;
  `}
  textarea,
  input {
    border-radius: 8px;
    background: #ffffff 0% 0% no-repeat padding-box;
    opacity: 0.81;
    border: none;
  }
  label {
    color: white;
    margin-bottom: 4px;
    cursor: pointer;
    display: flex;
  }
  input {
    width: 300px;
    height: 54px;
  }
  input[type='checkbox'] {
    cursor: pointer;
    accent-color: #c4913c;
    width: 22px;
    height: 22px;
    clip-path: circle(62% at 50% 50%);
    opacity: 1;
    font-size: 16px;
  }
  input[type='submit'] {
    background-color: #c4913c;
    width: 200px;
    height: 44px;
    border-radius: 42px;
    opacity: 1;
    font-size: 16px;
  }
  ${({ theme }) => theme.media.mobile`
  input{
    width: 43.85vw;
    height: 7.89vw;
  }
  textarea, div[data-type="agree"]{
    width : 90.64vw;
  }
  `}
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  div {
    display: flex;
    flex-direction: column;
  }
`;

const TextareaWrapper = styled.div`
  ${({ theme }) => theme.flexColumnSet('', 'left')}
  width : 100%;
`;

const TextArea = styled.textarea`
  height: 162px;
  @media (max-height: 644px) {
    height: 20vh;
  }
`;

const DataAgree = styled.div`
  height: 150px;
  padding: 00px 20px 10px 20px;
  border: 1px solid #ddd;
  background-color: #fff;
  overflow-y: scroll;
  border-radius: 8px;
  margin: 10px 0;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-height: 644px) {
    height: 20vh;
  }
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  ${({ theme }) => theme.bgSection('/images/4_배경화면.png')}
  ${({ theme }) => theme.media.mobile`
    background-size : 250% 100%;
    background-position-x : 50%;
  `}
`;
const Li = styled.li`
  margin-bottom: 5px;
  font-size: 13px;
`;
const Submit = styled.input`
  outline: 0;
  border: 0;
  border-radius: 15px;
  background: black;
  color: white;
  padding: 10px 40px;
  cursor: pointer;
`;
