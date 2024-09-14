import xIcon from "../../IconX_Form.svg";
import flagIcon from "../../IconFlagForm.svg";

function FormHeading({ onClick, reset }) {
  return (
    <div className="mb-5">
      <div className="relative mb-4">
        <div className="border-modern shadow-modern/5 flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm">
          <img className="h-6 w-6" src={flagIcon} alt="" />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            reset();
            onClick(e);
          }}
          className="absolute right-[-8px] top-[-8px] flex h-11 w-11 items-center justify-center"
        >
          <img className="h-6 w-6 p-[6px]" src={xIcon} alt="" />
        </button>
      </div>
      <div>
        <h2 className="text-primary mb-1 text-lg font-semibold">
          Add Experience
        </h2>
        <p className="text-tertiary text-sm">
          Share where you’ve worked on your profile.
        </p>
      </div>
    </div>
  );
}

export default FormHeading;
