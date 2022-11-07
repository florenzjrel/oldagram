import { posts } from "/data.js";

document.addEventListener("click", function (e) {
  if (e.target.dataset.like) {
    handleLikedPost(e.target.dataset.like);
  }
});

function handleLikedPost(postId) {
  const likedPostObj = posts.filter(function (post) {
    return post.uuid === postId;
  })[0];

  if (likedPostObj.isLiked) {
    likedPostObj.likes--;
  } else {
    likedPostObj.likes++;
  }

  likedPostObj.isLiked = !likedPostObj.isLiked;
  render();
}

function getPostHtml() {
  let postHtml = ``;

  posts.forEach(function (post) {
    let likePostClass = "";

    if (post.isLiked) {
      likePostClass = "liked fa-solid";
    }

    postHtml += `
        <div class="user-info">
          <img src="${post.avatar}" class="img-user-avatar">
          <div>
              <p class="bold-text">${post.name}</p>
              <p class="normal-text">${post.location}</p>
          </div>
        </div>

        <img src="${post.post}" alt="" class="post-image">

        <div class="icon">
          <i class="fa-regular fa-heart ${likePostClass}" data-like="${post.uuid}"></i>
          <i class="fa-regular fa-comment"></i>
          <i class="fa-regular fa-paper-plane"></i>
        </div>

        <div class="body-icon-caption">
          <p class="bold-text">${post.likes} likes</p>
          <p class="normal-text"><span class="bold-text">${post.username}</span> ${post.comment}</p>
        </div>
    `;
  });

  return postHtml;
}

function render() {
  document.getElementById("article-el").innerHTML = getPostHtml();
}

render();
