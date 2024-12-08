




// import { useState, useEffect } from "react";
// import ApiClient from "../../Api/ApiClient";

// // API Utility for Fetching Data
// const fetchPackages = async () => {
//   try {
//     const response = await ApiClient.get("/admin/package");
//     return response.data.data || [];
//   } catch (error) {
//     console.error("Error fetching packages:", error);
//     return [];
//   }
// };

// // API Utility for Creating a New Package
// const createPackage = async (formData) => {
//   const data = {
//     name: formData.name,
//     amount: formData.amount,
//     duration: formData.duration,
//   };

//   try {
//     const response = await ApiClient.post("/admin/package", data);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating package:", error);
//     return null;
//   }
// };

// const AllPackageList = () => {
//   const [packages, setPackages] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showCreateForm, setShowCreateForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     amount: "",
//     duration: "",
//   });

//   useEffect(() => {
//     // Fetch packages from API on component mount
//     const loadPackages = async () => {
//       const fetchedPackages = await fetchPackages();
//       setPackages(fetchedPackages);
//     };
//     loadPackages();
//   }, []);

//   const filteredPackages = packages.filter((pkg) =>
//     pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log("Submitted Data:", formData);

//     // Call the createPackage function
//     const result = await createPackage(formData);
//     if (result) {
//       // If package creation is successful, reload the packages list
//       const updatedPackages = await fetchPackages();
//       setPackages(updatedPackages);
//     }

//     setShowCreateForm(false); // Close the form after submission
//   };

 

//   const handleUpdate = async () => {
//   const [loading, setLoading] = useState(false);
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//     setLoading(true);
//     setError(null);
  
//     // Ensure that the package ID is valid before making the request
//     const packageId = 2; // Adjust this as necessary (use dynamic ID if needed)
  
//     if (!packageId) {
//       setError("Package ID is missing.");
//       setLoading(false);
//       return;
//     }
  
//     try {
//       // Make the PATCH request to update the package
//       const data = await ApiClient.patch(`/admin/package/${packageId}`, {
//         name: 'Electrical 1',
//         amount: 1090,
//         duration: 1,
//         status: 1,
//       });
  
//       setResponse(data);
//       console.log('API Response:', data);
//     } catch (err) {
//       // Check if the error response contains a message from the backend
//       const errorMessage = err.response?.data?.message || err.message || "An error occurred";
//       setError(errorMessage);
//       console.error('API Error:', errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <div className="p-6">
//       {/* Conditional rendering of create form or list */}
//       {showCreateForm ? (
//         <div className="flex items-center justify-center h-screen w-full bg-gray-50">
//           <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl">
//             <h2 className="text-3xl font-bold text-center mb-6">Create Package</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name Input */}
//               <div className="flex flex-col">
//                 <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Enter Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="p-4 border border-gray-300 rounded-lg shadow-sm text-lg focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>

//               {/* Amount Input */}
//               <div className="flex flex-col">
//                 <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="amount">
//                   Amount
//                 </label>
//                 <input
//                   type="text"
//                   id="amount"
//                   name="amount"
//                   placeholder="Enter Amount"
//                   value={formData.amount}
//                   onChange={handleChange}
//                   className="p-4 border border-gray-300 rounded-lg shadow-sm text-lg focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>

//               {/* Duration Input */}
//               <div className="flex flex-col">
//                 <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="duration">
//                   Duration (Month)
//                 </label>
//                 <input
//                   type="text"
//                   id="duration"
//                   name="duration"
//                   placeholder="Enter Duration in Month"
//                   value={formData.duration}
//                   onChange={handleChange}
//                   className="p-4 border border-gray-300 rounded-lg shadow-sm text-lg focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-center">
//                 <button
//                   type="submit"
//                   className="w-auto py-2 px-6 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
            // {/* <div className="flex justify-center mt-4">
            //   <button
            //     onClick={() => setShowCreateForm(false)}
            //     className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            //   >
            //     Cancel
            //   </button>
            // </div> */}
