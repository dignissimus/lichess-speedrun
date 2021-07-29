function pools(): HTMLElement[] {
  return [...document.getElementsByClassName("lpools")] as HTMLElement[]
}

function hidePools(){
  console.log("Making an attempt at hiding")
  pools().map(element => (<HTMLElement>element).style.visibility = "hidden")
}


function load(){
  while (!pools); // Probably not a good idea
  hidePools()
  pools().map(pool => new MutationObserver(hidePools).observe(pool, {
    childList: false,
    subtree: false
  }))
}

load()

document.body.addEventListener("load", load)


//document.body.addEventListener("load", load, true)
// window.hidePools = hidePools
