import { useRef, useState } from "react";
import Header from "./Header";
import { validation } from "../utils/vaildation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const [error, setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignHandler = () => {
    setIsSignInFrom(!isSignInFrom);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    const message = validation(email.current.value, password.current.value);
    setError(message);
    
    if (message) {
      return;
    }
    if (!isSignInFrom) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            if(user) {
              const { email, uid, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  email: email,
                  uid: uid,
                  displayName: displayName,
                })
              );
            }
          }).then(() => {
            navigate("/browse");
          }).catch((error) => {
            setError(error);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage);
          // ..
        });
    } else {
      //Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          if(user){
            navigate("/browse");
          }

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg"
          alt="logo"
        />
      </div>
      <div className="absolute bg-black w-4/12 p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <form>
          <h1 className="font-bold">{isSignInFrom ? "Sign In" : "Sign up"}</h1>
          {!isSignInFrom && (
            <input
              type="text"
              placeholder="Enter Name"
              className="p-1 my-2 w-full bg-gray-700 rounded-sm"
              ref={name}
            />
          )}
          <input
            type="text"
            placeholder="Enter Email"
            ref={email}
            className="p-1 my-2 w-full bg-gray-700 rounded-sm"
          />
          <input
            type="password"
            ref={password}
            placeholder="Enter Password"
            className="p-1 my-2 w-full bg-gray-700 rounded-sm"
          />
          <div>
            <button
              type="button" // Ensure the button type is "button"
              onClick={onClickHandler}
              className="p-1 my-2 bg-red-700 w-full rounded-sm"
            >
              {isSignInFrom ? "Sign In" : "Sign up"}
            </button>
          </div>
          <p className="py-4 w-full cursor-pointer" onClick={toggleSignHandler}>
            {isSignInFrom
              ? " New to Netflix? Sign up now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
        <p className="red-text">{error}</p>
      </div>
    </div>
  );
};

export default Login;
