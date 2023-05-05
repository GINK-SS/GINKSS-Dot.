import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Input from '../../components/modal/Input';
import Wrapper from '../../components/modal/Wrapper';
import Title from '../../components/modal/Title';
import TextArea from '../../components/modal/TextArea';
import Button from '../../components/modal/Button';
import { useSetRecoilState } from 'recoil';
import { contactState } from '../../store/modal';
import Spinner from '../../components/common/Spinner';
import Message from '../../components/modal/Message';
import CloseBtn from '../../components/modal/CloseBtn';
import GradientBox from '../../components/modal/GradientBox';
import data from '../../lib/data';
import ContentBox from '../../components/modal/ContentBox';

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const setIsContact = useSetRecoilState(contactState);
  const [isCenter, setIsCenter] = useState(true);
  const [isBlank, setIsBlank] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setIsCenter(entry.target.clientHeight > window.innerHeight - 80 ? false : true);
      }
    });

    const handleResize = () => {
      if (containerRef.current) {
        setIsCenter(
          containerRef.current.clientHeight > window.innerHeight - 80 ? false : true
        );
      }
    };

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
      window.addEventListener('resize', handleResize);
    }

    const clear = () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };

    return clear;
  }, []);

  const findIsBlank = () => {
    if (formRef.current !== null) {
      for (let i = 0; i < 4; i += 1) {
        if (!(formRef.current[i] as HTMLInputElement | HTMLTextAreaElement).value)
          return true;
      }
      return false;
    }

    return true;
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsBlank(false);
    setIsSubmiting(true);

    if (findIsBlank()) {
      setIsBlank(true);
      setIsSubmiting(false);
      return;
    }

    if (formRef.current !== null) {
      const { status } = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY!
      );

      if (status === 200) setIsComplete(true);

      setIsSubmiting(false);
    }
  };

  const handleOuterClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) closePopup();
  };

  const closePopup = () => setIsContact(false);

  const successMsgList = data.contact.submit.map((value, index) => (
    <Message key={index} isActive text={value} />
  ));

  return (
    <>
      <Spinner isActive={isSubmiting} />
      <Wrapper onClick={handleOuterClick} containerRef={containerRef} isCenter={isCenter}>
        <Title text={isComplete ? 'Thank You.' : 'Contact Me.'} />
        <ContentBox>
          {isComplete ? (
            <>
              <GradientBox>{successMsgList}</GradientBox>
              <Button text="확 인" onClick={closePopup} />
            </>
          ) : (
            <>
              <CloseBtn onClick={closePopup} />
              <Input title="보내는 곳" isdisabled />
              <form ref={formRef} onSubmit={sendEmail}>
                <Input title="제목" name="title" />
                <Input title="이름" name="name" />
                <Input title="메일 주소" name="email" />
                <TextArea name="message" />
                <Message isActive={isBlank} text="모든 항목 작성 부탁드립니다." />
                <Button text="전 송" />
              </form>
            </>
          )}
        </ContentBox>
      </Wrapper>
    </>
  );
};

export default Contact;
