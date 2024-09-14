import AddExperinceButton from "./AddExperinceButton";
import Heading from "./Heading";
import plusIcon from "../Plus.svg";
import SectionLabel from "./SectionLabel";
import Experiences from "./Experiences";
import { useState } from "react";
import ExperienceForm from "./form/ExperienceForm";

function Experience() {
  const [showExperienceForm, setShowExperienceForm] = useState(false);

  function toggleExperienceForm(e) {
    e.preventDefault();
    setShowExperienceForm(!showExperienceForm);
  }

  return (
    <>
      {showExperienceForm && (
        <>
          <ExperienceForm onClick={toggleExperienceForm} />
          <div className="bg-overlay/50 absolute left-0 top-0 z-40 h-screen w-screen backdrop-blur-lg"></div>
        </>
      )}
      <div className="border-secondary mb-6 flex justify-between border-b pb-5">
        <Heading />
        <AddExperinceButton onClick={toggleExperienceForm}>
          <span className="flex h-5 w-5 items-center justify-center">
            <img src={plusIcon} alt="" />
          </span>{" "}
          Add experience
        </AddExperinceButton>
      </div>
      <div className="flex items-start gap-8">
        <SectionLabel />
        <Experiences />
      </div>
    </>
  );
}

export default Experience;
