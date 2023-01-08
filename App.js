const heading = React.createElement("h1",{},"Heading");
const heading1= React.createElement("h2",{},"Heading1");
const container=React.createElement("div",{id:"container"},[heading,heading1]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(container);