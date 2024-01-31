import { styled } from "../constant/styled";

// 레이아웃
const Wrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-rows: 30px 1fr;
`;

// 헤더
const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid wheat;
  padding: 0 10px;
`;
const Rollup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & > img {
    width: 16px;
    height: 16px;
    object-fit: cover;
    rotate: 270deg;
  }
`;
const Title = styled.div`
  font-weight: 600;
`;
const DragBtn = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 13px);
  cursor: grab;
  & > img {
    width: 26px;
    height: 26px;
    object-fit: cover;
  }
`;

// 메인
const Main = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
`;
const SelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 0 10px;
`;
const Select = styled.div`
  position: relative;
  border: 3px solid wheat;
  border-radius: 10px;
  background: white;
`;
const Selected = styled.div`
  padding: 8px 20px;
  color: wheat;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: lightgray;
  }
`;
const OptionBox = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  max-height: 200px;
  /* display: flex; */
  display: none;
  flex-direction: column;
  border: 3px solid wheat;
  border-radius: 10px;
  background: white;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  & > div:nth-of-type(-n + 5) {
    border-bottom: 1px solid wheat;
  }
`;
const Option = styled.div`
  color: wheat;
  line-height: 40px;
  padding: 0 20px;
  cursor: pointer;
  &:hover {
    background: lightgray;
  }
`;
const FileBox = styled.div`
  width: 100%;
  padding: 5px;
`;
const File = styled.div`
  border: 1px solid wheat;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 25px 1fr;
  overflow: hidden;
`;
const FileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
`;
const FileRollup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & > img {
    width: 10px;
    height: 10px;
    object-fit: cover;
    rotate: 270deg;
  }
`;
const FileTitle = styled.div`
  font-size: small;
`;
const FileContent = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: black;
  & .line-info {
    background: #bbdfff;
    line-height: 30px;
    & p:nth-last-of-type(-n + 2) {
      background: #ddf4ff;
    }
    & > div > label {
      display: none;
    }
  }
  & .add {
    background: #ccffd8;
    & p:nth-last-of-type(-n + 2) {
      background: #e6ffec;
    }
  }
  & .sub {
    background: #ffd7d5;
    & p:nth-last-of-type(-n + 2) {
      background: #ffebe9;
    }
  }
`;
const Line = styled.div`
  display: grid;
  grid-template-columns: 20px 30px 30px 22px 1fr;
  line-height: 20px;
  & p {
    margin: 0;
  }
  & p:nth-of-type(-n + 2) {
    padding: 0 5px;
    text-align: right;
  }
  & p:nth-of-type(3) {
    text-align: center;
    font-weight: 400;
  }
  & p:nth-of-type(4) {
    text-align: start;
  }
`;
const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & input {
    display: none;
    &:checked + label {
      background: gray;
    }
  }
  & label {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 2px solid gray;
    cursor: pointer;
  }
`;

export {
  CheckBox,
  DragBtn,
  File,
  FileBox,
  FileContent,
  FileHeader,
  FileRollup,
  FileTitle,
  Header,
  Line,
  Main,
  Option,
  OptionBox,
  Rollup,
  Select,
  SelectBox,
  Selected,
  Title,
  Wrapper,
};
