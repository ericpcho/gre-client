import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'
import './home.css'

export class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                GRE Vocabulary Prep
                <h1>
                    Insert Vocab Word Here
                </h1>
                <button>Button1</button>
                <button>Button2</button>
                <button>Button3</button>
                <button>Button4</button>
            </div> 
        )
    }
}

export default (Home)

