import ReactDOM from 'react-dom'; //зарендерить

// const el1 = React.createElement("span", { children: "Hello" });
const el1 = <span>Hello</span>;
// const el2 = React.createElement("span", { children: "world" });
const el2 = <span>World!</span>;

const jsxEl = (
  <div>
    {el1}
    {el2}
  </div>
);
console.log(jsxEl);
ReactDOM.render(jsxEl, document.querySelector('#root')); //что зарендерить , куда зарендерить
