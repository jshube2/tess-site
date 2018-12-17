import React, { Component } from 'react';
import {connect} from "react-redux";
import {setFlag, setSelection} from "../redux/actions";
import "../css/ArtCard.css"

const LEFT = 0;
const RIGHT = 1;

class ExpandedArtCard extends Component {
    constructor(props) {
        super(props);

        this.setArrowRef = this.setArrowRef.bind(this);
        this.setImgRef = this.setImgRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleArrowClick = this.handleArrowClick.bind(this);
    }

    handleClickOutside(event) {
        if (this.imgRef && this.leftRef && this.rightRef && !this.imgRef.contains(event.target) && !this.leftRef.contains(event.target) && !this.rightRef.contains(event.target)) {
            this.props.setFlag({flagId: "ArtSelected", flagState: false});
            this.props.setSelection({selectionId: "SelectedArt", value: ""})
        }
    }

    handleScroll(event) {
        event.preventDefault();
    }

    handleArrowClick(e, dir) {
        let idx = this.props.artList.indexOf(this.props.selections["SelectedArt"]);
        if(dir === LEFT && idx > 0) {
            this.props.setSelection({selectionId: "SelectedArt", value: this.props.artList[idx - 1]})
        } else if(dir === RIGHT && idx < this.props.artList.length - 1) {
            this.props.setSelection({selectionId: "SelectedArt", value: this.props.artList[idx + 1]})
        }

    }

    setImgRef(ref) {
        this.imgRef = ref;
    }

    setArrowRef(ref, dir) {
        if(dir === LEFT) {
            this.leftRef = ref
        } else if(dir === RIGHT) {
            this.rightRef = ref
        }
    }

    render() {

        let leftArrow = (
            <div className={"left-arrow"} onClick={(e) => this.handleArrowClick(e, LEFT)} ref={(ref) => this.setArrowRef(ref, LEFT)}>
                <img src={"./assets/icons/left_arrow.png"}/>
            </div>
        );

        let rightArrow = (
            <div className={"right-arrow"} onClick={(e) => this.handleArrowClick(e, RIGHT)} ref={(ref) => this.setArrowRef(ref, RIGHT)}>
                <img src={"./assets/icons/right_arrow.png"}/>
            </div>
        );

        return (
            <div className={"expanded-art-card"} onClick={this.handleClickOutside} onWheel={this.handleScroll}>
                {leftArrow}
                <img src={this.props.selections["SelectedArt"]} ref={this.setImgRef}/>
                {rightArrow}
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

export default connect(mapStateToProps, mapDispatchToProps)(ExpandedArtCard);
