import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Authentication = () => {
    const [showSignIn] = useState(false)
    return (
        <div className='flex justify-center items-center py-20'>
          {showSignIn  && <SignIn /> }
          {!showSignIn  && <SignUp /> }
        </div>
    );

}
export default Authentication; 
