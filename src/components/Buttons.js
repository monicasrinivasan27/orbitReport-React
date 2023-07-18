import satData from "./satData";
import './styling.css';

const Buttons = (props) => {
  //filterByType, setSat, and displaySats
  //console.log(props.displaySats);
  //console.log("helo");
  return(
  <div className="flex-container">
    {props.displaySats.map((sat, id) => {
  return (
    <button onClick={() => props.filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
    })}
        <button onClick={() =>props.setSat(satData)}>
          All Orbit
        </button>
    </div>
  );
}
export default Buttons;
/*Inside the <button> tag, create an onClick function that points to setSat. Pass satData to setSat.*/