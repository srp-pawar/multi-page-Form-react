import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { multiStepContext } from "../StepContext";

const ThirdPage = () => {
  const { setCurrentStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
  return (
    <div>
      <div>
        <TextField
          id="House no"
          label="House no"
          variant="filled"
          margin="normal"
          value={userData?.houseno}
          onChange={(e) =>
            setUserData({ ...userData, houseno: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          id="Landmark"
          label="Landmark"
          variant="filled"
          margin="normal"
          value={userData?.landmark}
          onChange={(e) =>
            setUserData({ ...userData, landmark: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          id="City"
          label="City"
          variant="filled"
          margin="normal"
          value={userData?.city}
          onChange={(e) => setUserData({ ...userData, city: e.target.value })}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color={"secondary"}
          onClick={() => setCurrentStep(2)}
        >
          Previous
        </Button>
        <Button variant="contained" onClick={submitData}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ThirdPage;
