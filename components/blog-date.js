import css from "styled-jsx/css";

function reformatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toDateString().slice(4);
}

export default function BlogDate(props) {
  if (!props) return null;
  return (
    <>
      <time dateTime={new Date(props.date).toISOString()} className="date">
        {reformatDate(props.date)}
      </time>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .date {
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 4px;
    color: #4a4a4a;
    display: inline-flex;
    font-size: 0.75rem;
    height: 2em;
    justify-content: center;
    line-height: 1.5;
    padding-left: 0.75em;
    padding-right: 0.75em;
    white-space: nowrap;
  }
`;
