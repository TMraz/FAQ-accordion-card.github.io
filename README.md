# Frontend Mentor - FAQ accordion card solution

This is a solution to the ![FAQ accordion card challenge on Frontend Mentor](./design/desktop-preview.jpg). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

[Desktop version](./design/desktop-design.jpg)
[Mobile version](./design/mobile-design.jpg)

### Links

- [Solution URL](https://github.com/TMraz/Fylo-dark-theme-landing-page-solution.github.io)

- [Live Site URL](https://tmraz.github.io/Fylo-dark-theme-landing-page-solution.github.io/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](./js/script.js) - JS library
- [Styled Components](./css/main.css) - For Desktop style
- [Styled Components](./css/mobile.css) - For Mobile style

### What I learned

Snippets, see below:

Arrow rotation:
```css
.flip {
    transform: rotateX(180deg);
}
```

Arrow flip:
```js
$('dt').click(function () {
    $(this).find('img').toggleClass('flip') 
    $(this).siblings().find('img').removeClass('flip');
});
```
