import "./login.css";
import {useState, useEffect} from 'react';
import PWDRequisite from './PWDRequisite'

function Login(props) {
  const [password, setPassword] = useState("");
  const [pwdRequisite, setPWDRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  })

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [ allowSubmit, setAllowSubmit ] = useState(false)

  const handleOnChange = (e) => {
    setPassword(e.target.value);
  }
  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
  }
  const handleEmailOnKeyUp = (e) => {
    
      emailValidation();
    
  }


  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!regEx.test(email) && email !== "") {
      setMessage("Email is Not Valid");
    } else {
      setMessage("");
    }
  };

  const handleOnBlur = () => {
    setPWDRequisite(false)
    setMessage("")
  }

  const handleOnKeyUp = (e) => {
    const {value} = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*]/.test(value)
     setChecks({
       capsLetterCheck: capsLetterCheck,
       numberCheck: numberCheck,
       pwdLengthCheck: pwdLengthCheck,
       specialCharCheck: specialCharCheck,
     });
      setPWDRequisite(true);
  }


  const checkAllowSubmit = () => {
      if (
        checks.capsLetterCheck &&
        checks.numberCheck &&
        checks.pwdLengthCheck &&
        checks.specialCharCheck &&
        message === ""
      ) {
        setAllowSubmit(true);
      } else {
        setAllowSubmit(false);
      }
 
  }


  useEffect(() => {
    checkAllowSubmit();
  }, [message, checks]);


  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              start your 14-day free trial{" "}
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                autoFocus
                id="email-address"
                name="email"
                value={email}
                onChange={handleEmailOnChange}
                onKeyUp={handleEmailOnKeyUp}
                onBlur={handleOnBlur}
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <p className="text-red-600">{message}</p>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="text"
                value={password}
                onChange={handleOnChange}
                // onFocus={handleFocus}
                onBlur={handleOnBlur}
                onKeyUp={handleOnKeyUp}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            {pwdRequisite ? (
              <PWDRequisite
                capsLetterFlag={checks.capsLetterCheck ? true : false}
                numberFlag={checks.numberCheck ? true : false}
                pwdLengthFlag={checks.pwdLengthCheck ? true : false}
                specialCharFlag={checks.specialCharCheck ? true : false}
              />
            ) : null}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                {" "}
                Remember me{" "}
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {" "}
                Forgot your password?{" "}
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              /*hover:bg-indigo-700 */
              className={`${
                allowSubmit
                  ? "bg-indigo-700"
                  : "bg-gray-300 pointer-events-none"
              } group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* Heroicon name: solid/lock-closed */}
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );}

export default Login
