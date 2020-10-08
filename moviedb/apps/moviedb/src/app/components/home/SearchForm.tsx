import React, { Component } from 'react';
import {searchMovie, fetchMovies} from '../../../../../../libs/actions/searchActions';
import {connect} from 'react-redux';

interface SearchFromProps
{   
    text?:string;
    searchMovie: (text:string) => void;
    fetchMovies:(text:string)=> void;
}

export class SearchForm extends Component <SearchFromProps>{
    onChange = e => {
        this.props.searchMovie(e.target.value);
        //console.log(e.target.value);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
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

const mapStateToProps = (state) => ({
    text: state.movies.text
});


export default connect(mapStateToProps, {searchMovie,fetchMovies})(SearchForm);
