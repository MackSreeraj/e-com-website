import React, { useState, useReducer } from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import CloseIcon from "@mui/icons-material/Close";

const reducer = (state, action) => {
  if (state.checkedIds.includes(action.id)) {
    return {
      ...state,
      checkedIds: state.checkedIds.filter((id) => id !== action.id),
    };
  }

  if (state.checkedIds.length >= 2) {
    console.log("Max 2 extras allowed.");
    return state;
  }

  return {
    ...state,
    checkedIds: [...state.checkedIds, action.id],
  };
};

const CheckBoxGroup = ({ data, handleButtonVisibility }) => {
  const initialState = { checkedIds: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [message, setMessage] = useState("Please select any 3 numbers");

  //__________________________________________________API_ENV__________________________________________//

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  //__________________________________________________________________________________________________//

  const handleCheckboxClick = (id) => {
    let updatedCheckedIds;

    if (state.checkedIds.includes(id)) {
      updatedCheckedIds = state.checkedIds.filter(
        (checkedId) => checkedId !== id
      );
    } else {
      updatedCheckedIds = [...state.checkedIds, id];
    }

    setSelectedNumbers(updatedCheckedIds); // Update selected numbers regardless of count

    if (updatedCheckedIds.length >= 2) {
      validateNumberCombination(updatedCheckedIds); // Validate the selected numbers
      handleButtonVisibility(false);
    } else {
      setMessage("Please select any 2 numbers");

      handleButtonVisibility(false); // Hide the button
    }

    dispatch({ id });
  };

  //______________________________________________SLOT_VALIDATION_____________________________________________________//

  const validateNumberCombination = async (selectedNumbers) => {
    const combinedNumbers = selectedNumbers.join("");

    const requestBody = {
      numbers: combinedNumbers,
    };
    try {
      // Make a POST request to the backend route that handles validation
      const response = await fetch(`${apiUrl}/admin/slot/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        // Parse the JSON response
        const data = await response.json();

        // Check if the combination exists
        if (data.exists) {
          setMessage("Oops! This combination already exists");
          handleButtonVisibility(false); // Hide the button
        } else {
          setMessage("Valid combination. Proceed!");
          handleButtonVisibility(true); // Show the button only if exactly 3 numbers are selected
        }
      } else {
        throw new Error("Error validating number combination");
      }
    } catch (error) {
      // If an error occurs during the request, log the error
      console.error("Error validating number combination:", error);
      // Show your error message to the user
    }
  };


  const handleProceedClick = () => {
    // Handle proceed action here
    console.log("Proceed clicked");
    sendSelectedNumbersToBackend(selectedNumbers);
  };

  //_____________________________________________________________________________________________________________//

  return (
    <div className="slot-box  bg-theme-gray rounded-lg">
      <div className="slot-group">
        {data.map(({ id, label }) => (
          <div className="slot" key={id}>
            <input
              onClick={() => handleCheckboxClick(id)}
              checked={state.checkedIds.includes(id)}
              type="checkbox"
              id={id}
              readOnly
            />
            <label htmlFor={id}>{label}</label>
          </div>
        ))}
      </div>
      <div className="actions">
        <input type="checkbox" name="" id="close" readOnly />
        <label className="action" htmlFor="close">
          <CloseIcon />
        </label>

        <input type="checkbox" name="" id="shuffle" readOnly />
        <label className="action" htmlFor="shuffle">
          <ShuffleIcon />
        </label>
      </div>
      <div className="message">{message}</div>
    </div>
  );
};

export default CheckBoxGroup;
