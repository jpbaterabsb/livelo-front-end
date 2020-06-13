import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com'
}); 

const getUserProfile = username => {
    return api.get(`/users/${username}`)
}

const getUserRepos = (username, page) => {
    return api.get(`https://api.github.com/users/${username}/repos?page=${page}&per_page=9`)
}

const getUserStars = (username, page) => {
    return api.get(`https://api.github.com/users/${username}/starred?page=${page}&per_page=9`)   
}

export { getUserProfile, getUserRepos, getUserStars }