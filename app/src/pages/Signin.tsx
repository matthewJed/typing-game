const Signin = () => {
  const inputClasses = "ml-1 border-solid border-2 border-slate-500 rounded-md";
  const flexCenterClasses = "flex flex-col items-center justify-center";
  return (
    <div className={flexCenterClasses}>
      <div
        className={`bg-slate-200 w-96 h-48 rounded-md drop-shadow-md + ${flexCenterClasses}`}
      >
        <h3 className="text-2xl pb-8">Sign in</h3>
        <ul className={`gap-3 + ${flexCenterClasses}`}>
          <li>
            <label htmlFor="username">username</label>
            <input name="username" type="text" className={inputClasses} />
          </li>
          <li>
            <label htmlFor="password">password</label>
            <input name="password" type="password" className={inputClasses} />
          </li>
        </ul>
        <button>Sign in</button>
      </div>
    </div>
  );
};
export default Signin;
