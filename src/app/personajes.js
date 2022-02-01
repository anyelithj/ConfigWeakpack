import {endpoint} from "./helpers"

export const personajes = async() => {
    const res = await fetch(endpoint);
    const {results} = await res.json();
    return results

}