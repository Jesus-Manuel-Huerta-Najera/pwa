import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const container = document.querySelector(".container")
const dino = [
  { name: "CUELLO LARGO DINOMANIA.", descrip:"Pintado a mano, Para jugar o cleccionistas, Mide 31 X 46 cm", image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/af2d6085-b3e7-4a62-a72d-4fd22b3ea642.2ed93734b9cf3db942262ea67e55b69a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff" },
  { name: "BARYONIX - DINOMANIA.", descrip:"Pintado a mano, Para jugar o cleccionistas, Mide 23 x 92 cm", image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/8393fe0a-fc9c-44f2-bb3f-9c8cc6973b03.7c6088451c371f497af8e774c34116ff.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff" },
  { name: "DOMINUS II DINOMANIA.", descrip:"Pintado a mano, Para jugar o cleccionistas, Mide 22 X 29 cm", image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/43ce747a-60c8-4450-b789-8198df83d60f.71938e6d512b240f6e4f375b57ef8042.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff" },
  { name: "REX GIGANTE DINOMANIA.", descrip:"Pintado a mano, Para jugar o cleccionistas, Mide 49 X 57 cm", image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/d8a18cc4-a41c-4d79-bf01-b13985314127.fae2cf7823d5d019ba266f00b794ea8f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff" },
  { name: "DOMINUS DINOMANIA.", descrip:"Pintado a mano, Para jugar o cleccionistas, Mide 32 X 41 cm", image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/f1eaa2f3-e615-4812-8095-8db45868fc98.28378fb84fbff7e37c42439a71588c85.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff" },
  { name: "CARNOTAURO DINOMANIA.", descrip:"Pintado a mano, Para jugar o cleccionistas, Mide 7 x 49 X 15 cm", image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/53e5eb2e-dcad-4040-a428-e5f99abec91a.3ebcf549076a35cd81f662be36c95647.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff" },
]

const showCakes = () => {
  let output = ""
  dino.forEach(
    ({ name, descrip, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h2 class="card--title">${name}</h2>
                <p class="card--title">${descrip}</p>
                <button class="button is-light is-link" style="padding-bottom: 10px;">Información</button>
                <button class="button is-primary" style="padding-bottom: 10px;">Agregar</button>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCakes)
export default App;
