import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import { useSelector } from 'react-redux';


const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)
  return (
    // Without Bind Action Creators

    // <div>
    //   <h3>Deposit/Withdraw Money</h3>
    //   <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
    //   Update Balance
    //   <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
    // </div>

    // With Bind Action Creators
    <div>
      <h3>Deposit/Withdraw Money</h3>
      <button className="btn btn-primary mx-2" onClick={() => { withdrawMoney(100) }}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={() => { depositMoney(100) }}>+</button>

      <h2 className='text-center'>Your Balance: {balance}</h2>

    </div>
  )
}

export default Shop