import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        const { placeholder, onChangeHandler, className } = this.props;

        return (
            <input
                className={className}
                type='search'
                placeholder={placeholder}
                onChange={onChangeHandler}/>
        );
    }
}

export default SearchBox