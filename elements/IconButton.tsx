const IconButton = ({ icon, onClick = () => {} }) => {
  return (
    <div
      className="flex justify-center items-center w-[36px] h-[36px]
    hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer"
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

export default IconButton;
