import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { multiStepContext } from "../StepContext";

const FirstPage = () => {
  const { setCurrentStep, setUserData, userData } =
    useContext(multiStepContext);
  return (
    <div>
      <div>
        <TextField
          id="FirstName"
          label="First Name"
          variant="filled"
          margin="normal"
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
          value={userData?.firstname}
        />
      </div>
      <div>
        <TextField
          id="Last Name"
          label="Last Name"
          variant="filled"
          margin="normal"
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
          value={userData?.lastname}
        />
      </div>
      <div>
        <TextField
          id="Contact"
          label="Contact"
          variant="filled"
          margin="normal"
          onChange={(e) =>
            setUserData({ ...userData, contact: e.target.value })
          }
          value={userData?.contact}
        />
      </div>
      <div>
        <Button variant="contained" onClick={() => setCurrentStep(2)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default FirstPage;
