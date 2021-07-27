import { browser } from "webextension-polyfill-ts"
function changerating (){
  browser.storage.local.set(
    {
      "default-rating": (<HTMLInputElement>document.getElementById("default-rating")).value
    }
  )
}
