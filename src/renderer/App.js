import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import icon from '../../assets/icon.svg';
import './App.css';
import Main from './Main';
import SideBar from './SideBar';

function MyApp() {
  const [currentPage, setCurrentPage] = useState('general');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex">
      <div className="w-[250px] bg-gray-200">
        <SideBar
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>

      <div className="flex-grow bg-gray-100">
        <div className="m-4">
          <Main currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Hello />} /> */}
        <Route path="/" element={<MyApp />} />
      </Routes>
    </Router>
  );
}

// function Hello() {
//   // Handle button click in your React component
//   const handleButtonClick = () => {
//     const url = 'https://example.com'; // Example URL
//     window.electron.ipcRenderer.sendMessage('startScraping', [url]);
//   };

//   return (
//     <div>
//       <div className="Hello">
//         <img width="200" alt="icon" src={icon} />
//       </div>
//       <h1>electron-react-boilerplate</h1>
//       <div className="Hello">
//         <button type="button" onClick={handleButtonClick}>
//           Start scraping
//         </button>
//       </div>
//     </div>
//   );
// }

// function SideBar(props) {
//   return (
//     <div className="flex h-screen flex-col justify-between border-e bg-white">
//       <div className="px-4 py-6">
//         <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
//           Logo
//         </span>

//         <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
//           {/* GENERAL button */}
//           <a
//             href="#"
//             onClick={props.handlePageChange('general')}
//             className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 opacity-75"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//               />
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//               />
//             </svg>

//             <span className="text-sm font-medium"> General </span>
//           </a>

//           {/* SETTINGS */}
//           <a
//             href="#"
//             onClick={props.handlePageChange('settings')}
//             className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 opacity-75"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
//               />
//             </svg>

//             <span className="text-sm font-medium"> Settings </span>
//           </a>

//           <details className="group [&_summary::-webkit-details-marker]:hidden">
//             <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
//               <div
//                 className="flex items-center gap-2"
//                 onClick={props.handlePageChange('account')}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 opacity-75"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                   />
//                 </svg>

//                 <span className="text-sm font-medium"> Account </span>
//               </div>

//               <span className="shrink-0 transition duration-300 group-open:-rotate-180">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </span>
//             </summary>

//             <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
//               <a
//                 href="#"
//                 className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 onClick={props.handlePageChange('details')}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 opacity-75"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
//                   />
//                 </svg>

//                 <span className="text-sm font-medium"> Details </span>
//               </a>

//               <div onClick={props.handlePageChange('security')}>
//                 <a
//                   href="#"
//                   className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 opacity-75"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                     />
//                   </svg>

//                   <span className="text-sm font-medium"> Security </span>
//                 </a>
//               </div>

//               <form action="/logout">
//                 <button
//                   type="submit"
//                   className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 opacity-75"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                     />
//                   </svg>

//                   <span className="text-sm font-medium"> Logout </span>
//                 </button>
//               </form>
//             </nav>
//           </details>
//         </nav>
//       </div>

//       {/* Bottom account section */}
//       <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
//         <a
//           href="#"
//           className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
//         >
//           <img
//             alt="Man"
//             src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//             className="h-10 w-10 rounded-full object-cover"
//           />

//           <div>
//             <p className="text-xs">
//               <strong className="block font-medium">tmb5cg</strong>

//               <span> yoyo@gmail.com </span>
//             </p>
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// }
