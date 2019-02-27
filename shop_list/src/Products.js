import React from 'react';

import PropTypes from 'prop-types';

class Products extends React.Component {

    render() {

        // let products = ['milk', 'cheese', 'bread', 'eggs', 'chicken'];

        let productList = this.props.product.map((product)=>{
            return <li key={product}>{product}</li>
        })

        return (
            <div>
                <h1>{this.props.title}</h1>
                
                <ul>
                    {productList}
                </ul>

            </div>
            
            
        );
    }
}

Products.propTypes = {
    title : PropTypes.string
}

Products.defaultProps = {
    title: "Hello World"
};

export default Products
