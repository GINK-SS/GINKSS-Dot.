import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Input from '../../components/modal/Input';
import Wrapper from '../../components/modal/Wrapper';
import Title from '../../components/modal/Title';
import TextArea from '../../components/modal/TextArea';
import SubmitBtn from '../../components/modal/SubmitBtn';
import { useSetRecoilState } from 'recoil';
import { contactState } from '../../store/modal';
import Spinner from '../../components/common/Spinner';

const Contact = () => {
  const formRef = useRef(null);
  const setIsContact = useSetRecoilState(contactState);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmiting(true);

    if (formRef.current !== null) {
      const { status } = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY!
      );

      if (status === 200) closePopup();

      setIsSubmiting(false);
    }
  };

  const handleOuterClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) closePopup();
  };

  const closePopup = () => setIsContact(false);

  return (
    <>
      <Spinner isActive={isSubmiting} />
      <Wrapper onClick={handleOuterClick}>
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
    </>
  );
};

export default Contact;
