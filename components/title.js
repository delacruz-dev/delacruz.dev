function Title({ children, ...props }) {
  return (
    <h1 className="title" {...props}>
      {children}
    </h1>
  );
}

export default Title;
