import React, { Component } from 'react';
import SearchForm from './SearchForm';
import {connect} from 'react-redux';
import MoviesContainer from './MoviesContainer';

//import 'semantic-ui-css/semantic.min.css';
export class Layout extends Component {
    render() {
        return (
            <div>
                <SearchForm/> 
                <MoviesContainer />
            </div>
        )
    }
}


export default Layout;
