import React, { createContext, useState } from "react";
import App from "./App";

export const multiStepContext = createContext();

const StepContext = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState();
  const [finalData, setFinalData] = useState([]);

  function submitData() {
    setFinalData([...finalData, userData]);
    setUserData();
    setCurrentStep(1);
  }
  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </div>
  );
};

export default StepContext;
