export const Section = props => {
  return (
    <>
      <p>{props.title}</p>
      {props.children}
    </>
  );
};
