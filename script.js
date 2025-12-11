const dmode = document.querySelector(".darkmode")

dmode.addEventListener('click' ,() => {
    console.log("clicked")
  document.body.classList.toggle('dark')
}
)