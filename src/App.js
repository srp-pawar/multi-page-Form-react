import logo from "./logo.svg";
import "./App.css";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useContext } from "react";
import { multiStepContext } from "./StepContext";
import Display from "./Display";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

function App() {
  const { currentStep } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 2:
        return <SecondPage />;
      case 3:
        return <ThirdPage />;
      default:
        return <FirstPage />;
    }
  }
  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>Multi- Step React Form</h2>
      <Stepper activeStep={currentStep - 1} alternativeLabel>
        <Step key="1">
          <StepLabel>{steps[0]}</StepLabel>
        </Step>
        <Step key="2">
          <StepLabel>{steps[1]}</StepLabel>
        </Step>
        <Step key="3">
          <StepLabel>{steps[2]}</StepLabel>
        </Step>
      </Stepper>
      {showStep(currentStep)}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Display />
    </div>
  );
}

export default App;
