import React, {Component} from 'react';
import '../css/HeaderButton.css';
import {connect} from "react-redux";
import {setSelection} from "../redux/actions";

class HeaderButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("clicked", this.props.buttonId);
        this.props.setSelection({selectionId: "SelectedPage", value: this.props.buttonId})
    }

    render() {

        let bgColor = (this.props.selections["SelectedPage"] === this.props.buttonId) ?
            "#2b2b2b":
            "#3d3d3d";

        return (
            <div className={"header-button"} onClick={this.handleClick} style={{backgroundColor: bgColor}}>
                <p>
                    {this.props.text}
                </p>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return state;
};

const mapDispatchToProps = function(dispatch) {
    console.log(dispatch);
    return {
        setSelection: selection => dispatch(setSelection(selection))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderButton);