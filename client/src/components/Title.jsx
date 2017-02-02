import React, { PropTypes } from 'react';

const Title = ({ title }) => {
    return (
        <div id="title">{ title.toUpperCase() }</div>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title;