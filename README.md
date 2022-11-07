# Scrimba - Oldagram

This is a solution to the Oldagram, a solo project in module 4 of Scrimba's Frontend Developer Career Path.

## Table of contents

- [Overview](#overview)
  - [Requirements](#Requirements)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### Requirements

- Create first post using HTML and CSS only.
- Use semantic HTML
- Add hover effects to the icons

Stretch goals:

- Use JavaScript to render out all three posts
- Like/unlike feature when heart icon is clicked

### Screenshot

![Oldagram](/oldagram.jpg)

### Links

- Solution URL: [https://github.com/florenzjrel/oldagram](https://github.com/florenzjrel/oldagram)
- Live Site URL: [https://scrimba-oldagram.netlify.app/](https://scrimba-oldagram.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- JavaScript

### What I learned

I am particularly proud of the like/unlike feature I've learned from module 5 of the Career Path. I've also learned how to use forEach, another useful method to iterate over an array. The moment I've understood it, I went back to this project and updated my script. From using a simple for loop to forEach loop. :D I've also learned Data Attributes and how to access it. Data attributes is storing extra information in HTML elements. I also used Font Awesome CDN for this project. I am incredibly happy with my progress in learning JavaScript and I hope my Oldagram shows it. 

Some of the code snippets I'm proud of:

```js
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
```

```js
function render() {
  document.getElementById("article-el").innerHTML = getPostHtml();
}
```

### Continued development

I plan to focus more on learning JavaScript after this project so I can feel confident with it. I know there are concepts that I am still not completely comfortable with, and I am sure they are useful that's why I want to refine, improve and perfect it.
