// Data
const artists = await fetch("./src/collection.json")
	.then((response) => response.json())
	.catch((error) => console.error("Error loading JSON:", error));


// DOM
const collection = document.getElementById("collection");




// function

artists.forEach((artist) => {
	const content = document.createElement("article");
	content.classList.add("collection-item");

  let genresHTML = '';
  artist.genre.forEach((genre) => {
      genresHTML += `<p class="card__genre-item">${genre}</p> `;
  });
	
  content.innerHTML = `
                <div class="card">
                    <div class="card__image">
                        <picture>
                            <img src="${artist.picture}" alt="${artist.name}">
                        </picture>
                    </div>
                    <div class="card__genre">
                        ${genresHTML}
                    </div>
                    <div class="card__text">
                        <h2 class="card__title">${artist.name}</h2>
                        <p class="card__description">${artist.description}</p>
                        <hr>
                        <div class="card__links">
                            <a href="${artist.youtube}">
                                <img src="./assets/youtube.png" alt="youtube">
                            </a>
                            <a href="${artist.spotify}">
                                <img src="./assets/spotify.png" alt="spotify">
                            </a>
                            <a href="${artist.instagram}">
                                <img src="./assets/instagram.png" alt="instagram">
                            </a>
                        </div>
                    </div>
                </div>
  `;

  collection.appendChild(content);
});
