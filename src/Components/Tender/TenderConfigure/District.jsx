// // import { useEffect, useState } from 'react';
// // import { EditOutlined, CloseOutlined, SendOutlined } from '@ant-design/icons';

// // import ApiClient from './../../../Api/ApiClient';

// // // Modal component for adding/editing designation types with larger size
// // function DesignationTypeModal({ isOpen, onClose, title, currentStatus, onStatusChange }) {
// //   if (!isOpen) return null;

// //   // Handle radio button change
// //   const handleRadioChange = (e) => {
// //     onStatusChange(e.target.value);
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 w-full h-full">
// //       <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
// //         <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
// //           <CloseOutlined />
// //         </button>
// //         <h2 className="text-xl font-semibold mb-6">{title}</h2>
// //         <form className="space-y-6">
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">
// //               <span className="text-red-500">*</span> Name:
// //             </label>
// //             <input
// //               type="text"
// //               placeholder="Enter Your Name"
// //               className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
// //             />
// //           </div>

// //           {/* Center the radio buttons */}
// //           <div className="flex justify-center mt-4">
// //             <label className="flex items-center mx-4">
// //               <input
// //                 type="radio"
// //                 name="status"
// //                 value="Available"
// //                 checked={currentStatus === 'Available'}
// //                 onChange={handleRadioChange}
// //                 className="mr-2"
// //               />
// //               Available
// //             </label>
// //             <label className="flex items-center mx-4">
// //               <input
// //                 type="radio"
// //                 name="status"
// //                 value="Unavailable"
// //                 checked={currentStatus === 'Unavailable'}
// //                 onChange={handleRadioChange}
// //                 className="mr-2"
// //               />
// //               Unavailable
// //             </label>
// //           </div>

// //           <button
// //             type="submit"
// //             className="bg-teal-500 text-white px-6 py-3 rounded-lg flex items-center justify-center w-full"
// //           >
// //             <SendOutlined className="mr-2" /> Submit
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // // Main Sector component
// // function District() {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [modalTitle, setModalTitle] = useState("Add Designation Type");
// //   const [currentStatus, setCurrentStatus] = useState("Available");
// //   const [editingAmenity, setEditingAmenity] = useState(null);
// //   const [sector, setSector] = useState([]); // Store fetched sector data

// //   const openModal = (title, amenity) => {
// //     setModalTitle(title);
// //     setEditingAmenity(amenity);
// //     setCurrentStatus(amenity ? amenity.status : "Available");
// //     setIsModalOpen(true);
// //   };

// //   const handleStatusChange = (newStatus) => {
// //     setCurrentStatus(newStatus);
// //   };

// //   // Fetch data from API
// //   useEffect(() => {
// //     const fetchSectorData = async () => {
// //       try {
// //         const response = await ApiClient.get('/admin/tender-config/district?limit&skip');
// //         setSector(response.data.data); // Update state with fetched data
// //         console.log(response.data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchSectorData();
// //   }, []);

// //   return (
// //     <div className="h-screen w-full flex flex-col p-4 bg-gray-100 gap-2">
// //       <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sector</h2>

// //       <button
// //         onClick={() => openModal("Add Designation Type")}
// //         className="bg-teal-500 text-white px-7 py-3 rounded-lg self-start"
// //       >
// //         Create
// //       </button>

// //       <DesignationTypeModal
// //         isOpen={isModalOpen}
// //         onClose={() => setIsModalOpen(false)}
// //         title={modalTitle}
// //         currentStatus={currentStatus}
// //         onStatusChange={handleStatusChange}
// //       />

// //       <div className="flex-grow overflow-auto">
// //         <table className="w-full border-collapse border border-gray-200">
// //           <thead>
// //             <tr>
// //               <th className="px-4 py-2 bg-teal-100 text-left font-semibold border-b">Name</th>
// //               <th className="px-4 py-2 bg-teal-100 text-left font-semibold border-b">Status</th>
// //               <th className="px-4 py-2 bg-teal-100 text-left font-semibold border-b">Action</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {sector.map((amenity, index) => (
// //               <tr key={index} className="hover:bg-gray-50">
// //                 <td className="px-4 py-2 border-b">{amenity.name}</td>
// //                 <td className="px-4 py-2 border-b">
// //                   <span
// //                     className={`px-2 py-1 rounded-full text-xs ${
// //                       amenity.sector_status === 'Available'
// //                         ? 'bg-green-100 text-green-700'
// //                         : 'bg-red-100 text-red-700'
// //                     }`}
// //                   >
// //                     {amenity.status}
// //                   </span>
// //                 </td>
// //                 <td className="px-4 py-2 border-b">
// //                   <button
// //                     onClick={() => openModal(`Edit ${amenity.name}`, amenity)}
// //                     className="text-blue-500 hover:underline flex items-center"
// //                   >
// //                     <EditOutlined className="mr-1" /> Edit
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }

