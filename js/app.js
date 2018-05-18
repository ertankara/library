const hamburger = document
  .querySelector('#hamburger')
const aside = document
  .querySelector('aside')
const closeAsideButton = document
  .querySelector('#close-aside-button')

hamburger
  .addEventListener('click', function() {
    aside.style.transform = 'translateX(300px)'
  })

closeAsideButton
  .addEventListener('click', function() {
    aside.style.transform = 'translateX(-300px)'
    console.log('close button')
  })

