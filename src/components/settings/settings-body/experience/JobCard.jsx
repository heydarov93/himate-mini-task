import JobCardBtns from "./JobCardBtns";
import JobCardHeading from "./JobCardHeading";

function JobCard({ experience }) {
  return (
    <div className="border-secondary flex w-full items-center gap-6 rounded-[10px] border p-6">
      <JobCardHeading experience={experience} />
      <JobCardBtns id={experience.id} />
    </div>
  );
}

export default JobCard;
