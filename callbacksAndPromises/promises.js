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
//-----------------------------------------------------------

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts = [...posts, post];

      let error = true;
      if (!error) {
        resolve();
      } else {
        reject("Error Occurred");
      }
    }, 1000);
  });
}
createPost({ title: "Post Three", body: "This is post Three" })
  .then(getPosts)
  .catch(err => (document.body.innerHTML = err));

//--------------------------------------------------------------

let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let post = { title: "Post Third...", body: "This is post Three" };
    posts = [...posts, post];

    let error = false;
    if (!error) {
      resolve("resolved message");
    } else {
      reject("Error Occurred");
    }
  }, 1000);
});

myFirstPromise
  .then(successMessage => {
    console.log("Yay! " + successMessage);
    getPosts();
  })
  .catch(err => (document.body.innerHTML = err));

//------------------------------------------------
const promise1 = Promise.resolve("Promises tutorials");
const promise2 = 100;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Good Bye");
});
const promise4 = new Promise((resolve, reject) =>
  resolve(
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json()
    )
  )
);

Promise.all([promise1, promise2, promise3, promise4])
  .then(values => console.log(values))
  .catch(err => console.log("Error", err));
