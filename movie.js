async function movielist(){
    let values = document.getElementById("values");
    let input = document.getElementById("input").value;

    const movie = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${input}`);
    const data = await movie.json();

    
    let movies = data.description[0];
        
    let all = document.createElement("div");
    all.className ="all"

    let img = document.createElement("img");
    img.className ="img";

    let name = document.createElement("h2");
    name.className ="mname";

    let year = document.createElement("h4");
    year.className = "year";
        
    all.appendChild(img);
    all.appendChild(name);
    all.appendChild(year);

    values.appendChild(all);

    img.src = movies["#IMG_POSTER"];
    name.innerText = "Movie Name : "+movies["#TITLE"];
    year.innerText = "Release year : "+movies["#YEAR"];




}