//           </div>
//         </div>
//       ) : (
//         <>
//           <div className="flex justify-between items-center mb-6">
//             <button
//               onClick={() => setShowCreateForm(true)}
//               className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//             >
//               + Create
//             </button>
//             <input
//               type="text"
//               placeholder="Search by All PackageList"
//               className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-64 px-4 py-2"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">ID</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Amount</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Duration</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Update</th>
                  
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredPackages.map((pkg,index) => (
//                   <tr key={pkg.id} className="border-t">
//                     <td className="px-4 py-2 text-sm text-gray-800">{index + 1}</td>
//                     <td className="px-4 py-2 text-sm text-gray-800">{pkg.name}</td>
//                     <td className="px-4 py-2 text-sm text-gray-800">{pkg.amount}</td>
//                     <td className="px-4 py-2 text-sm text-gray-800">{pkg.duration}</td>
//                     <td className="px-4 py-2 text-sm text-gray-800">
//                       <span className={pkg.status === 1 ? "text-blue-500" : "text-red-500"}>
//                         {pkg.status === 1 ? "Available" : "Unavailable"}
//                       </span>
//                     </td>
//                     <td className=" px-4 py-2 text-blue-600 hover:underline cursor-pointer" onClick={handleUpdate}>
//                     Edit
                    
//                 </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="flex justify-center mt-4">
//             <button
//               className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//             >
//               &lt;
//             </button>
//             <span className="mx-2 px-4 py-1 bg-blue-600 text-white rounded-md">1</span>
//             <button
//               className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//             >
//               &gt;
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default AllPackageList;





// import { useState, useEffect } from "react";
// import ApiClient from "../../Api/ApiClient";

// // API Utility for Fetching Data
// const fetchPackages = async () => {
//   try {
//     const response = await ApiClient.get("/admin/package");
//     return response.data.data || [];
//   } catch (error) {
//     console.error("Error fetching packages:", error);
//     return [];
//   }
// };

// // API Utility for Creating a New Package
// const createPackage = async (formData) => {
//   const data = {
//     name: formData.name,
//     amount: formData.amount,
//     duration: formData.duration,
//   };

//   try {
//     const response = await ApiClient.post("/admin/package", data);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating package:", error);
//     return null;
//   }
// };

// // API Utility for Updating a Package
// const updatePackage = async (id, formData) => {
//   const data = {
//     name: formData.name,
//     amount: formData.amount,
//     duration: formData.duration,
//     status: formData.status, // Assuming you want to update status too
//   };

//   try {
//     const response = await ApiClient.patch(`/admin/package/${id}`, data);
//     return response.data;
//   } catch (error) {
//     console.error("Error updating package:", error);
//     return null;
//   }
// };

// const AllPackageList = () => {
//   const [packages, setPackages] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showCreateForm, setShowCreateForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     amount: "",
//     duration: "",
//     status: 1, // Default status
//   });
//   const [editingPackageId, setEditingPackageId] = useState(null);

//   useEffect(() => {
//     // Fetch packages from API on component mount
//     const loadPackages = async () => {
//       const fetchedPackages = await fetchPackages();
//       setPackages(fetchedPackages);
//     };
//     loadPackages();
//   }, []);

//   const filteredPackages = packages.filter((pkg) =>
//     pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (editingPackageId) {
//       // If editing, update the package
//       const updatedPackage = await updatePackage(editingPackageId, formData);
//       if (updatedPackage) {
//         const updatedPackages = await fetchPackages();
//         setPackages(updatedPackages);
//       }
//     } else {
//       // If creating new, create the package
//       const result = await createPackage(formData);
//       if (result) {
//         const updatedPackages = await fetchPackages();
//         setPackages(updatedPackages);
//       }
//     }
//     setShowCreateForm(false); // Close the form after submission
//     setEditingPackageId(null); // Reset editing state
//   };

//   const handleEdit = (pkg) => {
//     setEditingPackageId(pkg.id); // Set the package ID to indicate you're editing
//     setFormData({
//       name: pkg.name,
//       amount: pkg.amount,
//       duration: pkg.duration,
//       status: pkg.status,
//     });
//     setShowCreateForm(true); // Show the form when editing
//   };

//   return (
//     <div className="p-6">
//       {showCreateForm ? (
//         <div className="flex items-center justify-center h-screen w-full bg-gray-50">
//           <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl">
//             <h2 className="text-3xl font-bold text-center mb-6">
//               {editingPackageId ? "Update Package" : "Create Package"}
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name Input */}
//               <div className="flex flex-col">
//                 <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Enter Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="p-4 border border-gray-300 rounded-lg shadow-sm text-lg focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>

//               {/* Amount Input */}
//               <div className="flex flex-col">
//                 <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="amount">
//                   Amount
//                 </label>
//                 <input
//                   type="text"
//                   id="amount"
//                   name="amount"
//                   placeholder="Enter Amount"
//                   value={formData.amount}
//                   onChange={handleChange}
//                   className="p-4 border border-gray-300 rounded-lg shadow-sm text-lg focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>

//               {/* Duration Input */}
//               <div className="flex flex-col">
//                 <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="duration">
//                   Duration (Month)
//                 </label>
//                 <input
//                   type="text"
//                   id="duration"
//                   name="duration"
//                   placeholder="Enter Duration in Month"
//                   value={formData.duration}
//                   onChange={handleChange}
//                   className="p-4 border border-gray-300 rounded-lg shadow-sm text-lg focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-end gap-3">
//                 <button
//                   type="submit"
//                   className="w-auto py-2 px-6 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   {editingPackageId ? "Update" : "Submit"}
//                 </button>
//                  <div className="flex justify-center  ">
//               <button
//                 onClick={() => setShowCreateForm(false)}
//                 className="w-auto py-2 px-6 bg-red-700 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 Cancel
//               </button>
//             </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       ) : (
//         <>
//           <div className="flex justify-between items-center mb-6">
//             <button
//               onClick={() => setShowCreateForm(true)}
//               className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//             >
//               + Create
//             </button>
//             <input
//               type="text"
//               placeholder="Search by All PackageList"
//               className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-64 px-4 py-2"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">ID</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Amount</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Duration</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
//                   <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Update</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredPackages.map((pkg, index) => (
//                   <tr key={pkg.id} className="border-t">
//                     <td className="px-4 py-2 text-sm text-gray-800">{index + 1}</td>
//                     <td className="px-4 py-2 text-sm text-gray-800">{pkg.name}</td>
//                     <td className="px-4 py-2 text-sm text-gray-800">{pkg.amount}</td>
//                     <td className="px-4 py-2 text-sm text-gray-800">{pkg.duration}</td>
//                     <td className="px-4 py-2 text-sm text-gray-800">
//                       <span className={pkg.status === 1 ? "text-blue-500" : "text-red-500"}>
//                         {pkg.status === 1 ? "Available" : "Unavailable"}
//                       </span>
//                     </td>
//                     <td className="px-4 py-2 text-blue-600 hover:underline cursor-pointer" onClick={() => handleEdit(pkg)}>
//                       Edit
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default AllPackageList;


import { useState, useEffect } from "react";
import ApiClient from "../../Api/ApiClient";

// API Utility for Fetching Data
const fetchPackages = async () => {
  try {
    const response = await ApiClient.get("/admin/package");
    return response.data.data || [];
  } catch (error) {
    console.error("Error fetching packages:", error);
    return [];
  }
};

// API Utility for Creating a New Package
const createPackage = async (formData) => {
  const data = {
    name: formData.name,
    amount: formData.amount,
    duration: formData.duration,
  };

  try {
    const response = await ApiClient.post("/admin/package", data);
    return response.data;
  } catch (error) {
    console.error("Error creating package:", error);
    return null;
  }
};

// API Utility for Updating a Package
const updatePackage = async (id, formData) => {
  const data = {
    name: formData.name,
    amount: formData.amount,
    duration: formData.duration,
    status: formData.status,
  };

  try {
    const response = await ApiClient.patch(`/admin/package/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating package:", error);
    return null;
  }
};

const AllPackageList = () => {
  const [packages, setPackages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    duration: "",
    status: 1,
  });
  const [editingPackageId, setEditingPackageId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const loadPackages = async () => {
      const fetchedPackages = await fetchPackages();
      setPackages(fetchedPackages);
    };
    loadPackages();
  }, []);

  const filteredPackages = packages.filter((pkg) =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingPackageId) {
      const updatedPackage = await updatePackage(editingPackageId, formData);
      if (updatedPackage) {
        const updatedPackages = await fetchPackages();
        setPackages(updatedPackages);
      }
    } else {
      const result = await createPackage(formData);
      if (result) {
        const updatedPackages = await fetchPackages();
        setPackages(updatedPackages);
      }
    }
    setShowCreateForm(false);
    setEditingPackageId(null);
  };

  const handleEdit = (pkg) => {
    setEditingPackageId(pkg.id);
    setFormData({
      name: pkg.name,
      amount: pkg.amount,
      duration: pkg.duration,
      status: pkg.status,
    });
    setShowCreateForm(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPackages = filteredPackages.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="p-6">
      {showCreateForm ? (
        <div> {/* Add form rendering logic here */} </div>
      ) : (
        <>
          <div> {/* Add table rendering logic */}</div>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {Array.from(
              { length: Math.ceil(filteredPackages.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-2 mx-1 rounded ${
                    currentPage === i + 1
                      ? "bg-teal-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AllPackageList;

