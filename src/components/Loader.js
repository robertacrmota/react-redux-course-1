import React from 'react';

const Loader = (props) => {
    const defaultProps = {
        text: "Loading..."
    };

    return (
        <div className="ui segment">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">{defaultProps.text}</div>
            </div>
        </div>
    );
};

export default Loader;