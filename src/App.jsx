import { useState, useRef, useEffect } from "react";
import "./App.css";
import { Flex } from "@chakra-ui/react";
import Drawer from "./components/Drawer";
import MainSection from "./components/section/MainSection";
import SecondSection from "./components/section/SecondSection";
import ScrollableSection from "./components/section/ScrollableSection";

function App() {
  const [isOpen, setOpen] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play();
    }
  }, [isOpen]);

  return (
    <Flex width="svw" height="svh" bg="white">
      <MainSection />

      {isOpen ? (
        <>
          <Drawer />
          <ScrollableSection />
          <audio ref={audioRef}>
            <source
              src="https://invitato.net/test-product-engineer/static/bg-sound-a2a8927862ee1aa412b3df1a7e46ff7c.mp3"
              type="audio/mp3"
            />
          </audio>
        </>
      ) : (
        <SecondSection isOpen={isOpen} setOpen={setOpen} />
      )}
    </Flex>
  );
}

export default App;
