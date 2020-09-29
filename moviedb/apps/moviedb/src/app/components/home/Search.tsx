/*import React, { Component } from 'react';
import {searchMovie} from '../../actions/searchActions';
import {connect} from 'react-redux';

export class Search extends Component {
    onChange = e => {
        this.props.searchMovie(e.target.value);
    }
    render() {
        return (
            <div>
            <form>
            <input type="text" placeholder="Search" name="seachText" onChange={this.onChange}/>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
});

export default connect(mapStateToProps, {searchMovie})(Search);
*/