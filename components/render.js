let containerCards = document.querySelector("#containerCards")

export function Render(data){

    data.results.forEach((e) => {
        let div = document.createElement("div")

        div.setAttribute("class", "col-12 col-sm-5 col-lg-4 col-xl-3")
        div.setAttribute("id","cards")
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${e.images[0]}" class="card-img-top" >
            <div class="card-body">
                <h5 class="card-title">${e.name}</h5>
                <p class="card-text">${e.address}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
        containerCards.appendChild(div);
    });
}