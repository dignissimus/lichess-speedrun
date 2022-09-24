import { getUsername } from "./lichess";
import { perfs } from "./interfaces";
import { getRating } from "./actions";

const username = getUsername();

if (window.location.pathname.split("/")[2] === username) {
  Array.from(document.querySelectorAll("div.side.sub-ratings a")).map(
    (element) => {
      const anchor = <HTMLAnchorElement>element;
      const perfKey = anchor.href.split("/")[4];
      if (perfKey === undefined) return;
      const virtualRating = getRating(perfKey);
      anchor.innerText = virtualRating !== undefined ? virtualRating : "?";
      if (virtualRating === undefined) {
        anchor.className = "empty";
      }
    }
  );
}
