import React from "react";

function GenderCheck({ onCheckboxChange, selectedGender }) {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
          <span className="label-text">Male</span>
          <input
            type="radio"
            name="gender"
            className="radio border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
          <span className="label-text">Female</span>
          <input
            type="radio"
            name="gender"
            className="radio border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheck;














// import React from "react";

// function GenderCheck({onCheckboxChange, selectedGender}) {
//   return (
//     <div className="flex">
//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer ${selectedGender === "male"? "selected": ""}`}>
//           <span className=" label-text">Male</span>
//           <input type="checkbox" className=" checkbox border-slate-900" 
//           checked={ selectedGender==="male"}
//           onChange={()=> onCheckboxChange("male")}/>
//         </label>
//       </div>
//       <div className=" form-control">
//         <label className={`label gap-2 cursor-pointer ${selectedGender === "female"? "selected": ""}`}>
//           <span className=" label-text">Female</span>
//           <input type="checkbox" className=" checkbox border-slate-900" 
//           checked={ selectedGender==="female"}
//           onChange={()=> onCheckboxChange("female")}/>
//         </label>
//       </div>
//     </div>
//   );
// }

// export default GenderCheck;



// // starter code for this file
// // import React from "react";

// // function GenderCheck() {
// //   return (
// //     <div className="flex">
// //       <div className="form-control">
// //         <label className={`label gap-2 cursor-pointer`}>
// //           <span className=" label-text">Male</span>
// //           <input type="checkbox" className=" checkbox border-slate-900" />
// //         </label>
// //       </div>
// //       <div className=" form-control">
// //         <label className={`label gap-2 cursor-pointer`}>
// //           <span className=" label-text">Female</span>
// //           <input type="checkbox" className=" checkbox border-slate-900" />
// //         </label>
// //       </div>
// //     </div>
// //   );
// // }

// // export default GenderCheck;
