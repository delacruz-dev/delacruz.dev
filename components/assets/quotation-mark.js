import * as React from "react";

function QuotationMark(props) {
  return (
    <svg width={40} height={30} {...props}>
      <title>{"Quotation mark"}</title>
      <path d="M15.567 4.43c5.094 5.718 1.585 15.672-2.657 19.52-3.615 3.28-9.605 5.961-10.17 5.025-.897-1.49 2.636-2.547 5.293-4.938 3.316-3.586 4.43-5.198-.16-7.221-4.918-2.22-5.012-4.391-5.17-7.154C2.305 2.71 10.593-.545 15.567 4.43zM34.739 4.528c5.095 5.719 1.585 15.673-2.657 19.522-3.615 3.28-9.605 5.96-10.17 5.024-.897-1.49 2.636-2.547 5.293-4.938 3.316-3.586 4.43-5.198-.159-7.221-4.919-2.22-5.013-4.391-5.171-7.153-.398-6.954 7.89-10.207 12.864-5.234z" />
    </svg>
  );
}

export default QuotationMark;
