import { styled } from "../constant/styled";

// 레이아웃
const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 1000px;
  height: 100%;
  min-height: 600px;
  border: 3px solid wheat;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
`;

// 헤더
const Header = styled.div`
  grid-row: 1/2;
  grid-column: 1/3;
  background: wheat;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
`;
const Timer = styled.div`
  font-size: 26px;
  font-weight: 600;
  line-height: 0;
`;
const Controller = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;
const ControlBtn = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

// 에디터
const EditorBox = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
  display: flex;
  align-items: start;
  justify-content: center;
  border-right: 3px solid wheat;
  margin: 20px 0;
  padding-bottom: 50px;
  overflow-y: scroll;
  & > div {
    border: 3px solid wheat;
    border-radius: 10px;
  }
`;

// 뷰어
const ViewerBox = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  margin: 20px 0;
  padding-bottom: 50px;
`;

// 푸터
const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;
const Dropdown = styled.div`
  position: relative;
`;
const DropdownBtn = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: wheat;
  font-size: xx-large;
  font-weight: 600;
  line-height: 0;
  padding-bottom: 7px;
  background: white;
  border: 3px solid wheat;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background: lightgray;
  }
`;
const DropdownMenu = styled.div`
  position: absolute;
  bottom: 60px;
  left: 0px;
  width: 300px;
  /* display: block; */
  display: none;
  border: 3px solid wheat;
  border-radius: 10px;
  overflow: hidden;
  & > div:nth-of-type(-n + 2) {
    border-bottom: 1px solid wheat;
  }
`;
const DropdownOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 50px;
  background: white;
  cursor: pointer;
  &:hover {
    background: lightgray;
  }
`;
const FooterBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 40px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;
const Cancle = styled.div`
  border: 3px solid wheat;
  color: wheat;
`;
const Confirm = styled.div`
  background: wheat;
  color: white;
`;

export {
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
};
