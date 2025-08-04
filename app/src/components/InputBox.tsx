const InputBox = (props: { labelText: string; type: string }) => {
  return (
    <>
      <label htmlFor={props.labelText}>{props.labelText}</label>
      <input
        type={props.type}
        className="ml-1 border-solid border-2 border-slate-500 rounded-md w-44"
        name={props.labelText}
      ></input>
    </>
  );
};
export default InputBox;
