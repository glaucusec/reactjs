import React, { useContext, memo } from "react";
import "bulma/css/bulma.min.css";
import "./MedicineForm.css";
import { MedicineContext } from "../../store/MedicineProvider";

const MedicineForm  = () => {
  console.log('I am medicineForm');
  const medicineCtx = useContext(MedicineContext);

  function medicineSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const medicineData = Object.fromEntries(formData.entries());

    medicineCtx.addMedicine(medicineData);
    // change this to controlled components way.
    e.target.reset();
  }
  return (
    <div className="medicine_form_container">
      <form onSubmit={medicineSubmitHandler} className="form">
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Medicine Name</label>
              <div className="control">
                <input
                  className="input"
                  name="medicine_name"
                  type="text"
                  placeholder="Enter Medicine Name"
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Medicine Description</label>
              <div className="control">
                <input
                  className="input"
                  name="medicine_desc"
                  type="text"
                  placeholder="Enter Medicine Description"
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Medicine Price</label>
              <div className="control">
                <input
                  className="input"
                  name="medicine_price"
                  type="number"
                  placeholder="Enter Medicine Price"
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Medicine Quantity</label>
              <div className="control">
                <input
                  className="input"
                  name="medicine_qty"
                  type="number"
                  placeholder="Enter Medicine Quantity"
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Add Product</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(MedicineForm);