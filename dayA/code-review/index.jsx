// importing state from react library
import React, { useState } from 'react';

//function that creates and stores a counter and returns the component
function Counter() {
    //creates a variable and a function for updating and saving the state of variable
    const [count, setCount] = useState(0);

    //function that increments count by one and sets the state variable
    function increment() {
        setCount(count + 1);
    }

    //returns JSX 'page' with counter and a button which increments count on click
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

//exports the counter component to be used elsewhere
export default Counter;