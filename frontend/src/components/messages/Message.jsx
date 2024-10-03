import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilepic = fromMe
    ? authUser.profilepic
    : selectedConversation?.profilepic;
  const bubleBgColor = fromMe ? "bg-blue-400" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className=" chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilepic} alt={fromMe ? "me" : "to"} />
        </div>
      </div>
      <div className={`chat-bubble text-green-600 ${bubleBgColor}`}>
        {message.message}
      </div>
      <div className=" chat-footer opacity-50 text-xs flex gap-1 items-center">
        01:25
      </div>
    </div>
  );
}

export default Message;

// strater code for the file
// import React from "react";

// function Message() {
//   return (
//     <div className=" chat chat-end">
//       <div className=" chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//         </div>
//       </div>
//       <div className=" chat-bubble text-white bg-blue-500">Hi! what is upp?</div>
//       <div className=" chat-footer opacity-50 text-xs flex gap-1 items-center">01:25</div>
//     </div>
//   );
// }

// export default Message;
