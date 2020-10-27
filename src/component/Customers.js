import React from "react";
import { useFirestore } from "react-redux-firebase";
import Loader from 'react-loader-spinner'

import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
function Customers() {
  const customers = useSelector((state) => state.firestore.ordered.customers);
  const firestore = useFirestore();

  useFirestoreConnect([
    {
      collection: "customers",
      orderBy:["createdAt","desc"]
    },
  ]);
  const deleteCustomer = async (id) => {
    try {
      await firestore.collection("customers").doc(id).delete();
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };
  if (!customers) {
    return <div className="loading" style={{height:"500px"}}><Loader
        type="Rings"
         color="#8c55aa"
         height={300}
         width={300}
         timeout={3000} //3 secs
         />
         </div>
  }
  return (
    <div className="customerTable m-3">
      <h3 className="m-3"> Cuntumer</h3>
      <table className="table table-bordered ronded table-hover ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col" colSpan="2">
              Email
            </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr key={customer.id}>
                <th scope="row">{customer.name}</th>
                <td colSpan="2" className="email">
                  {customer.email}
                </td>
                <td>
                  <button className="btn btn-primary mr-3">Edit</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteCustomer(customer.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
