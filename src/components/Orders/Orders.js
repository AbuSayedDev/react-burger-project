import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fatchOrders } from '../../redux/actionCreators.js';



const mapStateToProps = state =>{
    return{
        orders: state.orders,
        orderLoading: state.orderLoading,
        orderErr: state.orderErr,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fatchOrders: () => dispatch(fatchOrders()),
    }
}

class Orders extends Component {
    componentDidMount(){
        this.props.fatchOrders();
    }

    componentDidUpdate(){
        console.log(this.props);
    }

    render(){
        return(
            <div>
                <h1>Orders</h1>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);