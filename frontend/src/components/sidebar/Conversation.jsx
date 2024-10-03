import React, { useEffect } from "react";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIndex, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center  rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-green-400" : " "
        }`}
        onClick={()=> setSelectedConversation(conversation) }
      >
        <div className=" avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilepic} alt="user avatar" />
          </div>
        </div>

        <div className=" flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className=" font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      <div className=" divider my0 py-0 h-1"></div>
      {!lastIndex && <div className=" divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;

// starter code for the file
// import React from "react";

// function Conversation() {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//         <div className=" avatar online">
//           <div className="w-12 rounded-full">
//             <img
//               src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//               alt="user avatar"
//             />
//           </div>
//         </div>

//         <div className=" flex flex-col flex-1">
//             <div className="flex gap-3 justify-between">
//                 <p className=" font-bold text-gray-200">Adam Smith</p>
//                 <span className="text-xl">😊</span>
//             </div>
//         </div>
//       </div>
//       <div className=" divider my0 py-0 h-1"></div>
//     </>
//   );
// }

// export default Conversation;
