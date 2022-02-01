console.log("prueba index.js")
import { personajes } from "./personajes";
import {prueba} from "./prueba";
import './style.css' 

const contenedor = document.getElementById('root');

document.addEventListener('DOMContentLoaded', async () => {
  contenedor.innerHTML += prueba();
  const pers =  await personajes();
  console.log(pers);
  pers.forEach(element => {
      const {image, name, species} = element;
      contenedor.innerHTML += `
      <h1>Personajes Rick and Morty</h1>
      <div className="card">
          <img className="card-img-top" src=${image} alt="" />
          <div className="card-body">
              <h5 className="card-title">${name}</h5>
              <p className="card-text">${species}</p>
              <a href="/" className="btn btn-primary">...Más</a>
          </div>
      </div>
      
      `
  })
})