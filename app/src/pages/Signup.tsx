import InputBox from "../components/InputBox";
import FormContainer from "../components/FromContainer";
const Register = () => {
  const flexCenterClasses = "flex flex-col items-center justify-center";
  return (
    <FormContainer
      height="72"
      linkText="Already have an account?"
      linkTo="/signin"
    >
      <ul className={`${flexCenterClasses} + gap-2`}>
        <li className={`${flexCenterClasses} + gap-1`}>
          <InputBox type="text" labelText="name" />
        </li>
        <li className={`${flexCenterClasses} + gap-1`}>
          <InputBox type="text" labelText="username" />
        </li>
        <li className={`${flexCenterClasses} + gap-1`}>
          <InputBox type="password" labelText="password" />
        </li>
      </ul>
      <button className="text-white mt-2 px-2 py-0.5 bg-slate-400 rounded-xl hover:bg-slate-500 ">
        Sign up
      </button>
    </FormContainer>
  );
};
export default Register;
