import React from 'react';
import ReactDOM from 'react-dom';

const RenderReact = () =>
<div class="demo">
    Hello React !
    <input />
    <p>{new Date().toString()}</p>
    <p>{[...fibo(10)]}</p>        
</div>

const jsContainer = document.getElementById("jsTimer")
const render = () => {
jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
    <input />
    <p>${new Date()}</p>
  </div> 
`;
ReactDOM.render(
    <RenderReact />,
    document.getElementById("timer")
);
}



setInterval(render, 1000);

let fibo = function* (numbers) {
let pre = 0, cur = 1;
while(numbers-- > 0) {
  [pre, cur] = [cur, pre + cur];
  yield cur;
}
}