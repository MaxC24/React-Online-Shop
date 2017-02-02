import React from 'react';

const Title = ({ title }) => {
    return (
        <div id="title">{ title.toUpperCase() }</div>
    )
}

export default Title;