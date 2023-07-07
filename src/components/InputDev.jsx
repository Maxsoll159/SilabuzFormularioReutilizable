export const InputDev = ({labelText, ...props}) => {
  return (
    <div className="flex flex-col py-10">
      <label htmlFor="">{labelText}</label>
      <input
        type="text"
        className={`${props.value === "" && "border-red-500"} border-b-2 px-3 bg-transparent focus:border-blue-500 text-red-500`}
        {...props}
      />
      {
        props.value === "" && (<p className="text-red-500">El valor {labelText} es obligatorio</p>)
      }
    </div>
  );
};
