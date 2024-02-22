import React from 'react';
const BookingUser2 = () => {
//     return (
//       <div className="bg-zinc-100 h-screen flex flex-col">
//         <div className=" grid grid-col mt-8 ">
          
//           <div className=" mt-40 ml-10 mr-10 h-[32rem]  rounded-3xl bg-neutral-50  grid grid-col-">
//             {/* <div>
//               <img
//                 className="w-80 h-50 object-cover rounded-3xl mt-10  ml-10 mr-10 mb-10 mx-auto "
//                 src="https://img2.pic.in.th/pic/cat1.jpeg"
//                 alt="cat1.jpeg"
//               ></img>
//             </div> */}
            
//             <div className="flex flex-col items-center">
//             <p className="absolute top-60 right-28 sm:text-5xl font-bold">
//               {" "}
//               Standard
//             </p>
            
//             <div >
//               <img
//                 className="absolute top-80 right-24 w-80 h-50 object-cover "
//                 src="https://img5.pic.in.th/file/secure-sv1/star.png"
//                 alt="star.png"
//               />
//               <div className="flex flex-row">
//               <img
//                 src="https://img2.pic.in.th/pic/buttonnull.png"
//                 alt="buttonnull.png"
//               /></div>
//             </div>
//             </div>
//             {/* <div>
//               <p className="absolute top-96 right-28 sm:text-4xl font-bold">
//                 {" "}
//                 จำนวนน้องแมวต่อห้อง
//               </p>
//             </div> */}
//             {/* <div className="flex flex-row">
//               <img
//                 src="https://img2.pic.in.th/pic/buttonnull.png"
//                 alt="buttonnull.png"
//               />
//               <img
//                 src="https://img2.pic.in.th/pic/buttonnull.png"
//                 alt="buttonnull.png"
//               />
//               <img
//                 src="https://img2.pic.in.th/pic/buttonnull.png"
//                 alt="buttonnull.png"
//               />
//               <img
//                 src="https://img2.pic.in.th/pic/buttonnull.png"
//                 alt="buttonnull.png"
//               />
//             </div>
//             <div className="flex flex-row">
//               <img src="https://img2.pic.in.th/pic/pink.png" alt="pink.png" />
//               <img src="https://img2.pic.in.th/pic/pink.png" alt="pink.png" />
//               <img src="https://img2.pic.in.th/pic/pink.png" alt="pink.png" />
//               <img src="https://img2.pic.in.th/pic/pink.png" alt="pink.png" />
//             </div> */}
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//               คลิกเพื่อจอง
//             </button>
//           </div>
//         </div>
  
//         <div className=" grid grid-row-4 mt-8 ">
//           <div className=" mt-40 ml-10 mr-10 h-[32rem]  rounded-3xl bg-neutral-200  grid grid-row-4"></div>
//         </div>
//       </div>
//     );
//           };
// export default BookingUser;


// return (
//   <div className="bg-zinc-100 h-screen flex flex-col">      
//   <div className=" mt-40 ml-10 mr-10 h-[32rem]  rounded-3xl bg-neutral-200  grid grid-row-4">
//   <div className=" grid grid-row-4 mt-8 ">
//         <div>
//                <img
//                  className="w-80 h-50 object-cover rounded-3xl mt-10  ml-10 mr-10 mb-10 mx-auto "
//                  src="https://img2.pic.in.th/pic/cat1.jpeg"
//                  alt="cat1.jpeg"
//                ></img>             
//                </div>
        
//         <div className="flex flex-col items-center">
//          <p className="absolute top-60 right-28 sm:text-5xl font-bold">
//                   {" "}
//                   Standard   
//               </p>
//               <img
//                  className="absolute top-80 right-24 w-80 h-50  object-cover "
//                  src="https://img5.pic.in.th/file/secure-sv1/star.png"
//                  alt="star.png"
//                />
//                <p className="absolute top-96 right-28 sm:text-4xl font-bold">
//                     {" "}
//                     จำนวนน้องแมวต่อห้อง
//                     </p>
//                 <div className="flex flex-row absolute top-0 right-24 h-50 ">
//                   <img
//                     src="https://img2.pic.in.th/pic/buttonnull.png"
//                     alt="buttonnull.png"
//                   />
//                </div>


//         </div>
//         </div>
//         </div>
//       </div>
// );
//       };
// export default BookingUser;
  return (
    <div className="bg-white h-screen flex flex-row justify-start items-start">
      <div className="mt-4 ml-7 mr-7 rounded-3xl bg-neutral-300 grid grid-flow-col  justify-center items-start">
      {/* ก้อน1 */}
        <div className=" flex justify-center">
          <img
            className=" justify-center rounded-3xl"
            src="https://img2.pic.in.th/pic/cat1.jpeg"
            alt="cat1.jpeg"
          />
        </div>
        
        {/* ก้อน2 */}
        <div className="flex flex-col justify-center items-center">
          <p className=" font-bold mt-5">
            Standard
          </p>
          
          <img
            className=""
            src="https://img5.pic.in.th/file/secure-sv1/star.png"
            alt="star.png"
          />
          <div className=" grid grid-flow-col mr-4 ml-4 ">
            <img
              src="https://img2.pic.in.th/pic/buttonnull.png"
              alt="buttonnull.png"
            />
            <img
              src="https://img2.pic.in.th/pic/buttonnull.png"
              alt="buttonnull.png"
            />
            <img
              src="https://img2.pic.in.th/pic/buttonnull.png"
              alt="buttonnull.png"
            />
            <img
              src="https://img2.pic.in.th/pic/buttonnull.png"
              alt="buttonnull.png"
            />
            </div>

        </div>

      </div>
    </div>
  );
};
  export default BookingUser2;