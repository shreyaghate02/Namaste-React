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

//Component composition
const HeaderComponent = () => {
  return (
    <div>
      {title}
      {/* {TitleComponent()} */}
      <TitleComponent />
      <h1>Namaste React functional component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  )
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
