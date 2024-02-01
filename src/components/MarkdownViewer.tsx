import { Viewer } from "@toast-ui/react-editor";
import { styled } from "../constant/styled";
import { Dispatch, useEffect, useRef, useState } from "react";

interface GithubProps {
  files: Map<string, any[]>;
  setFiles: Dispatch<Map<string, any[]>>;
}

const gitPlugin = () => {
  const toHTMLRenderers = {
    GitPlus(node: any) {
      let body = node.literal;
      const bodyList = body.split(" ");
      console.log(bodyList);
      return [
        {
          type: "openTag",
          tagName: "div",
          outerNewLine: true,
          attributes: {
            style: `color:hotpink; background-color:black; display: grid; grid-template-columns: repeat(4, 1fr); line-height: 20px`,
          },
        },
        {
          type: "openTag",
          tagName: "div",
          outerNewLine: true,
          attributes: {
            style: `color:hotpink; background-color:black;`,
          },
        },
        {
          type: "html",
          content: bodyList[0],
        },
        { type: "closeTag", tagName: "div", outerNewLine: true },
        {
          type: "openTag",
          tagName: "div",
          outerNewLine: true,
          attributes: {
            style: `color:hotpink; background-color:black;`,
          },
        },
        {
          type: "html",
          content: bodyList[1],
        },
        { type: "closeTag", tagName: "div", outerNewLine: true },
        {
          type: "openTag",
          tagName: "div",
          outerNewLine: true,
          attributes: {
            style: `color:hotpink; background-color:black;`,
          },
        },
        {
          type: "html",
          content: bodyList[2],
        },
        { type: "closeTag", tagName: "div", outerNewLine: true },
        {
          type: "openTag",
          tagName: "div",
          outerNewLine: true,
          attributes: {
            style: `color:hotpink; background-color:black;`,
          },
        },
        {
          type: "html",
          content: bodyList[3],
        },
        { type: "closeTag", tagName: "div", outerNewLine: true },
        { type: "closeTag", tagName: "div", outerNewLine: true },
      ];
    },
    GitMinus(node: any) {
      let body = node.literal;
      const bodyList = body.split(" ");
      console.log(bodyList);
      return [
        {
          type: "openTag",
          tagName: "div",
          outerNewLine: true,
          attributes: {
            style: `color: black; background-color: hotpink; display: grid; grid-template-columns: repeat(4, 1fr); line-height: 20px`,
          },
        },
        {
          type: "openTag",
          tagName: "div",
          outerNewLine: true,
          attributes: {
            style: `color: black; background-color: hotpink;`,
          },
        },
        {
          type: "html",
          content: bodyList[0],
        },
        { type: "closeTag", tagName: "div", outerNewLine: true },
        {
          type: "openTag",
          tagName: "div",
          outerNewLine: true,
          attributes: {
            style: `color: black; background-color: hotpink;`,
          },
        },
        {
          type: "html",
          content: bodyList[1],
        },
        { type: "closeTag", tagName: "div", outerNewLine: true },
        {
          type: "openTag",
          tagName: "div",
          outerNewLine: true,
          attributes: {
            style: `color: black; background-color: hotpink;`,
          },
        },
        {
          type: "html",
          content: bodyList[2],
        },
        { type: "closeTag", tagName: "div", outerNewLine: true },
        {
          type: "openTag",
          tagName: "div",
          outerNewLine: true,
          attributes: {
            style: `color: black; background-color: hotpink;`,
          },
        },
        {
          type: "html",
          content: bodyList[3],
        },
        { type: "closeTag", tagName: "div", outerNewLine: true },
        { type: "closeTag", tagName: "div", outerNewLine: true },
      ];
    },
  };

  return { toHTMLRenderers };
};

const ViewerContainer = styled.div`
  height: 100%;
  overflow: auto;
`;

const MarkdownViewer = ({ files, setFiles }: GithubProps) => {
  const viewerRef = useRef<Viewer>(null);

  const [viewerContent, setViewerContent] = useState("");

  useEffect(() => {
    const fileName = Array.from(files.keys())[0];
    console.log(fileName);

    const updatedContentList = Array.from(files.values())
      .flatMap((value) => {
        return value;
      })
      .map((eachValue) => {
        console.log(eachValue);
        if (eachValue.value[0] === "+") {
          return [
            eachValue.lineNo,
            `$$GitPlus\n${eachValue.value[0]} ${eachValue.value[1]} ${eachValue.value[2]} ${eachValue.value[3]}\n$$`,
          ];
        } else {
          return [
            eachValue.lineNo,
            `$$GitMinus\n${eachValue.value[0]} ${eachValue.value[1]} ${eachValue.value[2]} ${eachValue.value[3]}\n$$`,
          ];
        }
      })
      .sort((a, b) => a[0] - b[0]);
    console.log(updatedContentList);

    const updatedContent =
      fileName +
      "\n" +
      updatedContentList.map((content) => content[1]).join("\n");

    fileName
      ? setViewerContent(updatedContent)
      : setViewerContent(viewerContent);
  }, [files]);

  useEffect(() => {
    viewerRef.current?.getInstance().setMarkdown(viewerContent);
  }, [viewerContent]);

  return (
    <ViewerContainer>
      <Viewer
        ref={viewerRef}
        initialValue={viewerContent}
        plugins={[gitPlugin]}
      />
    </ViewerContainer>
  );
};

export default MarkdownViewer;
