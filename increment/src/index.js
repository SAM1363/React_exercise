import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';



class Counter extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }

    
    render() {
        return (
           <div>
               <span>{this.props.currentCountInStore}</span>
               <button onClick={this.props.onIncreaseClick}>Increase</button>
           </div> 
        );
    }
}


//Action

const increaseAction = {
    type: 'increase'
}

//Reducer 


function counter(state = {count: 0}, action){

    const count = state.count

    switch(action.type){
        case 'increase':
            return {count: count + 1}
        default:
            return state

    }

}

function mapDispatchToProps(dispatch){
    
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

function mapStateToProps(state){
    return {
        currentCountInStore: state.count 
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

const store = createStore(counter)



ReactDOM.render(

<Provider store={store}>
    <App />
</Provider>
, 

document.getElementById('root'));