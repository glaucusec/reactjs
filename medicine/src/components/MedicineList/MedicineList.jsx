import React, { useContext } from "react";
import "./MedicineList.css";
import { MedicineContext } from "../../store/MedicineProvider";
import { CartContext } from "../../store/CartProvider";

export default function MedicineList() {
  console.log('I am medicineList');
  const medicineContext = useContext(MedicineContext);
  const cartContext = useContext(CartContext);

  return (
    <div className="medicine_form_list">
      <table className="table is-fullwidth medicine_table">
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Medicine Description</th>
            <th>Medicine Price</th>
            <th>Medicine Quantity</th>
          </tr>
        </thead>
        <tbody>
          {medicineContext.meds.map((med, index) => {
            return (
              <tr key={med.medicine_id}>
                <td>{med.medicine_name}</td>
                <td>{med.medicine_desc}</td>
                <td>{med.medicine_price}</td>
                <td>{med.medicine_qty}</td>
                <td>
                  <button
                    disabled={med.medicine_qty <= 0}
                    onClick={() => cartContext.addCartItem(med.medicine_id)}
                    className="button "
                  >
                    {med.medicine_qty <= 0 ? "Out Of Stock" : "Add to Cart"}
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
