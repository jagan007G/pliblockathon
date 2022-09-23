
function InputWidget({type,placeholder,value,onChangeFunction,width="full"}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      
      onChange={onChangeFunction}
      className={`placeholder-customWhite placeholder-opacity-60 outline-none w-${width} px-4 py-1 shadow-sm rounded-sm focus:shadow-none duration-150 border border-secondary border-opacity-60 font-secondaryTypefaceDmSans text-customBlack bg-secondary text-customWhite`}
    />
  );
}

export default InputWidget