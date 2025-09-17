/*
import React, {useState, useEffect} from "react";


type UserProps = {
    name: string;
    age: number;
};

const GreetingCard: React.FC<UserProps> = ({ name, age }) => {
    const [message, setMessage] = useState<string>('');
    if (age < 18) {
        setMessage(`Hey ${name}, you're quite young!`);
    } else {
        // Otherwise, set a default message
        setMessage(`Hello ${name}, welcome back.`);
    }
}, [name, age]); // Dependency array: rerun effect when 'name' or 'age' changes


// This is the JSX part: the UI that gets rendered
return (
    <div className="p-4 bg-blue-100 rounded shadow-md">
        {/!* Heading *!/}
        <h1 className="text-xl font-bold mb-2">Greeting</h1>
        {/!* Render the message from state *!/}
        <p>{message}</p>
    </div>
);
};*/
