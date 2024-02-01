import { ChangeEvent, Dispatch } from "react";
import angleBracket from "../asset/angleBracket.png";
import drag from "../asset/drag.png";
import {
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
} from "../style/GithubStyle";

interface GithubProps {
  files: Map<string, any[]>;
  setFiles: Dispatch<Map<string, any[]>>;
}

const Github = ({ files, setFiles }: GithubProps) => {
  const rowContent = {
    filename: "README.md",
    patch:
      '@@ -1,9 +1,106 @@\n-import { Outlet } from "react-router-dom";\n+import { Link, Outlet, useNavigate } from "react-router-dom";\n+import styled from "styled-components";\n+import { auth } from "../firebase";\n+\n+const Wrapper = styled.div`\n+  display: grid;\n+  gap: 20px;\n+  grid-template-columns: 1fr 4fr;\n+  height: 100%;\n+  padding: 50px 0px;\n+  width: 100%;\n+  max-width: 860px;\n+`;\n+\n+const Menu = styled.div`\n+  display: flex;\n+  flex-direction: column;\n+  align-items: center;\n+  gap: 20px;\n+`;\n+\n+const MenuItem = styled.div`\n+  cursor: pointer;\n+  display: flex;\n+  align-items: center;\n+  justify-content: center;\n+  border: 2px solid white;\n+  height: 50px;\n+  width: 50px;\n+  border-radius: 50%;\n+  svg {\n+    width: 30px;\n+    fill: white;\n+  }\n+  &.log-out {\n+    border-color: tomato;\n+    svg {\n+      fill: tomato;\n+    }\n+  }\n+`;\n \n export default function Layout() {\n+  const navigate = useNavigate();\n+  const onLogOut = async () => {\n+    const ok = confirm("Are you sure you want to log out?");\n+    if (ok) {\n+      await auth.signOut();\n+      navigate("/login");\n+    }\n+  };\n   return (\n-    <>\n+    <Wrapper>\n+      <Menu>\n+        <Link to="/">\n+          <MenuItem>\n+            <svg\n+              fill="currentColor"\n+              viewBox="0 0 20 20"\n+              xmlns="http://www.w3.org/2000/svg"\n+              aria-hidden="true"\n+            >\n+              <path\n+                clipRule="evenodd"\n+                fillRule="evenodd"\n+                d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"\n+              />\n+            </svg>\n+          </MenuItem>\n+        </Link>\n+        <Link to="/profile">\n+          <MenuItem>\n+            <svg\n+              fill="currentColor"\n+              viewBox="0 0 20 20"\n+              xmlns="http://www.w3.org/2000/svg"\n+              aria-hidden="true"\n+            >\n+              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />\n+            </svg>\n+          </MenuItem>\n+        </Link>\n+        <MenuItem onClick={onLogOut} className="log-out">\n+          <svg\n+            fill="currentColor"\n+            viewBox="0 0 20 20"\n+            xmlns="http://www.w3.org/2000/svg"\n+            aria-hidden="true"\n+          >\n+            <path\n+              clipRule="evenodd"\n+              fillRule="evenodd"\n+              d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"\n+            />\n+            <path\n+              clipRule="evenodd"\n+              fillRule="evenodd"\n+              d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"\n+            />\n+          </svg>\n+        </MenuItem>\n+      </Menu>\n       <Outlet />\n-    </>\n+    </Wrapper>\n   );\n }',
  };
  let addno = 0;
  let subno = 0;
  let lineno = 0;
  const lines = rowContent.patch.split("\n");
  const divides: [
    string,
    number | string,
    number | string,
    string,
    string,
    string,
    number
  ][] = lines.map((line) => {
    // 정규표현식
    const lineInfo = /^@@\s-(\d+),(\d+)\s\+(\d+),(\d+)\s@@.*$/;
    const addLine = /^\+(.*)/;
    const subLine = /^-(.*)/;

    const matchInfo = line.match(lineInfo);
    const matchAdd = line.match(addLine);
    const matchSub = line.match(subLine);
    if (matchInfo) {
      addno = parseInt(matchInfo[1]);
      subno = parseInt(matchInfo[3]);
      return [
        " ",
        "...",
        "...",
        line.replaceAll(" ", "\u2003"),
        rowContent.filename,
        line,
        lineno++,
      ];
    } else if (matchAdd) {
      return [
        "+",
        "",
        addno++,
        matchAdd[1].replaceAll(" ", "\u2003"),
        rowContent.filename,
        line,
        lineno++,
      ];
    } else if (matchSub) {
      return [
        "-",
        subno++,
        "",
        matchSub[1].replaceAll(" ", "\u2003"),
        rowContent.filename,
        line,
        lineno++,
      ];
    } else {
      return [
        "",
        subno++,
        addno++,
        line.replaceAll(" ", "\u2003"),
        rowContent.filename,
        line,
        lineno++,
      ];
    }
  });
  const handleLineClass = (line: string) => {
    switch (line) {
      case " ":
        return "line-info";
      case "+":
        return "add";
      case "-":
        return "sub";
      case "":
        return "none";
    }
  };

  const handleCheck = (e: ChangeEvent<HTMLInputElement>, value: any) => {
    if (e.target.checked) {
      if (files.has(value[4])) {
        files.get(value[4]).push({ lineNo: value[6], value: value });
      } else {
        files.set(value[4], [{ lineNo: value[6], value: value }]);
      }
      setFiles(new Map(files));
    } else {
      if (files.has(value[4])) {
        const filtered = files
          .get(value[4])
          .filter((line) => !(line.lineNo === value[6]));
        files.set(value[4], filtered);
        setFiles(new Map(files));
      }
    }
  };

  return (
    <Wrapper>
      <Header>
        <Rollup>
          <img src={angleBracket} alt="펼치기" />
        </Rollup>
        <Title>Github</Title>
        <DragBtn>
          <img src={drag} alt="드래그" />
        </DragBtn>
      </Header>
      <Main>
        <SelectBox>
          <Select>
            <Selected>레포지토리</Selected>
            <OptionBox>
              <Option>KTaeGyu.github.io"</Option>
              <Option>KTaeGyu</Option>
              <Option>SHHKT_project</Option>
              <Option>Solo-Chatting</Option>
              <Option>Solo-Movie</Option>
              <Option>Solo-More</Option>
            </OptionBox>
          </Select>
          <Select>
            <Selected>브랜치</Selected>
            <OptionBox>
              <Option>KTaeGyu.github.io"</Option>
              <Option>KTaeGyu</Option>
              <Option>SHHKT_project</Option>
              <Option>Solo-Chatting</Option>
              <Option>Solo-Movie</Option>
            </OptionBox>
          </Select>
          <Select>
            <Selected>커밋</Selected>
            <OptionBox>
              <Option>KTaeGyu.github.io"</Option>
              <Option>KTaeGyu</Option>
              <Option>SHHKT_project</Option>
              <Option>Solo-Chatting</Option>
              <Option>Solo-Movie</Option>
            </OptionBox>
          </Select>
        </SelectBox>
        <FileBox>
          <File>
            <FileHeader>
              <FileRollup>
                <img src={angleBracket} alt="펼치기" />
              </FileRollup>
              <FileTitle>README.md</FileTitle>
            </FileHeader>
            <FileContent>
              {divides.map((line) => (
                <Line
                  key={JSON.stringify(line)}
                  className={handleLineClass(line[0])}
                >
                  <CheckBox>
                    <input
                      type="checkbox"
                      id={JSON.stringify(line)}
                      onChange={(e) => handleCheck(e, line)}
                    />
                    <label htmlFor={JSON.stringify(line)}></label>
                  </CheckBox>
                  <p>{line[1]}</p>
                  <p>{line[2]}</p>
                  <p>{line[0]}</p>
                  <p>{line[3]}</p>
                </Line>
              ))}
            </FileContent>
          </File>
        </FileBox>
      </Main>
    </Wrapper>
  );
};

export default Github;
