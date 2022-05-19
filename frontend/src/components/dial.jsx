const Dial = (props) => {
  return (
    <div className="dial-number" onClick={props.onClick}>
      <h3>{props.number}</h3>
      <p>{props.letters}</p>
    </div>
  );
};

export default Dial;
