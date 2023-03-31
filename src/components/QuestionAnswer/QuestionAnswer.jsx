import React from 'react';

const QuestionAnswer = () => {
    return (
        <div className='lg:px-12'>
            <div className='bg-red-300 mb-4 lg:p-6'>
              <h1 className='font-bold text-1xl mt-4'>(01) What is different between Props and State?</h1>
                <h1 className='font-semibold'>Answer: (i) Props :- Props is a special keyword in react which stands for properties and is being used for passing data from one component to another. Props are immutable that means it cannot be changed. In functional component props can be accessed using props parameter. Props are read only. Props are controlled by whoever renders the components and they are used to communicate between components. (ii) State :- State is managed within the component. State can be changed that means it is mutable. State can be accessed using the use state hooks in functional components. State is controlled by react components and it changes can be asynchronous. State can used to display changes with the component</h1>
            </div>

            <div className='bg-red-300 mb-4 lg:p-8'>           
                <h1 className='font-bold text-1xl mt-4'>(02) How does useState work?</h1>
                <h1 className='font-semibold'>Answer: useState is react hook. useState allows us to state variables in our functional components. useState Hook is a special function which takes the initial state as the arguments and returns it as an input array. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. useState returns an array with two values the current state and a function to update it.</h1>
            </div>

            <div className='bg-red-300 mb-4 lg:p-8'>           
                <h1 className='font-bold text-1xl mt-4'>(03) What is purpose of useEffect other than fetching data?</h1>
                <h1 className='font-semibold'>Answer: useEffect is a react hook. It works making a request to an API for data from a backend server. On the other hand useEffect perform side effects in components. It Using unpredictable timing functions like setTimeout, setInterval, clearInterval etc. useEffect interact with browser APIs.    </h1>
            </div>

            <div className='bg-red-300 mb-4 lg:p-8'>           
                <h1 className='font-bold text-1xl mt-4'>(04) How does react work?</h1>
                <h1 className='font-semibold'>Answer: React is a declarative, efficient and flexible front-end JavaScript library for building user interfaces based on components. React uses the key to match the virtual DOM node with the actual DOM node. It uses a diff algorithm to find the changed element. The diff algorithm figure out which element has changed. React updates the actual DOM by making changes to the DOM nodes and only updates the changed DOM nodes. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering code.</h1>
            </div>
        </div>
    );
};

export default QuestionAnswer;