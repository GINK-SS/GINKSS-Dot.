import { useState, useEffect } from 'react';
import NameContent from '../../components/profile/Name';

interface NameProps {
  words: string[];
  delay: number;
  stayDelay: number;
}

const Name = ({ words, delay, stayDelay }: NameProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentText = words[currentWordIndex];

    if (!isDeleting && currentWord.length === currentText.length) {
      setTimeout(() => setIsDeleting(true), stayDelay);
    } else if (isDeleting && currentWord === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1));
    }

    const changeCurrentWord = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentWord(currentText.slice(0, currentWord.length + 1));
        } else {
          setCurrentWord(currentWord.slice(0, currentWord.length - 1));
        }
      },
      isDeleting ? delay / 2 : delay
    );

    return () => clearTimeout(changeCurrentWord);
  }, [currentWord, currentWordIndex, delay, stayDelay, isDeleting, words]);

  useEffect(() => {
    const changeCursor = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, delay * 1.5);
    return () => clearInterval(changeCursor);
  }, [delay, showCursor]);

  return <NameContent text={currentWord} cursor={showCursor ? '|' : ''} />;
};

export default Name;
