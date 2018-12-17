import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {scenes} from "../redux/initial_state";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Commissions from "./pages/Commissions";
import HeaderBar from "./HeaderBar";
import '../css/App.css';
import Octopus from "./Octopus";


class App extends Component {
    render() {
        console.log(this.props.selections["SelectedPage"]);
        let page;
        switch(this.props.selections["SelectedPage"]) {
            case scenes.GALLERY: {
                page = <Gallery key={1} />;
                break;
            }
            case scenes.COMMISSIONS: {
                page = <Commissions key={2}/>;
                break;
            }
            case scenes.FAQ: {
                page = <FAQ key={3}/>;
                break;
            }
            case scenes.BLOG: {
                page = <Blog key={4}/>;
                break;
            }
            default: {
                page = null;
                break;
            }
        }

        return (
            <div className={"App"}>
                <HeaderBar/>
                <Octopus/>
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={100}>
                    {page}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return state;
};

export default connect(mapStateToProps)(App);

