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
        searchGif();
    }

})




const searchGif =  async () => {
    const response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=tIzb3AThmrdJciOYx1YVs7LuogxMzFQC&s=" + search.value, { mode: "cors" });
    const searchData = await response.json();
    
    img.src = searchData.data.images.original.url;
}