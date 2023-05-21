import { Render } from "./render.js";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'abe788d3b8msh11c31a0298c4147p1d6873jsn32c39277660b',
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	}
};


export const GetData = async()=> {
    let data = await (await fetch(`https://airbnb13.p.rapidapi.com/search-location?location=Bogota&checkin=2023-09-16&checkout=2023-09-17&adults=1`,options)).json()
    Render(data)
}

export const GetDataTown = async(cuidad)=> {
    let data = await (await fetch(`https://airbnb13.p.rapidapi.com/search-location?location=${cuidad}&checkin=2023-09-16&checkout=2023-09-17&adults=1`,options)).json()
    Render(data)
    // console.log(data);
}