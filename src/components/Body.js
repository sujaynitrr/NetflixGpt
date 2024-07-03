import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
// import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
// import { addUser, removeUser } from "../utils/userSlice";
// import { auth } from "../utils/firebase";



const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { email, uid, displayName } = user;
  //       dispatch(
  //         addUser({
  //           email: email,
  //           uid: uid,
  //           displayName: displayName,
  //         })
  //       );
  //       //navigate("/browse")
  //     } else {
  //       dispatch(removeUser());
  //       //navigate("/")
  //     }
  //   },[]);
  // });
 

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
