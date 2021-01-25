let index = 0

const people = [
  {
    text:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    photo: "./images/image-tanya.jpg",
    name: "Tanya Sinclair",
    title: "UX Engineer"
  },
  {
    text:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    photo: "./images/image-john.jpg",
    name: "John Tarkpor",
    title: "Junior Front-end Developer"
  }
]

function updateElements(index) {
  document.querySelector('#photo img').setAttribute('src', people[index].photo)
  document.querySelector('#text-content p').innerText = people[index].text
  document.querySelector("#name").innerText = people[index].name
  document.querySelector("#title").innerText = people[index].title
}

document.querySelector("#leftBtn").addEventListener('click', function() {
  index -= 1
  if (index < 0) {
    index = people.length - 1
  } 
  updateElements(index)
})

document.querySelector("#rightBtn").addEventListener('click', function() {
  index += 1
  if (index > people.length - 1) {
    index = 0
  } 
  updateElements(index)
})