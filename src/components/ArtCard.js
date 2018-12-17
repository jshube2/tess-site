import React, {Component} from 'react';
import {connect} from "react-redux";
import {setFlag, setSelection} from "../redux/actions";
import '../css/ArtCard.css';

class ArtCard extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("clicked");
        this.props.setFlag({flagId: "ArtSelected", flagState: true});
        this.props.setSelection({selectionId: "SelectedArt", value: this.props.src})
    }

    render() {
        return (
            <div className={"art-card"} onClick={this.handleClick}>
                <img src={this.props.src} />
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
        setFlag: flag => dispatch(setFlag(flag)),
        setSelection: selection => dispatch(setSelection(selection))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtCard);