import React, { useState, useMemo, useCallback } from "react";

function generateRandomId(length = 8) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }

  return id;
}

export const MedicineContext = React.createContext({});

export default function MedicineProvider(props) {
  console.log("I am medicineProvider");
  const [medicines, updateMedicines] = useState([
    {
      medicine_id: "a7Fxf390",
      medicine_name: "Dolo",
      medicine_desc: "Reduces Fever",
      medicine_price: 12,
      medicine_qty: 8,
    },
    {
      medicine_id: "b67VbYTs",
      medicine_name: "Paracetamol",
      medicine_desc: "Fever",
      medicine_price: 8,
      medicine_qty: 3,
    },
  ]);

  function addMedicineHandler(medicine_details) {
    // if any detail is empty, do not add.
    const { medicine_name, medicine_desc, medicine_price, medicine_qty } =
      medicine_details;
    if (
      medicine_name == "" ||
      medicine_desc == "" ||
      medicine_price == "" ||
      medicine_qty === ""
    ) {
      return;
    }

    updateMedicines((prevState) => [
      ...prevState,
      { medicine_id: generateRandomId(), ...medicine_details },
    ]);
  }

  const reduceQuantityHandler = useCallback(
    (medicine_id) => {
      const index = medicines.findIndex(
        (item) => item.medicine_id === medicine_id
      );
      const updatedMedicines = [...medicines];
      updatedMedicines[index].medicine_qty -= 1;
      updateMedicines(updatedMedicines);
    },
    [medicines]
  );

  const increaseQuantityHandler = useCallback(
    (medicine_id) => {
      const index = medicines.findIndex(
        (med) => med.medicine_id == medicine_id
      );
      const updatedMedicines = [...medicines];
      updatedMedicines[index].medicine_qty += 1;
    },
    [medicines]
  );

  const MedicineCtx = useMemo(
    () => ({
      meds: medicines,
      addMedicine: addMedicineHandler,
      reduceQuantity: reduceQuantityHandler,
      increaseQuantity: increaseQuantityHandler,
    }),
    [medicines, reduceQuantityHandler, increaseQuantityHandler]
  );

  return (
    <MedicineContext.Provider value={MedicineCtx}>
      {props.children}
    </MedicineContext.Provider>
  );
}
