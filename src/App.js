import "./styles.css";
import data from "./Data";

export default function App() {
  let avatar = Math.floor(Math.random() * data.length);
  console.log(data[avatar]);
  return (
    <div className="App">
      <h1>International Space Station</h1>
      <div className="App1">
        <p>
          "Señor hemos recibido varias señales emitidas por distintas objetos no
          identificados"
        </p>
      </div>
      <center>
        <div className="App2">
          <img
            className="Imagen"
            width="150"
            height="150"
            src="https://api.minimalavatars.com/avatar/random/png"
          ></img>
        </div>
      </center>
      <h2 className="App">
        <ins> Person</ins>: {data[avatar].name}{" "}
      </h2>
      <h3 className="App">
        <ins> Surname</ins>: {data[avatar].surname}{" "}
      </h3>
      <h3 className="App">
        <ins> Planet</ins>: {data[avatar].planet}{" "}
      </h3>
      <h4 className="App">
        <ins> Statement</ins>: <i>{data[avatar].phrase} </i>
      </h4>
    </div>
  );
}
