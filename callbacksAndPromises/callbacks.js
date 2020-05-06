let posts = [
  { title: "Post One", body: "This is post One" },
  { title: "Post Two", body: "This is post Two" }
];

function getPosts() {
  let output = "";
  console.log("getPosts");
  setTimeout(() => {
    console.log("getPosts - setTimeout");
    posts.map(post => {
      output += `<li>${post.title} - ${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  console.log("createPosts");
  setTimeout(() => {
    console.log("createPosts - setTimeout");
    posts = [...posts, post];
    console.log(posts);
    callback();
  }, 2000);
}
createPost({ title: "Post Three", body: "This is post Three" }, getPosts);
