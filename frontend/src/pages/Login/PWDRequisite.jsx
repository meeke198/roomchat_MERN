import React from 'react'

function PWDRequisite({capsLetterFlag, numberFlag, pwdLengthFlag, specialCharFlag}) {
  return (
    <div>
      <p className={!capsLetterFlag ? "text-red-600" : "hidden"}>
        Password must contain a capital letter
      </p>
      <p className={!numberFlag ? "text-red-600" : "hidden"}>
        Password must contain a number
      </p>
      <p className={!pwdLengthFlag ? "text-red-600" : "hidden"}>
        Password must contain at least 8 characters
      </p>
      <p className={!specialCharFlag ? "text-red-600" : "hidden"}>
        Password must contain a special character
      </p>
    </div>
  );
}

export default PWDRequisite
