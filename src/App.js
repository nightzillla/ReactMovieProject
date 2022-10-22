import React from 'react';
// Components
import Header from './components/Header';

// Styles
import { GlobalStyle } from './GlobalStyle';

// This is react without using JSX line 3 to 6
// const Star = () => React.createElement('div', null, 'This is a little star');
// const App = () => {
//   return Star();
// }
function App() {
  return (
    <div className = "App">
      <Header/>
      Start here.
      <GlobalStyle />
    </div>
  );
}

export default App;
