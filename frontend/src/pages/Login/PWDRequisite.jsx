import React from 'react'

function PWDRequisite({capsLetterFlag, numberFlag, pwdLengthFlag, specialCharFlag}) {
  return (
    <div>
      <p className={capsLetterFlag}>Password must contain a capital letter</p>
      <p className={numberFlag}>Password must contain a number</p>
      <p className={pwdLengthFlag}>
        Password must contain at least 8 characters
      </p>
      <p className={specialCharFlag}>
        Password must contain a special character
      </p>
    </div>
  );
}

export default PWDRequisite
