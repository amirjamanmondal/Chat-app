import React from "react";
import Conversation from "./Conversation";
import getRandomEmoji from "../../utils/emojis";
import useGetConversations from "../../hooks/useGetConversations";

function Conversations() {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto ">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIndex={index === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className=" loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
}

export default Conversations;

// starter code for the file
// import React from 'react'
// import Conversation from './Conversation';

// function Conversations() {
//   return (
//     <div>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//     </div>
//   )
// }

// export default Conversations
