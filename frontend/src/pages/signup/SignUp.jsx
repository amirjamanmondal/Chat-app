import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheck from "./GenderCheck.jsx";
import useSignup from "../../hooks/useSignup.js";

function SignUp() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckbox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    // console.log(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span className="text-blue-500">Signup </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Adam Smith"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="adamsmith"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmpassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmpassword: e.target.value })
              }
            />
          </div>

          {/* Gender check box goes here */}
          <GenderCheck
            onCheckboxChange={handleCheckbox}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an Account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className=" loading loading-spinner"></span>
              ) : (
                "Signup"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

/// starter code for this file

// import React from "react";
// import GenderCheck from "./GenderCheck";

// function Signup() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           <span className="text-blue-500">Signup </span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Adam Smith"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="adamsmith"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Confirm Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           {/* Gender check box goes here */}
//           <GenderCheck />

//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             Already have an Account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">Signup</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;
