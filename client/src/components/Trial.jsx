import React from 'react'; 

const Trial = (props) => {
    return( 
        <div>
            <button onCLick={props.onClick}>Hello</button>
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default Trial;


