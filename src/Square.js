import React from 'react';
import './Square.css';
import classNames from 'classnames'

class Square extends React.Component {
    render() {
        let cssClasses = classNames({
            'Square': true, 
            'Square-Highlight' : !!this.props.highlight 
        });
        return(
            <div 
                className={cssClasses} 
                onClick={() => this.props.clickHandler(this.props.id)}>
                {this.props.label}
            </div>
        );
    }
}

export default Square;