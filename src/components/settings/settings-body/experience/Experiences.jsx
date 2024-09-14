import JobCard from "./JobCard";
import { useExperienceStore } from "../../../../stores/store";
import { useEffect } from "react";

function Experiences() {
  const { experiences, isLoading, error, fetchExperiences } =
    useExperienceStore((state) => state);

  useEffect(() => {
    fetchExperiences();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex w-[32rem] shrink flex-col gap-4">
      {experiences.map((experience) => (
        <JobCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
}

export default Experiences;
