import React, { Component } from 'react';
import {connect} from "react-redux";
import ArtCard from "../ArtCard"
import ExpandedArtCard from "../ExpandedArtCard";
import '../../css/pages/Gallery.css';
import Octopus from "../Octopus";


class Gallery extends Component {
    constructor(props) {
        super(props);
    }

    static getArtList() {

        let list = [];
        let req = require.context("../../../public/assets/pics/", false, /.*\.png$/);

        req.keys().forEach(function(key){
            list.push("./assets/pics/"+key.split("/")[1])
        });

        return list;

    }

    static sortArtList(list) {

        return list.sort(function(itemA, itemB) {

            if (itemA.toLowerCase() < itemB.toLowerCase()) {
                return -1;
            } else if (itemA.toLowerCase() > itemB.toLowerCase()) {
                return 1;
            } else {
                return 0;
            }

        })

    }

    static generateArtCards(list) {

        return list.map(function (src, idx) {
            return <ArtCard src={src} key={idx}/>
        })

    }

    render() {

        let list = Gallery.getArtList();
        list = Gallery.sortArtList(list);
        let artCards = Gallery.generateArtCards(list);

        let expandedArtCard = (this.props.flags["ArtSelected"].flagState === true) ? <ExpandedArtCard artList={list}/> : null;

        return (
            <div id={"gallery-page"} onClick={this.handleClick}>

                {expandedArtCard}

                <div className={"art-card-container"}>
                    {artCards}
                </div>

            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return state;
};

export default connect(mapStateToProps)(Gallery);
