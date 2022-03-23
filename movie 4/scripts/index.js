let images = [
   
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2180/1122180-h-0046ac044aa6",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6535/846535-h",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3668/593668-h",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/1166/1770001166/1770001166-h",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6715/1106715-h-7b88aaf59197",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2068/1062068-h-54b155e41999",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/9466/1000019466/1000019466-h",
];



let i = 1;
let container = document.getElementById("slideshow");

container.innerHTML = null;
let img = document.createElement("img");
img.src = images[0];
container.append(img);

let id = setInterval(function(){
    if(i==images.length){
        i=0;
    }
    let image = images[i];
    container.innerHTML = null;
    let img = document.createElement("img");
    img.src = image;
    container.append(img);
    i++;
}, 2000)


let movieData =[];
function movie(name, date, poster, rating){
    this.name = name;
    this.releaseDate = date;
    this.poster = poster;
    this.rating = rating;
};

let movie1 = new movie("Titanic", "02/01/1667", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1166/1770001166/1770001166-v", 8.3);
movieData.push(movie1);

let movie2 = new movie("Rudra", "15/10/2021", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2181/1122181-v-0fa7b5e161de",7.2);
movieData.push(movie2);

let movie3 = new movie("Son of sardar", "12/02/1560", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/9466/1000019466/1000019466-v", 8.1);
movieData.push(movie3);

let movie4 = new movie("De De Pyar de", "23/01/2022", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5953/525953-v", 7.5);
movieData.push(movie4);

let movie5 = new movie("Baghi 3", "20/07/2018", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v", 8.8);
movieData.push(movie5);

let movie6 = new movie("Avengers", "13/04/2015", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5157/875157-v", 9.3);
movieData.push(movie6);

let movie7 = new movie("Mahabharat", "25/02/2022", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7527/267527-v", 7.0);
movieData.push(movie7);

let movie8 = new movie("Chichore", "05/03/2014", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v", 9.2);
movieData.push(movie8);

let movie9 = new movie("House full 4", "25/12/2021", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v", 8.0);
movieData.push(movie9);

localStorage.setItem("movies", JSON.stringify(movieData));

function showMovies(movieData){
    document.getElementById("movies").innerHTML = null;
    movieData.map(function(elem){
        
        let mainDiv = document.createElement("div");
        let img = document.createElement("img");
        img.src = elem.poster;

        let name = document.createElement("h3");
        name.innerText = elem.name;

        let date = document.createElement("p");
        date.innerText = elem.releaseDate;

        let rating = document.createElement("p");
        rating.innerText = elem.rating + "⭐";

        let imgDiv = document.createElement("div");
        imgDiv.append(img);

        let dataDiv = document.createElement("div");
        dataDiv.append(name, date, rating);

        mainDiv.append(imgDiv, dataDiv);
        document.getElementById("movies").append(mainDiv);
    })

}

showMovies(movieData);