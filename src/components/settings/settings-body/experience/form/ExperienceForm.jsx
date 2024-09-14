import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import FormHeading from "./FormHeading";
import searchIcon from "../../search.svg";
import { useState } from "react";
import calendarIcon from "../../calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { useExperienceStore } from "../../../../../stores/store";

const ExperienceForm = ({ onClick }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { addExperience } = useExperienceStore();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    if (data.isCurrentCompany) {
      data.endDate = null;
    }
    // console.log(data);

    addExperience({ ...data, employmentType: data.employmentType.value });
    reset();
  };

  const isCurrentCompany = watch("isCurrentCompany", false);

  return (
    <div className="absolute left-1/2 top-1/2 z-50 w-[40rem] translate-x-[-50%] translate-y-[-50%] rounded-[10px] bg-white p-6">
      <FormHeading onClick={onClick} reset={reset} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Position */}
        <div>
          <label className="text-secondary mb-[6px] block text-sm font-medium">
            Position <span>*</span>
          </label>

          <div className="">
            <input
              {...register("position", {
                required: "Position name is required",
              })}
              className="border-primary content-border shadow-modern/5 placeholder-primary h-11 w-full rounded-md border px-[14px] py-[10px] text-base shadow-sm focus:outline-none"
              type="text"
              placeholder="What is your title?"
            />
          </div>
          {errors.position && (
            <p className="mt-1 text-sm text-red-500">
              {errors.position.message}
            </p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label className="text-secondary mb-[6px] block text-sm font-medium">
            Company Name <span>*</span>
          </label>

          <div className="relative">
            <img
              src={searchIcon}
              alt="search"
              className="absolute left-[14px] top-3 h-5 w-5"
            />
            <input
              className="border-primary content-border shadow-modern/5 placeholder-primary h-11 w-full rounded-md border py-[10px] pl-[42px] pr-[14px] text-base shadow-sm focus:outline-none"
              type="text"
              placeholder="Search for company"
              {...register("companyName", {
                required: "Company name is required",
              })}
            />
          </div>
          {errors.companyName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.companyName.message}
            </p>
          )}
        </div>

        {/* Start Date and End Date */}
        <div className="flex gap-4">
          <div className="max-w-[149px]">
            <label className="text-secondary mb-[6px] block text-sm font-medium">
              Start Date <span>*</span>
            </label>
            <div className="relative">
              <Controller
                control={control}
                name="startDate"
                rules={{ required: "Start date is required" }}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    selected={field.value}
                    placeholderText="Select date"
                    className="border-primary shadow-modern/5 placeholder-primary h-11 w-full rounded-md border py-3 pl-[42px] pr-4 text-base shadow-sm focus:outline-none"
                    onChange={(date) => field.onChange(date)} // Trigger the onChange from Controller
                  />
                )}
              />
              <div className="absolute left-4 top-3 h-5 w-5">
                <img src={calendarIcon} alt="" />
              </div>
            </div>
            {errors.startDate && (
              <p className="mt-1 text-sm text-red-500">
                {errors.startDate.message}
              </p>
            )}
          </div>
          <div className="max-w-[149px]">
            <label className="text-secondary mb-[6px] block text-sm font-medium">
              End Date <span>*</span>
            </label>
            <div className="relative">
              <Controller
                control={control} // This comes from useForm()
                name="endDate"
                rules={{
                  required: !isCurrentCompany ? "End date is required" : false,
                }}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    selected={!isCurrentCompany && field.value} // Controlled by React Hook Form
                    disabled={isCurrentCompany} // Disable if it's the current company
                    placeholderText="Select date"
                    className="border-primary shadow-modern/5 placeholder-primary h-11 w-full rounded-md border py-3 pl-[42px] pr-4 text-base shadow-sm focus:outline-none"
                    onChange={(date) => field.onChange(date)} // Handle date change
                  />
                )}
              />
              <div className="absolute left-4 top-3 h-5 w-5">
                <img src={calendarIcon} alt="" />
              </div>
            </div>
            {errors.endDate && !isCurrentCompany && (
              <p className="mt-1 text-sm text-red-500">
                {errors.endDate.message}
              </p>
            )}
            {/* <input
              type="date"
              className="w-full rounded border border-gray-300 p-2 focus:outline-none"
              disabled={isCurrentCompany}
              {...register("endDate")}
            /> */}
          </div>
          {/* Employment Type */}
          <div className="grow">
            <label className="text-secondary mb-[6px] block text-sm font-medium">
              Employment Type
              <span>*</span>
            </label>
            <div>
              <Controller
                name="employmentType"
                control={control}
                rules={{ required: "Employment type is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Select employment type"
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    classNames={{
                      control: () =>
                        `border-primary shadow-modern/5  h-11 w-full rounded-md border px-2 text-base shadow-sm focus:outline-none`,
                      placeholder: () => "placeholder-primary text-base",
                    }}
                    options={[
                      { value: "Full time", label: "Full time" },
                      { value: "Part time", label: "Part time" },
                      { value: "Contract", label: "Contract" },
                      { value: "Internship", label: "Internship" },
                    ]}
                  />
                )}
              />
              {/* <Select
                {...register("employmentType", {
                  required: "Employment type is required",
                })}
                placeholder="Select employment type"
                components={{
                  IndicatorSeparator: () => null,
                }}
                classNames={{
                  control: () =>
                    `border-primary shadow-modern/5  h-11 w-full rounded-md border px-2 text-base shadow-sm focus:outline-none`,
                  placeholder: () => "placeholder-primary text-base",
                }}
                options={[
                  { value: "full time", label: "Full time" },
                  { value: "part time", label: "Part time" },
                  { value: "contract", label: "Contract" },
                  { value: "internship", label: "Internship" },
                ]}
              /> */}
            </div>
            {errors.employmentType && (
              <p className="mt-1 text-sm text-red-500">
                {errors.employmentType.message}
              </p>
            )}
          </div>
        </div>

        {/* Current Work Company Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="currentCompany"
            className="checked:accent-brand-solid mr-2 h-4 w-4"
            {...register("isCurrentCompany")}
          />
          <label htmlFor="currentCompany" className="text-sm font-medium">
            This is my current work company
          </label>
        </div>

        {/* Key Responsibilities */}
        <div>
          <label className="text-secondary mb-[6px] block text-sm font-medium">
            Key responsibilities
            <span>*</span>
          </label>

          <textarea
            {...register("responsibilities", {
              required: "Key responsibilities are required",
            })}
            className="shadow-modern/5 min-h-[118px] w-full resize-none rounded-md border border-gray-300 p-2 shadow-sm focus:outline-none"
            placeholder="e.g., I joined Stripe's Customer Success team..."
          />
          {errors.responsibilities && (
            <p className="mt-1 text-sm text-red-500">
              {errors.responsibilities.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-3">
          <button
            type="button"
            className="border-secondary shadow-modern/5 w-72 grow rounded border bg-white px-4 py-2 text-black shadow-sm"
            onClick={(e) => {
              reset();
              onClick(e);
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-primary border-primary-btn shadow-modern/5 w-72 grow rounded border px-4 py-2 text-white shadow-sm"
          >
            Add Experience
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExperienceForm;