// // export default District;


// import { useEffect, useState } from "react";
// import { EditOutlined, CloseOutlined, SendOutlined, SearchOutlined } from "@ant-design/icons";
// import ApiClient from "./../../../Api/ApiClient";

// function DesignationTypeModal({ isOpen, onClose, title, currentStatus, onStatusChange }) {
//   if (!isOpen) return null;

//   const handleRadioChange = (e) => {
//     onStatusChange(e.target.value);
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 w-full h-full">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
//         <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
//           <CloseOutlined />
//         </button>
//         <h2 className="text-xl font-semibold mb-6">{title}</h2>
//         <form className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               <span className="text-red-500">*</span> Name:
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Your Name"
//               className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
//             />
//           </div>
//           <div className="flex justify-center mt-4">
//             <label className="flex items-center mx-4">
//               <input
//                 type="radio"
//                 name="status"
//                 value="Available"
//                 checked={currentStatus === "Available"}
//                 onChange={handleRadioChange}
//                 className="mr-2"
//               />
//               Available
//             </label>
//             <label className="flex items-center mx-4">
//               <input
//                 type="radio"
//                 name="status"
//                 value="Unavailable"
//                 checked={currentStatus === "Unavailable"}
//                 onChange={handleRadioChange}
//                 className="mr-2"
//               />
//               Unavailable
//             </label>
//           </div>
//           <button
//             type="submit"
//             className="bg-teal-500 text-white px-6 py-3 rounded-lg flex items-center justify-center w-full"
//           >
//             <SendOutlined className="mr-2" /> Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// function District() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalTitle, setModalTitle] = useState("Add Designation Type");
//   const [currentStatus, setCurrentStatus] = useState("Available");
//   const [editingAmenity, setEditingAmenity] = useState(null);
//   const [sector, setSector] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const openModal = (title, amenity) => {
//     setModalTitle(title);
//     setEditingAmenity(amenity);
//     setCurrentStatus(amenity ? amenity.status : "Available");
//     setIsModalOpen(true);
//   };

//   const handleStatusChange = (newStatus) => {
//     setCurrentStatus(newStatus);
//   };

//   const fetchSectorData = async () => {
//     try {
//       const response = await ApiClient.get("/admin/tender-config/district?limit&skip");
//       setSector(response.data.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredSectors = sector.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   useEffect(() => {
//     fetchSectorData();
//   }, []);

//   return (
//     <div className="h-screen w-full flex flex-col p-4 bg-gray-100 gap-4">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-2xl font-semibold text-gray-800">Sector</h2>
      



//       </div>
//       <div className="flex items-center justify-between w-full mb-4">
//   <div className="flex items-center">
//     <input
//       type="text"
//       value={searchTerm}
//       onChange={handleSearchChange}
//       placeholder="Search sectors"
//       className="px-4 py-2 border border-gray-300 rounded-l-md w-[400px]"
//     />
//     <button className="bg-teal-500 text-white px-4 py-2 rounded-r-md flex items-center">
//       <SearchOutlined />
//     </button>
//   </div>
//   <button
//     onClick={() => openModal("Add Designation Type")}
//     className="bg-teal-500 text-white px-7 py-3 rounded-lg"
//   >
//     Create
//   </button>

