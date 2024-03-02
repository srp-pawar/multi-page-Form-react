import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { multiStepContext } from "../StepContext";

const SecondPage = () => {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <div>
      <div>
        <TextField
          id="Email"
          label="Email"
          variant="filled"
          margin="normal"
          value={userData?.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>
      <div>
        <TextField
          id="Gender"
          label="Gender"
          variant="filled"
          margin="normal"
          value={userData?.gender}
          onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
        />
      </div>
      <div>
        <TextField
          id="Alternate Contact"
          label="Alternate Contact"
          variant="filled"
          margin="normal"
          value={userData?.alternatecontact}
          onChange={(e) =>
            setUserData({ ...userData, alternatecontact: e.target.value })
          }
        />
      </div>
      <div>
        <Button
          variant="contained"
          color={"secondary"}
          onClick={() => setCurrentStep(1)}
        >
          Previous
        </Button>
        <Button variant="contained" onClick={() => setCurrentStep(3)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default SecondPage;
