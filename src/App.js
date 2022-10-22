import React from 'react';

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
      Start here.
      {/* <GlobalStyle /> */}
    </div>
  );
}

export default App;
