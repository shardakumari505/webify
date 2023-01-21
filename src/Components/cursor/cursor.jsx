import React from "react";
import './cursor.scss';

const Cursor = () => {

    const hand = document.querySelector('.hand');

document.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  hand.style.left = (x - 10) + "px";
  hand.style.top = (y - 10) + "px";
  hand.style.opacity = "1";
});
    return(
        <div class="hand">
  <div class="first"></div>
  <div class="main"></div>
</div>
    );
}

export default Cursor;