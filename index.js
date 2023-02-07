let postArray = [];
let container = document.getElementById("container");
let form = document.getElementById("newPost");
let postBodyy = document.getElementById("postBody");
let postTitlee = document.getElementById("postTitle");


// https://apis.scrimba.com/jsonplaceholder/posts

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    postArray = json.slice(0, 5);
    redarPosts();
  });



form.addEventListener("submit", function (e) {
  e.preventDefault();
  const postTitle = postTitlee.value;
  const postBody = postBodyy.value;

  let data = {
    title: postTitle,
    body: postBody,
  };
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ data }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      postArray.unshift(json)
      let text = ""
            text += `
            <h3>${data.title}</h3>
            <p>${data.body }</p>
            <hr>
            `
      container.innerHTML += text
    });
  
  postBody.value = ""
  postTitle.value = ""
});

function redarPosts() {
      let text = "";
      for (let data of postArray) {
        text += `
                            <h3>${data.title}</h3>
                            <p>${data.body}</p>
                            <hr>
                            `;
      }
      container.innerHTML = text;
    }