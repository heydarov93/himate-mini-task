function AddExperinceButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-primary flex h-10 items-center gap-1 rounded-md px-[14px] py-[10] text-sm font-semibold tracking-wide text-white"
    >
      {children}
    </button>
  );
}

export default AddExperinceButton;
