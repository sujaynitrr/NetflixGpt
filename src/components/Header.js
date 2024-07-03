import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logo } from "../utils/constant";
const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  
  const signOutHandler = () => {
    //navigate("/")
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error, "error");
      // An error happened.
    });

  }

   useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName } = user;
        dispatch(
          addUser({
            email: email,
            uid: uid,
            displayName: displayName,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return ()=> unsubscribe;

  },[]);



  return (
    <div>
      <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <div>
          <img
            className="w-44"
            src={logo}
            alt="logo"
          />
        </div>
        {
          user &&
          <div className="flex">
            <div>
              <img className="w-12 h-12 "
                src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                alt="logo"
              />
              <div>
                   <button onClick={signOutHandler} className="font-bold text-white">(Sign out)</button>
              </div>
             
            </div>
            <div>
            </div>
          </div>
        }

      </div>

    </div>
  );
};
export default Header;
