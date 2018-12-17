import React, { Component } from 'react';
import '../../css/pages/FAQ.css';
import FAQCard from "../FAQCard";
import Octopus from "../Octopus";

class FAQ extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id={"faq-page"}>
                <div className={"faq-card-container"}>
                    <FAQCard
                        question={"A question"}
                        answer={"An answer"}
                    />
                    <FAQCard
                        question={"A question"}
                        answer={"An answer"}
                    />
                    <FAQCard
                        question={"A question"}
                        answer={"An answer"}
                    />
                    <FAQCard
                        question={"A question"}
                        answer={"An answer"}
                    />
                    <FAQCard
                        question={"A question"}
                        answer={"An answer"}
                    />
                </div>
            </div>
        );
    }
}


export default FAQ;
