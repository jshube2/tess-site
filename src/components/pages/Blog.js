import React, { Component } from 'react';
import {pinned_post, blog_posts} from "../../text_content/blog_posts";
import '../../css/pages/Blog.css';
import Octopus from "../Octopus";

class Blog extends Component {
    constructor(props) {
        super(props);

        this.sortPosts = this.sortPosts.bind(this);
    }

    componentDidMount() {
        console.log("mounted blog")
    }

    sortPosts() {
        let cposts = blog_posts.slice();
        console.log(cposts)
        return cposts.sort(function(postA, postB) {
            if (postA.props.sortdate < postB.props.sortdate) {
                return -1;
            } else if ((postA.props.sortdate > postB.props.sortdate)) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    render() {

        let posts = this.sortPosts();

        return (
            <div id={"blog-page"}>
                <div className={"blog-card-container"}>
                    {pinned_post}
                    {posts}
                </div>
            </div>
        );
    }
}


export default Blog;
