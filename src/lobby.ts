function hidePools(){
  [...document.getElementsByClassName("lpools")].map(element => (<HTMLElement>element).style.visibility = "hidden")
}
function load(){
  hidePools()
}

document.body.onload = load // window.addEventListener("load", load, true)
