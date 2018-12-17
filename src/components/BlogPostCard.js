import React, {Component} from 'react';
import '../css/BlogPostCard.css';

class BlogPostCard extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        let image = (this.props.src !== null && this.props.src !== undefined) ?
                    <img src={this.props.src} width={this.props.width}/> :
                    null;


        let text = this.props.children;
        let paragraphs = text.map(function(pg, idx){
            if(pg === "\n") {
                return <br/>
            } else {
                return <p> {pg} </p>
            }
        });

        let headerWidth = `calc(100% - ${this.props.width})`;
        return (
            <div className={"blog-card"}>
                <div className={"blog-card-image"}>
                    {image}
                </div>
                <div className={"blog-card-header"} style={{width: headerWidth}}>
                    <p>
                        {this.props.date} {this.props.header}
                    </p>
                </div>
                <div className={"blog-card-body"}>
                    {paragraphs}
                </div>
            </div>
        );
    }
}

export default BlogPostCard;