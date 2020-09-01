import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: "Hi", likesCount: 12},
            {id: 2, message: "Ku-Ku", likesCount: 8},
            {id: 3, message: "H2O Pro", likesCount: 10}
        ],
        newPostText: '',
    },
    dialogsPage: {
        messagesData: [{id: 1, message: "Hi"}, {id: 2, message: "Ku-Ku"}, {id: 3, message: "H2O"}],
        dialogsData: [{id: 1, name: "Dima"}, {id: 2, name: "Julia"}, {id: 3, name: "Tanya"}],
    }
}

export let  addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state