import React, {Component} from 'react';
import HeaderButton from "./HeaderButton";
import {scenes} from "../redux/initial_state";
import '../css/HeaderBar.css';
import IconLink from "./IconLink";


class HeaderBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"header-bar"}>

                <div className={"header-bar-button-container"}>

                    <HeaderButton text={"My Art"} buttonId={scenes.GALLERY}/>
                    <HeaderButton text={"About Me"} buttonId={scenes.BLOG}/>
                    <HeaderButton text={"Commissions"} buttonId={scenes.COMMISSIONS}/>
                    <HeaderButton text={"FAQ"} buttonId={scenes.FAQ}/>

                </div>

                <div className={"icon-link-container"}>

                    <IconLink
                        linkAddr = {"https://www.instagram.com/mothlette/"}
                        imgSrc = {"./assets/icons/instagram_logo.png"}
                    />

                    <IconLink
                        linkAddr = {"https://www.deviantart.com/mothlette"}
                        imgSrc = {"./assets/icons/deviant_logo.png"}
                    />

                    <IconLink
                        linkAddr = {"https://www.etsy.com/"}
                        imgSrc = {"./assets/icons/etsy_logo.png"}
                    />

                </div>

            </div>
        );
    }
}

export default HeaderBar;