import { useExperienceStore } from "../../../../stores/store";
import editIcon from "../Iconedit.svg";
import trashIcon from "../Trash.svg";

function JobCardBtns({ id }) {
  const { deleteExperience } = useExperienceStore((state) => state);

  const deleteHandler = async (e) => {
    e.preventDefault();
    await deleteExperience(id);
  };

  return (
    <div className="flex h-14 min-w-[100px] justify-between p-2">
      <button className="p-[10px]" onClick={deleteHandler}>
        <img className="h-5 w-5" src={trashIcon} alt="" />
      </button>
      <button className="p-[10px]">
        <img className="h-5 w-5" src={editIcon} alt="" />
      </button>
    </div>
  );
}

export default JobCardBtns;
