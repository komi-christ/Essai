//const API_TOKEN = 'd00ac75802a7c9ca50934cda1a7d18a8';

export function getFilmsFromApiWithSearchedText(text){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=d00ac75802a7c9ca50934cda1a7d18a8 &language=fr&query=' + text
    

    return fetch(url)
        .then((Response)=> Response.json())
        .catch((error)=> console.error(error))
}