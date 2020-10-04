import React, { Component } from 'react';
//import {searchMovie, fetchMovies} from '../../actions/searchActions';
import {searchMovie, fetchMovies} from '../../../../../../libs/actions/searchActions';
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
            <div className="search__container">
            <form onSubmit={this.onSubmit} className="search__form">
            <input  className="searchbox" type="text" placeholder="Search" name="seachText" onChange={this.onChange}/>
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
