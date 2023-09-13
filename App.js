// const heading = React.createElement("h1", {}, "Hello world from react");
//       const root = ReactDOM.createRoot(document.getElementById("root"));
//       root.render(heading);
const parent= React.createElement("div",{id: "parent"},React.createElement("div",{id: "child"},[React.createElement("h1", {}, "Hello world from react"),React.createElement("h2", {}, "Hello world from react2")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);