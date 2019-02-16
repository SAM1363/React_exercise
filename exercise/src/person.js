import React from 'react';
import PropTypes from 'prop-types';
// import Lastname from './lastNmae';

class person extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.Name}
            </div>
        );
    }
}


person.propTypes = {
    
};

export default person
