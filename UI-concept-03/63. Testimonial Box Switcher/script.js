const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Sarakhan',
    position: 'Marketing',
    photo:
      'https://randomuser.me/api/portraits/men/38.jpg',
    text:
      "Voluptas cupiditate quos quasi excepturi quis, nam consequatur sapiente minima ea assumenda eius ipsa animi eum laudantium asperiores! Atque ipsum perferendis ducimus est, beatae saepe voluptates sed numquam officiis voluptatibus?",
  },
  {
    name: 'Natali',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/men/48.jpg',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem blanditiis labore minima officiis eveniet qui voluptates quisquam magnam, amet cumque. Voluptas cupiditate quos quasi excepturi quis, nam consequatur sapiente minima ea assumenda eius ipsa animi eum laudantium asperiores! Atque ipsum perferendis ducimus est, beatae saepe voluptates sed numquam officiis voluptatibus?',
  },
  {
    name: 'Jon Joe',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/men/62.jpg',
    text:
      "Exercitationem blanditiis labore minima officiis eveniet qui voluptates quisquam magnam, amet cumque. Voluptas cupiditate quos quasi excepturi quis, nam consequatur sapiente minima ea assumenda eius ipsa animi eum laudantium asperiores!",
  },
  {
    name: 'Fernando Domengiz',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/men/35.jpg',
    text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/13.jpg',
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: 'Anderas Luis',
    position: 'Accountant',
    photo:
      'https://randomuser.me/api/portraits/men/88.jpg',
    text:
      'Exercitationem blanditiis labore minima officiis eveniet qui voluptates quisquam magnam, amet cumque. Voluptas cupiditate quos quasi excepturi quis,',
  },
  {
    name: 'Stepfan Jon',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/49.jpg',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem blanditiis labore minima officiis eveniet qui voluptates quisquam magnam, amet cumque. Voluptas cupiditate quos quasi excepturi quis,',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)