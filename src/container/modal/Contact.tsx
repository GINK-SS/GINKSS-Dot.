import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Input from '../../components/modal/Input';
import Wrapper from '../../components/modal/Wrapper';
import Title from '../../components/modal/Title';
import TextArea from '../../components/modal/TextArea';
import SubmitBtn from '../../components/modal/SubmitBtn';

const Contact = () => {
  const formRef = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current !== null) {
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY!
      );
    }
  };

  return (
    <Wrapper>
      <Title />
      <Input title="보내는 곳" isdisabled />
      <form ref={formRef} onSubmit={sendEmail}>
        <Input title="제목" name="title" />
        <Input title="이름" name="name" />
        <Input title="메일 주소" name="email" />
        <TextArea name="message" />
        <SubmitBtn />
      </form>
    </Wrapper>
  );
};

export default Contact;
