const getMovies = (url) => {
    return fetch(url)
        .then(response => response.json())
}

export default getMovies;
