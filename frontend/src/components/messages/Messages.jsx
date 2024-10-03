import React from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import { MessageSkeleton } from "../skeleton/MessageSkeleton";

function Messages() {
  const { messages, loading } = useGetMessages();
  console.log("MESSAGES: ", messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
      {loading &&
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}

      {!loading && messages.length === 0 && (
        <p className=" text-center ">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
}

export default Messages;

// starter code for the file

// import React from "react";
// import Message from './Message'

// function Messages() {
//   return (
//     <div className="px-4 flex-1 overflow-auto">
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />

//     </div>
//   );
// }

// export default Messages;
