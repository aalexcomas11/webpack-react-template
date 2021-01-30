import React from 'react';
import Button from 'components/Button';

export default ()=>{
    return (
        <div>
            <p>hello there bro!</p>
            <Button onClick={()=>{
                alert('You will not perish');
            }}>
                Click me or perish!
            </Button>
        </div>
    )
}