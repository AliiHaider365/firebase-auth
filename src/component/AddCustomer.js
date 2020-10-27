import { useFirestore } from "react-redux-firebase";
import React,{useState} from "react";

function AddCustomer() {
  const firestore = useFirestore();
  const [name, setname] = useState("")
  const [email, setemail] = useState("")

  const  onSubmitd =(e)=>{
    e.preventDefault();
    if(name && email){
    firestore.collection("customers").add({  email:email ,name:name,createdAt: firestore.FieldValue.serverTimestamp()});
    setname("");
    setemail("")
    }else{
      alert("please fill in all the mandatory fields")
    }
  }
  return (
    <div className="">
      <form className="  needs-validation   " noValidate onSubmit={onSubmitd}>
        <h3 className="m-4">Add Cuntumer</h3>
        <div className="form-row addCustomer justify-content-start border border-primary pl-3 m-3 align-items-center rounded ">
          <div className="col-md-4 mb-3">
            <input
              type="text"
              className="form-control"
              id="validationTooltip03"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={(evt)=>{setname(evt.target.value)}}
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="text"
              className="form-control"
              id="validationTooltip04"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(evt)=>{setemail(evt.target.value)}}
              required
            />
          </div>
          <div className="col-md-3 mb-3">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddCustomer;
