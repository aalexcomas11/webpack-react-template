import React from 'react';
import Button from 'components/Button';

import "tailwindcss/tailwind.css"
import './styles.css'

export default ()=>{
    return (
        <div>
            <p>hello im a cat!</p>
            <Button onClick={()=>{
                alert('You will not perish');
            }}>
                Click me or perish!
            </Button>
            <div className="background-class"></div>
        </div>
    )
}