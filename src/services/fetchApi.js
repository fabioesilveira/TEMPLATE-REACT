import axios from "axios";

export async function getAllApi() {
    const url = ""
    const req = await axios.get(url)
    return req.data
}

export async function getApiById(id) {
    const url = `${id}`
    const req = await axios.get(url)
    return req.data
}

export async function getApiByQuery(query) {
    const url = `${query}`
    const req = await axios.get(url)
    return req.data
}