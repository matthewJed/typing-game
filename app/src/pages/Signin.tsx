import InputBox from "../components/InputBox";
import FormContainer from "../components/FromContainer";
const Signin = () => {
  const flexCenterClasses = "flex flex-col items-center justify-center";
  return (
    <FormContainer
      height="48"
      linkText="Don't have an account?"
      linkTo="/signup"
    >
      <ul className={`gap-3 pb-3 + ${flexCenterClasses}`}>
        <li className={`${flexCenterClasses} + gap-1`}>
          <InputBox type="text" labelText="username" />
        </li>
        <li className={`${flexCenterClasses} + gap-1`}>
          <InputBox type="password" labelText="password" />
        </li>
      </ul>
      <button className="text-white px-2 py-0.5 bg-slate-400 rounded-xl hover:bg-slate-500  ">
        Sign in
      </button>
    </FormContainer>
  );
};
export default Signin;
