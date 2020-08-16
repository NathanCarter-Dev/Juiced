const juice = document.querySelector(".juice-img")

const juices = document.querySelectorAll(".juice-button").forEach((item) => {
  item.addEventListener("click", (e) => {
    if(item.classList.contains("yellow")) {
      juice.setAttribute("src", "./images/juice-yellow.png")
    } else if(item.classList.contains("red")) {
      juice.setAttribute("src", "./images/juice-red.png")
    }
    else {
      juice.setAttribute("src", "./images/juice-green.png")
    }
    
  })
})

