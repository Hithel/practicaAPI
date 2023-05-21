import { GetData,GetDataTown } from "./APi.js";
import { Render } from "./render.js";

let form = document.querySelector("#Buscar")

GetData()
Render()

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let cuidad = document.querySelector(".cuidad").value;

    GetDataTown(cuidad)
    Render()
})
