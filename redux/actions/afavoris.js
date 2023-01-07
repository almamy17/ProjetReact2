import { ADD_FAVORIS,REMOVE_FAVORIS } from "../constants/index"

export function addFavoris(fav) {
    return {
        type: ADD_FAVORIS,
        value: fav
    }
}



export function removeFavoris(favIndex) {
    return {
        type: REMOVE_FAVORIS,
        value: favIndex
    }
}