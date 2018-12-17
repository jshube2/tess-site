import React, {Component} from 'react';
import '../css/FAQCard.css';

class FAQCard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={"faq-card"}>
                <div className={"faq-card-question"}>
                    <p>
                        Q: {this.props.question}
                    </p>
                </div>
                <div className={"faq-card-answer"}>
                    <p>
                        A: {this.props.answer}
                    </p>
                </div>
            </div>
        );
    }
}

export default FAQCard;