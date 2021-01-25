import React, {Component} from 'react';
import "./Buttons.css";

class Buttons extends Component {
    render(){
        return(
            <div className="Buttons">
                {/* We are using composition instead of inheritance.
                    read more: https://reactjs.org/docs/composition-vs-inheritance.html */}
                {this.props.children}
            </div>
        );
    }
}

export default Buttons;