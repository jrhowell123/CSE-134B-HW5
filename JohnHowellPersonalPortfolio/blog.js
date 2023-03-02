let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let dialogPopUp = document.getElementById('CRUDDialog')
let showPostBox = document.getElementById('showDialog')
let confirmBtn = document.getElementById('confirm-btn')

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
    <input type="button" onClick="editPost(this)" class= "Edit" value = "Edit">
    <input type="button" onClick="deletePost(this)" class= "Delete" value= "Delete">
    </span>
  </div>
  `;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  dialogPopUp.showModal();
  e.parentElement.parentElement.remove();
};

showPostBox.addEventListener("click", () => {
    dialogPopUp.showModal();
});

confirmBtn.addEventListener('click', () => {
    dialogPopUp.close()
});