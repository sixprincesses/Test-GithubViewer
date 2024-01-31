import { useState } from "react";
import pause from "./asset/pause.png";
import play from "./asset/play.png";
import CodeEditor from "./components/CodeEditor";
import Github from "./components/Github";
import Markdown from "./components/Markdown";
import {
  Cancle,
  Confirm,
  ControlBtn,
  Controller,
  Dropdown,
  DropdownBtn,
  DropdownMenu,
  DropdownOption,
  EditorBox,
  Footer,
  FooterBtns,
  Header,
  Layout,
  Timer,
  ViewerBox,
  Wrapper,
} from "./style/AppStyle";

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const [files, setFiles] = useState(new Map());

  return (
    <Layout>
      <Wrapper>
        <Header>
          <Timer>00:00:00</Timer>
          <Controller>
            {isPlay ? (
              <ControlBtn src={play} alt="일시정지" />
            ) : (
              <ControlBtn src={pause} alt="재생" />
            )}
          </Controller>
        </Header>
        <EditorBox>
          <Github files={files} setFiles={setFiles} />
          <Markdown />
          <CodeEditor />
        </EditorBox>
        <ViewerBox></ViewerBox>
        <Footer>
          <Dropdown>
            <DropdownBtn>+</DropdownBtn>
            <DropdownMenu>
              <DropdownOption>Markdown</DropdownOption>
              <DropdownOption>Code Editor</DropdownOption>
              <DropdownOption>Github</DropdownOption>
            </DropdownMenu>
          </Dropdown>
          <FooterBtns>
            <Cancle>취소</Cancle>
            <Confirm>저장</Confirm>
          </FooterBtns>
        </Footer>
      </Wrapper>
    </Layout>
  );
}

export default App;
