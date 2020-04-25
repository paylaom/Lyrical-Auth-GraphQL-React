import React from 'react';
import Header from './Header';

// export default ({ children }) => {
//  return <div className = "container">{ children }</div>
// }

const App = (props) => {
    return (
        <div className="container">
            <Header />
            {props.children}
        </div>
    );
}
export default App;