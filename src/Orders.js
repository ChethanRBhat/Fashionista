import React, { useState, useEffect } from 'react';
import './Orders.css'
import { db } from "./firebase";
import { useStateValue }from "./StateProvider";
import Order from './Order'

function Orders() {

    const [{basket ,user },dispatch] =useStateValue();
    const [orders ,setOrders] = useState([]);

    useEffect(() => {
        if(user) {
        db
         .collection('users')
         .doc(user?.uid)
         .collection('orders')
         .orderBy('created','desc')
         .onSnapshot(snapshot => (
             setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            date: doc.data()
         })))
         ))
    } else {
        setOrders([])
    }

},[user])
  return (
    <div className='orders'>
        <h1>CONGRATULATIONS, YOU WILL BE GETTING AN EXCLUSIVE OFFER</h1>
        <h2>YOUR PRODUCT WILL BE DELIVERED SOON </h2>
        <h3>PES UNIVERSITY </h3>
        <h3>RR nagar campus,near nice road </h3>
        <h3>Banashankari,BANGLORE,570061</h3>
        <h4>THANK YOU FOR CHOOSING FASHIONISTA.........</h4>



        <div className='orders__order'>
            {orders?.map(order => (
                <Order order={order} />
            ))}
        </div>


    </div>
  )
}

export default Orders