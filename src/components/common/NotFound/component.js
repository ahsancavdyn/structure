import React, {Component} from 'react';
import "./style.css";
import TabIcon from "@material-ui/icons/Tab";

class NotFound extends Component {
    render() {
        const {
            title,
        } = this.props;
        return (
            <>
                <div className="notfoundwrapper">
                    <TabIcon />
                    <h3>{title}</h3>
                </div>
            </>
        )
    }
}

export default NotFound;