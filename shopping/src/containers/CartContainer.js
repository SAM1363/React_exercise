import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-reduct';
import {getTotal, getCartProducts} from '../reducers';
import {checkout} from '../actions';
import Cart from '../componets/Cart';

const CartContainer = ({ products, total, checkout }) => (
    <Cart
      products={products}
      total={total}
      onCheckoutClicked={() => checkout(products)} />
  )


CartContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        Price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.string,
    checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    total: getTotal(state)
})

export default connect(
    mapStateToProps,
    { checkout }
)(CartContainer)
