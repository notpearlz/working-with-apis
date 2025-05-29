const form = document.querySelector("form");
const search = document.getElementById("search");
const img = document.querySelector("img");


const validSearch = () => {
    console.log("yes")
    // A validation would go here
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(validSearch){
        fetch(
            "https://api.giphy.com/v1/gifs/translate?api_key=tIzb3AThmrdJciOYx1YVs7LuogxMzFQC&s=" + search.value,
            { mode: "cors" }
            )
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                img.src = response.data.images.original.url;
            });

    }

})