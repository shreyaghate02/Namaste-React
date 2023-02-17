import React from 'react';
import ReactDOM from 'react-dom/client';

//react element
const title = (
<h1 id="title" key="h2">
  Namaste React
</h1>
);

//functional component 
const TitleComponent = () => (
  <h1 id="title" key="h2">
    Namaste React Title
  </h1>
  );


//Nested header element using React.createElement
const heading1 = React.createElement("h1", {id: "h1", key: "h1"}, "heading1");
const heading2 = React.createElement("h2", {id: "h2", key: "h2"}, "heading2");
const heading3 = React.createElement("h3", {id: "h3", key: "h3"}, "heading3");
const divclass = React.createElement("div", {id: "div", key: "div", className: "title"}, [
  heading1, heading2, heading3
]);

//same with JSX
const jsxdiv = (
  <div className="title">
    <h1 id="h1" key="h1">heading1</h1>
    <h2 id="h2" key="h2">heading2</h2>
    <h3 id="h3" key="h3">heading3</h3>
  </div>
);

//same with functional component
const headerComponent = () => (
  <div className="title">
    <h1 id="h1" key="h1">heading1</h1>
    <h2 id="h2" key="h2">heading2</h2>
    <h3 id="h3" key="h3">heading3</h3>
  </div>
);

//Component composition
const HeaderComponent = () => {
  return (
    <div>
      {title}
      {headerComponent()}
      <TitleComponent />
      <h1>Namaste React functional component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  )
};

const Logo = () => {
  return (
    <a href='/'>
      <img src="" className="logoimg" alt="logoimg"></img>
    </a>
  )
};

const SearchBar = () => {
  return (
    <input className="searchinput" type="text" placeholder="Search Here"></input>
  )
};

const UserIcon = () => {
  return (
    <a href='/'>
      <img src="" className="usericonimg" alt="usericonimg"></img>
    </a>
  )
}

const NewHeaderComponent = () => {
  return (
    <div id="header" className="header">
      <Logo />
      <SearchBar />
      <UserIcon />

      <HeaderComponent />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<NewHeaderComponent />);
