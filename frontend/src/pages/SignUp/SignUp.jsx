import "./signup.css";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import PWDRequisite from '../Login/PWDRequisite';
import api from "../../api/index";
import { useNavigate } from "react-router-dom";

function SignUp(props) {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwdRequisite, setPWDRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  })

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
 const [allowSubmit, setAllowSubmit] = useState(false);

   const handleOnChangePassword = (e) => {
     setPassword(e.target.value);
   };
   const handleOnChangeConfirmPassword = (e) => {
     setConfirmPassword(e.target.value); 
    //  confirmPasswordValidation();
   };

   const handleOnChangeEmail = (e) => {
     setEmail(e.target.value);
   };

   const handleOnKeyUpEmail = () => {
     emailValidation();
   };
  
   const handleOnKeyUpPassword = (e) => {
     passwordValidation(e);
   };
    
   const handleOnKeyUpConfirmPassword = (e) => {
     confirmPasswordValidation(e);
   };

  const handleOnBlurEmail = () => { 
    emailValidation()
  }

   const handleOnBlurPassword = (e) => {
     passwordValidation(e);
   };
  
   const handleOnBlurConfirmPassword = (e) => {
     confirmPasswordValidation(e);
    };

 

   const emailValidation = () => {
     const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
     if (!regEx.test(email) && email !== "") {
       setMessage("Email is Not Valid");
     } else {
       setMessage("");
     }
   };

   const confirmPasswordValidation = () => {
     if (password !== confirmPassword) {
       setConfirmPasswordMessage("Re-entered password doesn't match");
     } else {
       setConfirmPasswordMessage("");
     }
   };
  const passwordValidation = (e) => {
  const { value } = e.target
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
    console.log(checks, confirmPasswordMessage, message);
      if (
        checks.capsLetterCheck &&
        checks.numberCheck &&
        checks.pwdLengthCheck &&
        checks.specialCharCheck &&
        confirmPasswordMessage === "" &&
        message === ""
      ) {
        // console.log("check allow submit");
        setAllowSubmit(true);
      } else {
        setAllowSubmit(false);
      }
 
  }

const handleOnSubmit = (e) => {
  e.preventDefault(); 
  let user = {
    email: this.state.email,
    password: this.state.password,
  };
  navigate("../Home/Home.jsx", { replace: true });
}

  useEffect(() => {
    checkAllowSubmit();
    // console.log("use effect");
  }, [message, confirmPasswordMessage, checks]);


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
            Sign Up for new account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleOnSubmit}>
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
                onChange={handleOnChangeEmail}
                onKeyUp={handleOnKeyUpEmail}
                onBlur={handleOnBlurEmail}
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <p className="text-red-600">{message}</p>
            <br />
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="text"
                value={password}
                onChange={handleOnChangePassword}
                // onFocus={handleFocus}
                onBlur={handleOnBlurPassword}
                onKeyUp={handleOnKeyUpPassword}
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

          <div>
            <label htmlFor="password" className="sr-only">
              Re-entered Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="text"
              value={confirmPassword}
              onChange={handleOnChangeConfirmPassword}
              // onFocus={handleFocus}
              onBlur={handleOnBlurConfirmPassword}
              onKeyUp={handleOnKeyUpConfirmPassword}
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Re-enter your password"
            />
            <p className="text-red-600">{confirmPasswordMessage}</p>
          </div>

          <div>
            <button
              type="submit"
              className={`${
                allowSubmit
                  ? "bg-indigo-700"
                  : "bg-gray-300 pointer-events-none"
              } group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
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
              CREATE ACCOUNT
            </button>
            <br/>
            <p className="text-lg">
              Have an account?<Link to="/login"> Log-in</Link>
            </p>
            <p className="text-xs text-gray-110">
              By continuing, I confirm that I have read and accept the Terms and
              Conditions and the Privacy Policy.
            </p>
          </div>
        </form>
      </div>
    </div>
  );}

export default SignUp
