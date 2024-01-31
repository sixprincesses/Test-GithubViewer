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
      return [
        {
          type: "openTag",
          tagName: "div",
          outerNewLine: true,
          attributes: { style: `color:hotpink; background-color:black` },
        },
        { type: "html", content: body },
        { type: "closeTag", tagName: "div", outerNewLine: true },
      ];
    },
    GitMinus(node: any) {
      let body = node.literal;
      return [
        {
          type: "openTag",
          tagName: "div",
          outerNewLine: true,
          attributes: { style: `color:black; background-color:hotpink` },
        },
        { type: "html", content: body },
        { type: "closeTag", tagName: "div", outerNewLine: true },
      ];
    },
  };

  return { toHTMLRenderers };
};

const ViewerContainer = styled.div``;
const MarkdownViewer = ({ files, setFiles }: GithubProps) => {
  const viewerRef = useRef<Viewer>(null);

  const [viewerContent, setViewerContent] = useState("");

  useEffect(() => {
    const newFiles = [];
    files.forEach((value, key) => {
      console.log(value[0].value[0]);
      value.forEach((eachValue) => {
        if (eachValue.value[0] === "-") {
          const newViewerContent = viewerContent;
          setViewerContent(
            newViewerContent +
              "\n" +
              "$$GitPlus\n" +
              eachValue.value[4] +
              eachValue.value[1] +
              eachValue.value[2] +
              eachValue.value[3] +
              "\n$$"
          );
        } else {
          const newViewerContent = viewerContent;
          setViewerContent(
            newViewerContent +
              "\n" +
              "$$GitMinus\n" +
              eachValue.value[4] +
              eachValue.value[1] +
              eachValue.value[2] +
              eachValue.value[3] +
              "\n$$"
          );
        }
      });
    });
    viewerRef.current?.getInstance().setMarkdown(viewerContent);
  }, [files]);
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
