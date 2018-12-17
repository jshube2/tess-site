import React, { Component } from 'react';
import '../css/Octopus.css';

class Octopus extends Component {

    render() {
        return (
            <div id={"octo-container"}>

                <img src={"./assets/icons/left_octo.png"}/>
                <img src={"./assets/icons/right_octo.png"}/>

            </div>
        );
    }
}


export default Octopus;