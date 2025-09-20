function Dot({ handleClick }: { handleClick: () => void }) {
  return (
    <span
      onClick={handleClick}
      className="bg-blue-500 w-2.5 aspect-square rounded-full cursor-pointer"
    ></span>
  );
}

export default Dot;
