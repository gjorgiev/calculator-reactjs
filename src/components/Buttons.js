import React, {Component} from 'react';
import "./Buttons.css";

class Buttons extends Component {
    render(){
        return(
            <div className="Buttons">
                {this.props.children}
            </div>
        );
    }
}

export default Buttons;