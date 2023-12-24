const $ = (s) => document.querySelector(s);

const Card = [
  {
    title: "iPHONE 8",
    img: {
      src: "img/Iphone-8.jpg",
    }
  },
  {
    title: "iPHONE 9",
    img: {
      src: "img/iphone-9.jpg",
    }
  },
  {
    title: "iPHONE X",
    img: {
      src: "img/iphone-8...jpg",
    }
  },
  {
    title: "iPHONE 11",
    img: {
      src: "img/iphone-11.jpg",
    }
  },
  {
    title: "iPHONE 12",
    img: {
      src: "img/iphone 12.jpg",
    }
  }
];

const initCard = (function() {
  const createContent = function(content) {
    const $card = document.createElement('figure')
    $card.classList.add('card')
    $card.classList.add('cardDesign')
    const $lineSeparator = document.createElement('div')
    // $lineSeparator.classList.add('lineSeparator')
    // $card.appendChild($lineSeparator)
    const $imgCard = document.createElement('div')
    $imgCard.classList.add('imgCard')
    const $img = document.createElement('img')
    $img.setAttribute('src', content.img.src)
    // $img.setAttribute('alt', content.img.alt)
    $img.setAttribute('title', content.img.title)
    $imgCard.appendChild($img)
    $card.appendChild($imgCard)
    const $title = document.createElement('figcaption')
    $title.innerText = content.title;
    $card.appendChild($title)
    return $card
  }
  const $CardBloc = document.createElement('div')
  const $CardContent = document.createElement('div')
  $CardContent.classList.add('creationsBlocUl')
  Card.forEach((e, index) => $CardContent.appendChild(createContent(e)))
  $CardBloc.appendChild($CardContent)
  $('section').appendChild($CardBloc)
})()

