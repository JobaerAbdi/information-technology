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
                <h1 className='font-semibold'>Answer: useState is React Hook. useState allows us to state variables in our functional components. useState Hook is a special function which takes the initial state as the arguments and returns it as an input array. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. useState returns an array with two values the current state and a function to update it.</h1>
            </div>
        </div>
    );
};

export default QuestionAnswer;