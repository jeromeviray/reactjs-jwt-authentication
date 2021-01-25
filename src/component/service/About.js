
import React, { useState } from 'react'

export default function About(props) {
    // const initialValue = 0;

    // const [count, setCount] = useState(initialValue);
    // const Incrementtal = () =>{
    //     for(let i = 0; i < 5; i++){
    //         setCount(prevCount => prevCount + 1);
    //     }
    // }
    const person = {
        firsName: '',
        lastName: ''
    }
    const [name, setName] = useState(person);

    const PersonDetialsChange = (event) => {
        event.preventDefault();
        const elementName = event.target.name;
        setName({
            ...name, [elementName]: event.target.value
        })
    }
    return (
        <div>
            {/* Count : {count}
            <button onClick = {() => setCount(initialValue)}>Reset</button>
            <button onClick = {() => setCount(count + 1)}>Increment</button>
            <button onClick = {() => setCount(count - 1)}>Decrement</button>
            <button onClick ={Incrementtal}>Decrement</button> */}
            <form>
                <input type="text" name="firstName" value={name.firstName} onChange={PersonDetialsChange}></input>
                <input type="text" name="lastName" value={name.lastName} onChange={PersonDetialsChange}></input>
                <h2>Your First Name is {name.firstName}</h2>
                <h2>Your Last Name is {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>

        </div>
    )
}
