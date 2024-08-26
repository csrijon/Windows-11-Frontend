const taskbar = document.querySelector(".taskbar")
const startmenu = document.querySelector(".startmenu")
taskbar.addEventListener("click",() => {
  if (startmenu.style.bottom == "60px" ) {
    startmenu.style.bottom = "-800px"
  }else{
    startmenu.style.bottom = "60px"
  }
}
)