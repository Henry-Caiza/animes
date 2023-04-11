const $app = document.getElementById('app');
const API = "https://anime-db.p.rapidapi.com/anime?page=1&size=9&sortBy=ranking&sortOrder=asc";


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b238a60885msh099b034f1de1456p12c7f3jsn1dc1835bfbae',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
};

const main = async () => {
    const response = await fetch(API, options);
    const dates = await response.json();
    const animes = dates.data;
    const animesList = animes?.map((anime) => {
        return `
        <article class= "Card">
            <img src="${anime.image}">
            <div class="container-body">
                <h2>
                    ${anime.title}
                </h2>
                <a href= "${anime.link}"> Ver ▶</a>
            </div>
        </article>
        `;
    }).join('');
    let newItem = document.createElement('section');
    newItem.classList.add("Items");
    newItem.innerHTML = animesList;
    $app.appendChild(newItem);
}
main();
