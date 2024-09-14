const formatDate = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toLocaleString("en-US", { month: "long", year: "numeric" });
};

function JobCardHeading({ experience }) {
  return (
    <div className="w-[21.25rem] shrink">
      <p className="text-primary text-base font-semibold">
        {experience.position}
      </p>
      <p className="text-tertiary text-sm">
        {experience.companyName} / {experience.employmentType}
      </p>
      <time className="text-tertiary text-sm">
        {formatDate(experience.startDate)} –{" "}
        {formatDate(experience.endDate) || "Present"}
      </time>
    </div>
  );
}

export default JobCardHeading;
