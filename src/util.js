export const getAllMovies = (url) => {
    return fetch(url)
        .then(response => response.json())
}

// https://rancid-tomatillos.herokuapp.com/api/v2