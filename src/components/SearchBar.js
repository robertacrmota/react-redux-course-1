import React from 'react';

class SearchBar extends React.Component {
    state = {input: ''};

    onInputChange = (evt) => {
        this.setState({input: evt.target.value});
    };

    onFormSubmit = (evt) => {
        evt.preventDefault();

        // pass data to parent
        this.props.onSearchSubmit(this.state.input);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video search: </label>
                        <input type="text" placeholder="enter search" value={this.state.input} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;