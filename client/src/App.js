import React from "react";
import JSXVariables from "./components/JSXVariables";

// function App() {
//   return <JSXVariables />;
// }

class App extends React.Component {
  state = {
    name: 'miwako',
    thoughtsAboutReact: 'I like rice'
  }

  render() {
    return <JSXVariables
      name={this.state.name}
      thoughts = {this.state.thoughtsAboutReact}/>
  }
}

export default App;
