import React, { Component } from 'react';
//import {searchMovie, fetchMovies} from '../../actions/searchActions';
import {searchMovie, fetchMovies} from '../../../actions/searchActions';
import {connect} from 'react-redux';

export class SearchForm extends Component {
    onChange = e => {
        this.props.searchMovie(e.target.value);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text)
        //console.log(this.props.text)
    }
    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Search" name="seachText" onChange={this.onChange}/>
            <button type = 'submit'> Search </button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
});

export default connect(mapStateToProps, {searchMovie,fetchMovies})(SearchForm);
