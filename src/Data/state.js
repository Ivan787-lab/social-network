import {renderTree} from "./../render"
let state = {
    profile_page: {
        text_of_posts: [
            { text: "Привет", id: 1, like: 2 },
            { text: "Пока", id: 2, like: 5, },
        ],
        newPostText : "тест"
    },
    dialogs_page: {
        dialog_name: [
            { name: "Иван Иванов", id: 1, },
            { name: "Илон Маск", id: 2, },
            { name: "Дональд Трамп", id: 3, }
        ],
        messages_item: [
            { text: "Привет", id: 1, },
            { text: "Пока", id: 2, },
            { text: "Привет", id: 3 },
        ]
    },
    sidebar: {
        friends: [
            { friend_name: "Alex", ava: 'https://thumbs.dfs.ivi.ru/storage9/contents/a/d/13b8f348513fed5c8f4845e786a88b.jpg' },
            { friend_name: "Ivan", ava: 'https://st.depositphotos.com/3413075/4786/i/600/depositphotos_47863587-stock-photo-human-anatomy.jpg' },
            { friend_name: "Sasha", ava: 'http://www.museikino.ru/upload/images/2016/02/nazarov-600.jpg' },
        ]
    }
}

export let addPost = (postText) => {
    let new_post = {text : postText , id : 5 , like : 88}
    state.profile_page.text_of_posts.unshift(new_post);
    state.profile_page.newPostText = "";
    renderTree(state)
}

export let addMessage = (messageText) => {
    let newMessage = {text : messageText , id :8}
    state.dialogs_page.messages_item.unshift(newMessage)
    renderTree(state)    
}

export let onPostChange = (text) => {
    state.profile_page.newPostText = text;
    renderTree(state)    

}

export default state;

