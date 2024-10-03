import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

function Sidebar() {
  return (
    <div className=' border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput/>
        <div className=' divider px-2'></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar;


// starter code for the file
// import React from 'react';
// import SearchInput from './SearchInput';
// import Conversations from './Conversations';
// import LogoutButton from './LogoutButton';

// function Sidebar() {
//   return (
//     <div className=' border-r border-slate-500 p-4 flex flex-col'>
//         <SearchInput/>
//         <div className=' divider px-2'></div>
//         <Conversations/>
//         <LogoutButton/>
//     </div>
//   )
// }

// export default Sidebar;
