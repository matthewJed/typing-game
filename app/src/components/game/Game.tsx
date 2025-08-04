import { useEffect, useState } from "react";
const staticGameText =
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.';

const characters = staticGameText.split("");
const Game = () => {
  const [typedText, setTypedText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [errorIndex, setErrorIndex] = useState<number>(-1);
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      //here will go game logic we want to see if the key_code representing some key is the same as the char in the

      //so we need to update currentIndex
      setCurrentIndex((prevIndex) => {
        if (event.key === characters[currentIndex]) {
          setTypedText((prevText) => prevText + characters[currentIndex]);
          setErrorIndex(-1);
          return prevIndex + 1;
        } else {
          setErrorIndex(currentIndex);
        }
        return prevIndex;
      });
      console.log(event.key);
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [characters, currentIndex]);
  let className = "";
  return (
    <div>
      <h2 className="font-arcade text-xl">Start Typing!</h2>
      {characters.map((char, index) => {
        let className = "";
        if (errorIndex == -1 && currentIndex === typedText.length) {
          className = "text-slate-600";
        } else if (errorIndex === currentIndex) {
          className = "text-red-400";
        } else if (index < typedText.length) {
          className = "text-slate-400";
        }
        return (
          <span key={index} className={className}>
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default Game;
