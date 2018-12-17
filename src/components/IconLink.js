import React, {Component} from 'react';
import '../css/IconLink.css';

class IconLink extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={"icon-link"}>

                <a href={this.props.linkAddr}>

                    <img src={this.props.imgSrc}/>

                </a>

            </div>
        );
    }
}


export default IconLink;