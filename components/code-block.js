import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/cjs/styles/prism/coy";
import css from "styled-jsx/css";

function CodeBlock({ language, value }) {
  return (
    <div>
      <SyntaxHighlighter language={language} style={coy}>
        {value}
      </SyntaxHighlighter>
      <style jsx>{styles}</style>
    </div>
  );
}

const styles = css`
  div {
    margin-bottom: 1.45rem;
  }
`;
export default CodeBlock;
