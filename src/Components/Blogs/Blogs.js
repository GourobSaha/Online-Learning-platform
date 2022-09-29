import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='blog'>
                <h2>How does React Work?</h2>
                <p>React is a declarative paradigm that facilitates reasoning about your application and strives to be both efficient and versatile. It creates basic views for each state of your application, and when your data changes, React will efficiently update and render the appropriate component. React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.</p>
            </div>
            <div className='blog'>
                <h2>Difference between props and state</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component. Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div className='blog'>
                <h2>What does useEffect do?</h2>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don't need a special API to read it — it's already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.</p>
            </div>
        </div>
    );
};

export default Blogs;