//       {/* Filter by status */}
//       <select
//           value={filterStatus}
//           onChange={(e) => setFilterStatus(e.target.value)}
//           className="px-4 py-2 border border-gray-300 rounded-md"
//         >
//           <option value="">All</option>
//           <option value="Available">Available</option>
//           <option value="Unavailable">Unavailable</option>
//         </select>
// </div>
//       <DesignationTypeModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         title={modalTitle}
//         currentStatus={currentStatus}
//         onStatusChange={handleStatusChange}
//       />
//       <div className="flex-grow overflow-auto">
//         <table className="w-full border-collapse border border-gray-200">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 bg-teal-100 text-left font-semibold border-b">Name</th>
//               <th className="px-4 py-2 bg-teal-100 text-left font-semibold border-b">Status</th>
//               <th className="px-4 py-2 bg-teal-100 text-left font-semibold border-b">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredSectors.map((amenity, index) => (
//               <tr key={index} className="hover:bg-gray-50">
//                 <td className="px-4 py-2 border-b">{amenity.name}</td>
//                 <td className="px-4 py-2 border-b">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs ${
//                       amenity.sector_status === "Available"
//                         ? "bg-green-100 text-green-700"
//                         : "bg-red-100 text-red-700"
//                     }`}
//                   >
//                     {amenity.status}
//                   </span>
//                 </td>
//                 <td className="px-4 py-2 border-b">
//                   <button
//                     onClick={() => openModal(`Edit ${amenity.name}`, amenity)}
//                     className="text-blue-500 hover:underline flex items-center"
//                   >
//                     <EditOutlined className="mr-1" /> Edit
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default District;


import { useEffect, useState } from "react";
import { EditOutlined, CloseOutlined, SendOutlined, SearchOutlined } from "@ant-design/icons";
import ApiClient from "./../../../Api/ApiClient";

function DesignationTypeModal({ isOpen, onClose, title, currentStatus, onStatusChange }) {
  if (!isOpen) return null;

  const handleRadioChange = (e) => {
    onStatusChange(e.target.value);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 w-full h-full">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <CloseOutlined />
        </button>
        <h2 className="text-xl font-semibold mb-6">{title}</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span> Name:
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div className="flex justify-center mt-4">
            <label className="flex items-center mx-4">
              <input
                type="radio"
                name="status"
                value="Available"
                checked={currentStatus === "Available"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              Available
            </label>
            <label className="flex items-center mx-4">
              <input
                type="radio"
                name="status"
                value="Unavailable"
                checked={currentStatus === "Unavailable"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              Unavailable
            </label>
          </div>
          <button
            type="submit"
            className="bg-teal-500 text-white px-6 py-3 rounded-lg flex items-center justify-center w-full"
          >
            <SendOutlined className="mr-2" /> Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function District() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Designation Type");
  const [currentStatus, setCurrentStatus] = useState("Available");
  const [editingAmenity, setEditingAmenity] = useState(null);
  const [sector, setSector] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const openModal = (title, amenity) => {
    setModalTitle(title);
    setEditingAmenity(amenity);
    setCurrentStatus(amenity ? amenity.status : "Available");
    setIsModalOpen(true);
  };

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
  };

  const fetchSectorData = async () => {
    try {
      const response = await ApiClient.get("/admin/tender-config/district?limit&skip");
      setSector(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSectors = sector.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus ? item.status === filterStatus : true;
    return matchesSearch && matchesFilter;
  });

  useEffect(() => {
    fetchSectorData();
  }, []);

  return (
    <div className="h-screen w-full flex flex-col p-4 bg-gray-100 gap-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Sector</h2>
      </div>
      <div className="flex items-center justify-between w-full mb-4">
      <button
          onClick={() => openModal("Add Designation Type")}
          className="bg-teal-500 text-white px-7 py-3 rounded-lg"
        >
          Create
        </button>
        <div className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search sectors"
            className="px-4 py-2 border border-gray-300 rounded-l-md w-[400px]"
          />
          <button className="bg-teal-500 text-white px-4 py-2 rounded-r-md flex items-center">
            <SearchOutlined />
          </button>
        </div>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="">All</option>
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
      </div>
      <DesignationTypeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        currentStatus={currentStatus}
        onStatusChange={handleStatusChange}
      />
      <div className="flex-grow overflow-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-teal-100 text-left font-semibold border-b">Name</th>
              <th className="px-4 py-2 bg-teal-100 text-left font-semibold border-b">Status</th>
              <th className="px-4 py-2 bg-teal-100 text-left font-semibold border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredSectors.map((amenity, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{amenity.name}</td>
                <td className="px-4 py-2 border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      amenity.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {amenity.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => openModal(`Edit ${amenity.name}`, amenity)}
                    className="text-blue-500 hover:underline flex items-center"
                  >
                    <EditOutlined className="mr-1" /> Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default District;
