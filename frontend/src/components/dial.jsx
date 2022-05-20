import { alignProperty } from "@mui/material/styles/cssUtils";

const Dial = (props) => {
  return (
    <div
      className="dial-number"
      onClick={props.onClick}
      data-number={props.number}
    >
      <h3>{props.number}</h3>
      <p>{props.letters}</p>
    </div>
  );
};

export default Dial;
