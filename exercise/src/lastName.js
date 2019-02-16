import React from 'react';
import PropTypes from 'prop-types';

class lastNmae extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                {this.props.last}
            </div>
        );
    }
}


lastNmae.propTypes = {
    
};

export default lastNmae
