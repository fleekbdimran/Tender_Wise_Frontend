


// import React, { useState } from "react";

// const ForgotPassword = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   // Handle OTP submission
//   const handleOtpSubmit = (e) => {
//     e.preventDefault();

//     // Simulating sending OTP to the phone number
//     if (phoneNumber) {
//       setOtpSent(true);
//       setSuccessMessage("OTP sent to your phone number.");
//       setErrorMessage("");
//     } else {
//       setErrorMessage("Please enter a valid phone number.");
//     }
//   };

//   // Handle OTP verification
//   const handleOtpVerification = (e) => {
//     e.preventDefault();
    
//     // Simulating OTP verification (In real-world scenario, verify OTP through backend)
//     if (otp === "123456") {  // Assume "123456" as correct OTP
//       setIsOtpVerified(true);
//       setSuccessMessage("OTP verified successfully. You can now reset your password.");
//       setErrorMessage("");
//     } else {
//       setErrorMessage("Invalid OTP. Please try again.");
//     }
//   };

//   // Handle password change
//   const handlePasswordChange = (e) => {
//     e.preventDefault();
    
//     if (newPassword) {
//       setSuccessMessage("Your password has been reset successfully.");
//       setPhoneNumber("");
//       setOtp("");
//       setNewPassword("");
//       setOtpSent(false);
//       setIsOtpVerified(false);
//     } else {
//       setErrorMessage("Please enter a new password.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           Forgot Password
//         </h2>
//         <p className="mt-2 text-sm text-center text-gray-600">
//           Enter your phone number to receive OTP for password reset.
//         </p>

//         {successMessage && (
//           <div className="mt-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded">
//             {successMessage}
//           </div>
//         )}
//         {errorMessage && (
//           <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded">
//             {errorMessage}
//           </div>
//         )}

//         {/* Phone Number Input */}
//         {!otpSent && (
//           <form onSubmit={handleOtpSubmit} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phoneNumber"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 placeholder="Enter your phone number"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Send OTP
//             </button>
//           </form>
//         )}

//         {/* OTP Input */}
//         {otpSent && !isOtpVerified && (
//           <form onSubmit={handleOtpVerification} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
//                 OTP
//               </label>
//               <input
//                 type="text"
//                 id="otp"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter the OTP"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Verify OTP
//             </button>
//           </form>
//         )}

//         {/* New Password Input */}
//         {isOtpVerified && (
//           <form onSubmit={handlePasswordChange} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
//                 New Password
//               </label>
//               <input
//                 type="password"
//                 id="newPassword"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 placeholder="Enter new password"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Reset Password
//             </button>
//           </form>
//         )}

//         <div className="mt-4 text-center">
//           <a href="/login" className="text-blue-500 hover:underline">
//             Back to Login
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


// right code uporer ta


// import React, { useState } from "react";
// import ApiClient from '../Api/ApiClient'; // API ক্লায়েন্ট ইনপোর্ট করা

// const ForgotPassword = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   // OTP পাঠানোর জন্য API কল
//   const handleOtpSubmit = (e) => {
//     e.preventDefault();

//     if (phoneNumber) {
//       ApiClient.post('/user/auth/forgot-password', { phone: phoneNumber })
//         .then((response) => {
//           setOtpSent(true);
//           setSuccessMessage("OTP sent to your phone number.");
//           setErrorMessage("");
//         })
//         .catch((error) => {
//           setErrorMessage("Failed to send OTP. Please try again.");
//         });
//     } else {
//       setErrorMessage("Please enter a valid phone number.");
//     }
//   };

//   // OTP যাচাই করার জন্য API কল
//   const handleOtpVerification = (e) => {
//     e.preventDefault();

//     if (otp) {
//       ApiClient.post('/user/auth/verify-otp', { phone: phoneNumber, otp: otp })
//         .then((response) => {
//           setIsOtpVerified(true);
//           setSuccessMessage("OTP verified successfully. You can now reset your password.");
//           setErrorMessage("");
//         })
//         .catch((error) => {
//           setErrorMessage("Invalid OTP. Please try again.");
//         });
//     } else {
//       setErrorMessage("Please enter OTP.");
//     }
//   };

//   // পাসওয়ার্ড রিসেট করার জন্য API কল
//   const handlePasswordChange = (e) => {
//     e.preventDefault();

//     if (newPassword) {
//       ApiClient.post('/user/auth/reset-password', { phone: phoneNumber, password: newPassword })
//         .then((response) => {
//           setSuccessMessage("Your password has been reset successfully.");
//           setPhoneNumber("");
//           setOtp("");
//           setNewPassword("");
//           setOtpSent(false);
//           setIsOtpVerified(false);
//         })
//         .catch((error) => {
//           setErrorMessage("Failed to reset password. Please try again.");
//         });
//     } else {
//       setErrorMessage("Please enter a new password.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           Forgot Password
//         </h2>
//         <p className="mt-2 text-sm text-center text-gray-600">
//           Enter your phone number to receive OTP for password reset.
//         </p>

//         {successMessage && (
//           <div className="mt-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded">
//             {successMessage}
//           </div>
//         )}
//         {errorMessage && (
//           <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded">
//             {errorMessage}
//           </div>
//         )}

//         {/* Phone Number Input */}
//         {!otpSent && (
//           <form onSubmit={handleOtpSubmit} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phoneNumber"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 placeholder="Enter your phone number"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Send OTP
//             </button>
//           </form>
//         )}

//         {/* OTP Input */}
//         {otpSent && !isOtpVerified && (
//           <form onSubmit={handleOtpVerification} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
//                 OTP
//               </label>
//               <input
//                 type="text"
//                 id="otp"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter the OTP"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Verify OTP
//             </button>
//           </form>
//         )}

//         {/* New Password Input */}
//         {isOtpVerified && (
//           <form onSubmit={handlePasswordChange} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
//                 New Password
//               </label>
//               <input
//                 type="password"
//                 id="newPassword"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 placeholder="Enter new password"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Reset Password
//             </button>
//           </form>
//         )}

//         <div className="mt-4 text-center">
//           <a href="/login" className="text-blue-500 hover:underline">
//             Back to Login
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;



// import React, { useState } from "react";
// import ApiClient from '../Api/ApiClient'; // API client import

// const ForgotPassword = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   // Send OTP API call
//   const handleOtpSubmit = (e) => {
//     e.preventDefault();
//     if (phoneNumber) {
//       ApiClient.post('/user/auth/forgot-password', { phone: phoneNumber })
//         .then((response) => {
//           console.log("API Response: ", response);
//           setOtpSent(true);
//           setSuccessMessage("OTP sent to your phone number.");
//           setErrorMessage("");
//         })
//         .catch((error) => {
//           setErrorMessage("Failed to send OTP. Please try again.");
//         });
//     } else {
//       setErrorMessage("Please enter a valid phone number.");
//     }
//   };

//   // Verify OTP API call
//   const handleOtpVerification = (e) => {
//     e.preventDefault();
//     if (otp) {
//       ApiClient.post('/user/auth/verify-otp', { phone: phoneNumber, otp: otp })
//         .then((response) => {
//           console.log("API Response: ", response);
//           setIsOtpVerified(true);
//           setSuccessMessage("OTP verified successfully. You can now reset your password.");
//           setErrorMessage("");
//         })
//         .catch((error) => {
//           setErrorMessage("Invalid OTP. Please try again.");
//         });
//     } else {
//       setErrorMessage("Please enter OTP.");
//     }
//   };

//   // Reset password API call
//   const handlePasswordChange = (e) => {
//     e.preventDefault();
//     if (newPassword) {
//       ApiClient.patch('/user/auth/change-forget-password', { 
//         phone: phoneNumber, 
//         new_password: newPassword, 
//         retype_new_password: newPassword 
//       })
//         .then((response) => {
//           console.log("API Response: ", response);
//           setSuccessMessage("Your password has been reset successfully.");
//           setPhoneNumber("");
//           setOtp("");
//           setNewPassword("");
//           setOtpSent(false);
//           setIsOtpVerified(false);
//         })
//         .catch((error) => {
//           setErrorMessage("Failed to reset password. Please try again.");
//         });
//     } else {
//       setErrorMessage("Please enter a new password.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           Forgot Password
//         </h2>
//         <p className="mt-2 text-sm text-center text-gray-600">
//           Enter your phone number to receive OTP for password reset.
//         </p>

//         {successMessage && (
//           <div className="mt-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded">
//             {successMessage}
//           </div>
//         )}
//         {errorMessage && (
//           <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded">
//             {errorMessage}
//           </div>
//         )}

//         {/* Phone Number Input */}
//         {!otpSent && (
//           <form onSubmit={handleOtpSubmit} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phoneNumber"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 placeholder="Enter your phone number"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Send OTP
//             </button>
//           </form>
//         )}

//         {/* OTP Input */}
//         {otpSent && !isOtpVerified && (
//           <form onSubmit={handleOtpVerification} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
//                 OTP
//               </label>
//               <input
//                 type="text"
//                 id="otp"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter the OTP"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Verify OTP
//             </button>
//           </form>
//         )}

//         {/* New Password Input */}
//         {isOtpVerified && (
//           <form onSubmit={handlePasswordChange} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
//                 New Password
//               </label>
//               <input
//                 type="password"
//                 id="newPassword"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 placeholder="Enter new password"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Reset Password
//             </button>
//           </form>
//         )}

//         <div className="mt-4 text-center">
//           <a href="/login" className="text-blue-500 hover:underline">
//             Back to Login
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


// import React, { useState } from "react";
// import ApiClient from '../Api/ApiClient'; // API client import

// const ForgotPassword = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   // Send OTP API call
//   const handleOtpSubmit = (e) => {
//     e.preventDefault();
//     if (phoneNumber) {
//       ApiClient.post('/user/auth/forgot-password', { phone: phoneNumber })
//         .then((response) => {
//           console.log("API Response: ", response);
//           setOtpSent(true);
//           setSuccessMessage("OTP sent to your phone number.");
//           setErrorMessage("");
//         })
//         .catch((error) => {
//           console.error("Error sending OTP:", error);
//           setErrorMessage("Failed to send OTP. Please try again.");
//         });
//     } else {
//       setErrorMessage("Please enter a valid phone number.");
//     }
//   };

//   // Verify OTP API call
//   const handleOtpVerification = (e) => {
//     e.preventDefault();
//     if (otp) {
//       ApiClient.patch('/user/auth/verify-forget-otp', { phone: phoneNumber, otp: otp })
//         .then((response) => {
//           console.log("OTP Verified: ", response);
//           setIsOtpVerified(true);
//           setSuccessMessage("OTP verified successfully. You can now reset your password.");
//           setErrorMessage("");
//         })
//         .catch((error) => {
//           console.error("Error verifying OTP:", error);
//           setErrorMessage("Invalid OTP. Please try again.");
//         });
//     } else {
//       setErrorMessage("Please enter OTP.");
//     }
//   };

//   // Reset password API call
//   const handlePasswordChange = (e) => {
//     e.preventDefault();
//     if (newPassword) {
//       ApiClient.patch('/user/auth/change-forget-password', { 
//         phone: phoneNumber, 
//         new_password: newPassword, 
//         retype_new_password: newPassword 
//       })
//         .then((response) => {
//           console.log("Password Reset Response: ", response);
//           setSuccessMessage("Your password has been reset successfully.");
//           setPhoneNumber("");
//           setOtp("");
//           setNewPassword("");
//           setOtpSent(false);
//           setIsOtpVerified(false);
//         })
//         .catch((error) => {
//           console.error("Error resetting password:", error);
//           setErrorMessage("Failed to reset password. Please try again.");
//         });
//     } else {
//       setErrorMessage("Please enter a new password.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           Forgot Password
//         </h2>
//         <p className="mt-2 text-sm text-center text-gray-600">
//           Enter your phone number to receive OTP for password reset.
//         </p>

//         {successMessage && (
//           <div className="mt-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded">
//             {successMessage}
//           </div>
//         )}
//         {errorMessage && (
//           <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded">
//             {errorMessage}
//           </div>
//         )}

//         {/* Phone Number Input */}
//         {!otpSent && (
//           <form onSubmit={handleOtpSubmit} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phoneNumber"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 placeholder="Enter your phone number"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Send OTP
//             </button>
//           </form>
//         )}

//         {/* OTP Input */}
//         {otpSent && !isOtpVerified && (
//           <form onSubmit={handleOtpVerification} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
//                 OTP
//               </label>
//               <input
//                 type="text"
//                 id="otp"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter the OTP"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Verify OTP
//             </button>
//           </form>
//         )}

//         {/* New Password Input */}
//         {isOtpVerified && (
//           <form onSubmit={handlePasswordChange} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
//                 New Password
//               </label>
//               <input
//                 type="password"
//                 id="newPassword"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 placeholder="Enter new password"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Reset Password
//             </button>
//           </form>
//         )}

//         <div className="mt-4 text-center">
//           <a href="/login" className="text-blue-500 hover:underline">
//             Back to Login
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Use useNavigate for navigation in React Router v6
// import ApiClient from '../Api/ApiClient'; // API client import

// const ForgotPassword = () => {
//   const navigate = useNavigate(); // UseNavigate hook for navigation
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [retypeNewPassword, setRetypeNewPassword] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   // Send OTP API call
//   const handleOtpSubmit = (e) => {
//     e.preventDefault();
//     if (phoneNumber) {
//       ApiClient.post('/user/auth/forgot-password', { phone: phoneNumber })
//         .then((response) => {
//           console.log("API Response: ", response);
//           setOtpSent(true);
//           setSuccessMessage("OTP sent to your phone number.");
//           setErrorMessage("");
//         })
//         .catch((error) => {
//           console.error("Error sending OTP:", error);
//           setErrorMessage("Failed to send OTP. Please try again.");
//         });
//     } else {
//       setErrorMessage("Please enter a valid phone number.");
//     }
//   };

//   // Verify OTP API call
//   const handleOtpVerification = (e) => {
//     e.preventDefault();
//     if (otp) {
//       ApiClient.patch('/user/auth/verify-forget-otp', { phone: phoneNumber, otp: otp })
//         .then((response) => {
//           console.log("OTP Verified: ", response);
//           setIsOtpVerified(true);
//           setSuccessMessage("OTP verified successfully. You can now reset your password.");
//           setErrorMessage("");
//         })
//         .catch((error) => {
//           console.error("Error verifying OTP:", error);
//           setErrorMessage("Invalid OTP. Please try again.");
//         });
//     } else {
//       setErrorMessage("Please enter OTP.");
//     }
//   };

//   // Reset password API call
//   const handlePasswordChange = (e) => {
//     e.preventDefault();
//     if (newPassword && newPassword === retypeNewPassword) {
//       ApiClient.patch('/user/auth/change-forget-password', { 
//         phone: phoneNumber, 
//         new_password: newPassword, 
//         retype_new_password: retypeNewPassword 
//       })
//         .then((response) => {
//           console.log("Password Reset Response: ", response);
//           setSuccessMessage("Your password has been reset successfully.");
//           setPhoneNumber("");
//           setOtp("");
//           setNewPassword("");
//           setRetypeNewPassword("");
//           setOtpSent(false);
//           setIsOtpVerified(false);

//           // Redirect to login page after successful reset
//           navigate('/login'); // Use navigate() instead of history.push()
//         })
//         .catch((error) => {
//           console.error("Error resetting password:", error);
//           setErrorMessage("Failed to reset password. Please try again.");
//         });
//     } else {
//       setErrorMessage("Passwords do not match. Please recheck.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           Forgot Password
//         </h2>
//         <p className="mt-2 text-sm text-center text-gray-600">
//           Enter your phone number to receive OTP for password reset.
//         </p>

//         {successMessage && (
//           <div className="mt-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded">
//             {successMessage}
//           </div>
//         )}
//         {errorMessage && (
//           <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded">
//             {errorMessage}
//           </div>
//         )}

//         {/* Phone Number Input */}
//         {!otpSent && (
//           <form onSubmit={handleOtpSubmit} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phoneNumber"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 placeholder="Enter your phone number"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Send OTP
//             </button>
//           </form>
//         )}

//         {/* OTP Input */}
//         {otpSent && !isOtpVerified && (
//           <form onSubmit={handleOtpVerification} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
//                 OTP
//               </label>
//               <input
//                 type="text"
//                 id="otp"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter the OTP"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Verify OTP
//             </button>
//           </form>
//         )}

//         {/* New Password Input */}
//         {isOtpVerified && (
//           <form onSubmit={handlePasswordChange} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
//                 New Password
//               </label>
//               <input
//                 type="password"
//                 id="newPassword"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 placeholder="Enter new password"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="retypeNewPassword" className="block text-sm font-medium text-gray-700">
//                 Retype New Password
//               </label>
//               <input
//                 type="password"
//                 id="retypeNewPassword"
//                 value={retypeNewPassword}
//                 onChange={(e) => setRetypeNewPassword(e.target.value)}
//                 placeholder="Retype new password"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Reset Password
//             </button>
//           </form>
//         )}

//         <div className="mt-4 text-center">
//           <a href="/login" className="text-blue-500 hover:underline">
//             Back to Login
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiClient from '../Api/ApiClient';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import Swal from 'sweetalert2';

// const ForgotPassword = () => {
//   const navigate = useNavigate();
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [retypeNewPassword, setRetypeNewPassword] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const [showPassword, setShowPassword] = useState(false);
//   const [showRetypePassword, setShowRetypePassword] = useState(false);

//   const handleOtpSubmit = (e) => {
//     e.preventDefault();
//     if (phoneNumber) {
//       ApiClient.post('/user/auth/forgot-password', { phone: phoneNumber })
//         .then((response) => {
//           setOtpSent(true);
//           setSuccessMessage("OTP sent to your phone number.");
//           setErrorMessage("");
//           Swal.fire({
//             icon: 'success',
//             title: 'OTP Sent!',
//             text: 'We have sent an OTP to your phone number.',
//           });
//         })
//         .catch((error) => {
//           setErrorMessage("Failed to send OTP. Please try again.");
//           Swal.fire({
//             icon: 'error',
//             title: 'Error!',
//             text: 'Failed to send OTP. Please try again.',
//           });
//         });
//     } else {
//       setErrorMessage("Please enter a valid phone number.");
//     }
//   };

//   const handleOtpVerification = (e) => {
//     e.preventDefault();
//     if (otp) {
//       ApiClient.patch('/user/auth/verify-forget-otp', { phone: phoneNumber, otp: otp })
//         .then((response) => {
//           setIsOtpVerified(true);
//           setSuccessMessage("OTP verified successfully. You can now reset your password.");
//           setErrorMessage("");
//           Swal.fire({
//             icon: 'success',
//             title: 'OTP Verified!',
//             text: 'You can now reset your password.',
//           });
//         })
//         .catch((error) => {
//           setErrorMessage("Invalid OTP. Please try again.");
//           Swal.fire({
//             icon: 'error',
//             title: 'Invalid OTP',
//             text: 'The OTP you entered is invalid. Please try again.',
//           });
//         });
//     } else {
//       setErrorMessage("Please enter OTP.");
//     }
//   };

//   // const handlePasswordChange = (e) => {
//   //   e.preventDefault();
//   //   if (newPassword && newPassword === retypeNewPassword) {
//   //     ApiClient.patch('/user/auth/change-forget-password', { 
//   //       phone: phoneNumber, 
//   //       new_password: newPassword, 
//   //       retype_new_password: retypeNewPassword 
//   //     })
//   //     console.log()

//   //       .then((response) => {
//   //         setSuccessMessage("Your password has been reset successfully.");
//   //         setPhoneNumber("");
//   //         setOtp("");
//   //         setNewPassword("");
//   //         setRetypeNewPassword("");
//   //         setOtpSent(false);
//   //         setIsOtpVerified(false);
//   //         Swal.fire({
//   //           icon: 'success',
//   //           title: 'Password Reset Successful!',
//   //           text: 'Your password has been successfully reset.',
//   //         });
//   //         navigate('/login');
//   //       })
//   //       .catch((error) => {
//   //         setErrorMessage("Failed to reset password. Please try again.");
//   //         Swal.fire({
//   //           icon: 'error',
//   //           title: 'Error!',
//   //           text: 'Failed to reset password. Please try again.',
//   //         });
//   //       });
//   //   } else {
//   //     setErrorMessage("Passwords do not match. Please recheck.");
//   //     Swal.fire({
//   //       icon: 'error',
//   //       title: 'Password Mismatch',
//   //       text: 'The passwords do not match. Please recheck.',
//   //     });
//   //   }
//   // };


//   const handlePasswordChange = (e) => {
//     e.preventDefault();
  
//     // Check if passwords match
//     if (newPassword && newPassword === retypeNewPassword) {
      
//       // Log the data being sent to the API
//       console.log("Sending data:", {
//         phone: phoneNumber,
//         new_password: newPassword,
//         retype_new_password: retypeNewPassword
//       });
  
//       ApiClient.patch('/user/auth/change-forget-password', { 
//         phone: phoneNumber, 
//         new_password: newPassword, 
//         retype_new_password: retypeNewPassword 
//       })
//         .then((response) => {
//           // Log the response from the API
//           console.log("Password reset response:", response);
  
//           setSuccessMessage("Your password has been reset successfully.");
//           setPhoneNumber("");
//           setOtp("");
//           setNewPassword("");
//           setRetypeNewPassword("");
//           setOtpSent(false);
//           setIsOtpVerified(false);
  
//           Swal.fire({
//             icon: 'success',
//             title: 'Password Reset Successful!',
//             text: 'Your password has been successfully reset.',
//           });
//           navigate('/login');
//         })
//         .catch((error) => {
//           // Log the error if API call fails
//           console.error("Password reset error:", error);
          
//           setErrorMessage("Failed to reset password. Please try again.");
//           Swal.fire({
//             icon: 'error',
//             title: 'Error!',
//             text: 'Failed to reset password. Please try again.',
//           });
//         });
//     } else {
//       setErrorMessage("Passwords do not match. Please recheck.");
//       Swal.fire({
//         icon: 'error',
//         title: 'Password Mismatch',
//         text: 'The passwords do not match. Please recheck.',
//       });
//     }
//   };
  
//   const handleResendOtp = () => {
//     if (phoneNumber) {
//       ApiClient.post('/user/auth/forgot-password', { phone: phoneNumber })
//         .then((response) => {
//           setSuccessMessage("OTP has been resent to your phone number.");
//           setErrorMessage("");
//           Swal.fire({
//             icon: 'success',
//             title: 'OTP Resent!',
//             text: 'OTP has been resent to your phone number.',
//           });
//         })
//         .catch((error) => {
//           setErrorMessage("Failed to resend OTP. Please try again.");
//           Swal.fire({
//             icon: 'error',
//             title: 'Error!',
//             text: 'Failed to resend OTP. Please try again.',
//           });
//         });
//     } else {
//       setErrorMessage("Please enter a valid phone number.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800">Forgot Password</h2>
//         <p className="mt-2 text-sm text-center text-gray-600">
//           Enter your phone number to receive OTP for password reset.
//         </p>

//         {successMessage && (
//           <div className="mt-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded">
//             {successMessage}
//           </div>
//         )}
//         {errorMessage && (
//           <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded">
//             {errorMessage}
//           </div>
//         )}

//         {!otpSent && (
//           <form onSubmit={handleOtpSubmit} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phoneNumber"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 placeholder="Enter your phone number"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Send OTP
//             </button>
//             {errorMessage && (
//               <button
//                 type="button"
//                 onClick={handleResendOtp}
//                 className="mt-2 text-sm text-blue-500 hover:bg-blue-100 px-4 py-2 rounded-full border border-blue-500 focus:ring-2 focus:ring-blue-300"
//               >
//                 Resend OTP
//               </button>
//             )}
//           </form>
//         )}

//         {otpSent && !isOtpVerified && (
//           <form onSubmit={handleOtpVerification} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
//                 OTP
//               </label>
//               <input
//                 type="text"
//                 id="otp"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter the OTP"
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Verify OTP
//             </button>
//           </form>
//         )}

//         {isOtpVerified && (
//           <form onSubmit={handlePasswordChange} className="mt-6">
//             <div className="mb-4">
//               <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
//                 New Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="newPassword"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   placeholder="Enter new password"
//                   required
//                   className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//                 <span
//                   className="absolute right-3 top-3 cursor-pointer"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                 </span>
//               </div>
//             </div>

//             <div className="mb-4">
//               <label htmlFor="retypeNewPassword" className="block text-sm font-medium text-gray-700">
//                 Retype New Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showRetypePassword ? "text" : "password"}
//                   id="retypeNewPassword"
//                   value={retypeNewPassword}
//                   onChange={(e) => setRetypeNewPassword(e.target.value)}
//                   placeholder="Retype new password"
//                   required
//                   className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//                 <span
//                   className="absolute right-3 top-3 cursor-pointer"
//                   onClick={() => setShowRetypePassword(!showRetypePassword)}
//                 >
//                   {showRetypePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                 </span>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
//             >
//               Reset Password
//             </button>
//           </form>
//         )}

//         <div className="mt-4 text-center">
//           <a href="/login" className="text-blue-500 hover:underline">
//             Back to Login
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypeNewPassword, setRetypeNewPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  // const handleOtpSubmit = (e) => {
  //   e.preventDefault();
  //   if (phoneNumber) {
  //     ApiClient.post('/user/auth/forgot-password', { phone: phoneNumber })
  //       .then((response) => {
  //         if (response.status === 200 || response.status === 201) {
  //           setOtpSent(true);
  //           // setSuccessMessage("OTP sent to your phone number.");
  //           setErrorMessage("");
  //           Swal.fire({
  //             title: "Success!",
  //             // text: "OTP sent to your phone number!",
  //             icon: "success",
  //             confirmButtonText: "OK",
  //           });
  //         } else {
  //           Swal.fire({
  //             title: "Error!",
  //             text: response.data.message || "Failed to send OTP. Please try again.",
  //             icon: "error",
  //             confirmButtonText: "Try Again",
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         setErrorMessage("Failed to send OTP. Please try again.");
  //         Swal.fire({
  //           title: "Error!",
  //           text: error.response?.data?.message || "Something went wrong!",
  //           icon: "error",
  //           confirmButtonText: "Try Again",
  //         });
  //       });
  //   } else {
  //     setErrorMessage("Please enter a valid phone number.");
  //   }
  // };

  // const handleOtpVerification = (e) => {
  //   e.preventDefault();
  //   if (otp) {
  //     ApiClient.patch('/user/auth/verify-forget-otp', { phone: phoneNumber, otp: otp })
  //       .then((response) => {
  //         if (response.status === 200 || response.status === 201) {
  //           setIsOtpVerified(true);
  //           // setSuccessMessage("OTP verified successfully. You can now reset your password.");
  //           setErrorMessage("");
  //           Swal.fire({
  //             title: "Success!",
  //             // text: "OTP verified successfully. You can now reset your password.",
  //             icon: "success",
  //             confirmButtonText: "OK",
  //           });
  //         } else {
  //           Swal.fire({
  //             title: "Error!",
  //             text: response.data.message || "The OTP you entered is invalid. Please try again.",
  //             icon: "error",
  //             confirmButtonText: "Try Again",
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         setErrorMessage("Invalid OTP. Please try again.");
  //         Swal.fire({
  //           title: "Error!",
  //           text: error.response?.data?.message || "Something went wrong!",
  //           icon: "error",
  //           confirmButtonText: "Try Again",
  //         });
  //       });
  //   } else {
  //     setErrorMessage("Please enter OTP.");
  //   }
  // };

  // const handlePasswordChange = (e) => {
  //   e.preventDefault();
  //   if (newPassword && newPassword === retypeNewPassword) {
  //     ApiClient.patch('/user/auth/change-forget-password', { 
  //       phone: phoneNumber, 
  //       new_password: newPassword, 
  //       retype_new_password: retypeNewPassword 
  //     })
  //       .then((response) => {
  //         if (response.status === 200 || response.status === 201) {
  //           setSuccessMessage("Your password has been reset successfully.");
  //           setPhoneNumber("");
  //           setOtp("");
  //           setNewPassword("");
  //           setRetypeNewPassword("");
  //           setOtpSent(false);
  //           setIsOtpVerified(false);
  //           Swal.fire({
  //             title: "Success!",
  //             text: "Your password has been successfully reset.",
  //             icon: "success",
  //             confirmButtonText: "OK",
  //           });
  //           navigate('/login');
  //         } else {
  //           Swal.fire({
  //             title: "Error!",
  //             text: response.data.message || "Failed to reset password. Please try again.",
  //             icon: "error",
  //             confirmButtonText: "Try Again",
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         setErrorMessage("Failed to reset password. Please try again.");
  //         Swal.fire({
  //           title: "Error!",
  //           text: error.response?.data?.message || "Something went wrong!",
  //           icon: "error",
  //           confirmButtonText: "Try Again",
  //         });
  //       });
  //   } else {
  //     setErrorMessage("Passwords do not match. Please recheck.");
  //     Swal.fire({
  //       title: "Error!",
  //       // text: "The passwords do not match. Please recheck.",
  //       icon: "error",
  //       confirmButtonText: "Try Again",
  //     });
  //   }
  // };

  // const handleResendOtp = () => {
  //   if (phoneNumber) {
  //     ApiClient.post('/user/auth/forgot-password', { phone: phoneNumber })
  //       .then((response) => {
  //         if (response.status === 200 || response.status === 201) {
  //           setSuccessMessage("OTP has been resent to your phone number.");
  //           setErrorMessage("");
  //           Swal.fire({
  //             title: "Success!",
  //             text: "OTP has been resent to your phone number.",
  //             icon: "success",
  //             confirmButtonText: "OK",
  //           });
  //         } else {
  //           Swal.fire({
  //             title: "Error!",
  //             text: response.data.message || "Failed to resend OTP. Please try again.",
  //             icon: "error",
  //             confirmButtonText: "Try Again",
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         setErrorMessage("Failed to resend OTP. Please try again.");
  //         Swal.fire({
  //           title: "Error!",
  //           text: error.response?.data?.message || "Something went wrong!",
  //           icon: "error",
  //           confirmButtonText: "Try Again",
  //         });
  //       });
  //   } else {
  //     setErrorMessage("Please enter a valid phone number.");
  //   }
  // };


  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log("OTP Submit triggered");
    if (phoneNumber) {
      ApiClient.post('/admin/auth/forgot-password', { phone: phoneNumber })
        .then((response) => {
          console.log("OTP submit response:", response);
          if (response.status === 200 || response.status === 201) {
            setOtpSent(true);
            setErrorMessage(""); // Clear any previous error messages
            Swal.fire({
              title: "Success!",
              text: response.data.message || "OTP sent successfully.",
              icon: "success",
              confirmButtonText: "OK",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: response.data.message || "Failed to send OTP. Please try again.",
              icon: "error",
              confirmButtonText: "Try Again",
            });
          }
        })
        .catch((error) => {
          console.error("OTP submit error:", error);
          Swal.fire({
            title: "Error!",
            text: error.response?.data?.message || "Something went wrong!",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        });
    } else {
      console.log("Invalid phone number input");
      setErrorMessage("Please enter a valid phone number.");
    }
  };
  
  const handleOtpVerification = (e) => {
    e.preventDefault();
    console.log("OTP Verification triggered");
    if (otp) {
      ApiClient.patch('/admin/auth/verify-forget-otp', { phone: phoneNumber, otp: otp })
        .then((response) => {
          console.log("OTP verification response:", response);
          if (response.status === 200 || response.status === 201) {
            setIsOtpVerified(true);
            setErrorMessage(""); // Clear any previous error messages
            Swal.fire({
              title: "Success!",
              text: response.data.message || "OTP verified successfully.",
              icon: "success",
              confirmButtonText: "OK",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: response.data.message || "Invalid OTP. Please try again.",
              icon: "error",
              confirmButtonText: "Try Again",
            });
          }
        })
        .catch((error) => {
          console.error("OTP verification error:", error);
          Swal.fire({
            title: "Error!",
            text: error.response?.data?.message || "Something went wrong!",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        });
    } else {
      console.log("OTP input is empty");
      setErrorMessage("Please enter OTP.");
    }
  };
  
  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log("Password change triggered");
    if (newPassword && newPassword === retypeNewPassword) {
      ApiClient.patch('/admin/auth/change-forget-password', { 
        phone: phoneNumber, 
        new_password: newPassword, 
        retype_new_password: retypeNewPassword 
      })
        .then((response) => {
          console.log("Password change response:", response);
          if (response.status === 200 || response.status === 201) {
            setPhoneNumber("");
            setOtp("");
            setNewPassword("");
            setRetypeNewPassword("");
            setOtpSent(false);
            setIsOtpVerified(false);
            Swal.fire({
              title: "Success!",
              text: response.data.message || "Your password has been successfully reset.",
              icon: "success",
              confirmButtonText: "OK",
            });
            navigate('/login');
          } else {
            Swal.fire({
              title: "Error!",
              text: response.data.message || "Failed to reset password. Please try again.",
              icon: "error",
              confirmButtonText: "Try Again",
            });
          }
        })
        .catch((error) => {
          console.error("Password change error:", error);
          Swal.fire({
            title: "Error!",
            text: error.response?.data?.message || "Something went wrong!",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        });
    } else {
      console.log("Passwords do not match");
      Swal.fire({
        title: "Error!",
        text: "Passwords do not match. Please recheck.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };
  
  const handleResendOtp = () => {
    console.log("Resend OTP triggered");
    if (phoneNumber) {
      ApiClient.post('/admin/auth/change-forget-password', { phone: phoneNumber })
        .then((response) => {
          console.log("Resend OTP response:", response);
          if (response.status === 200 || response.status === 201) {
            setErrorMessage(""); // Clear any previous error messages
            Swal.fire({
              title: "Success!",
              text: response.data.message || "OTP has been resent to your phone number.",
              icon: "success",
              confirmButtonText: "OK",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: response.data.message || "Failed to resend OTP. Please try again.",
              icon: "error",
              confirmButtonText: "Try Again",
            });
          }
        })
        .catch((error) => {
          console.error("Resend OTP error:", error);
          Swal.fire({
            title: "Error!",
            text: error.response?.data?.message || "Something went wrong!",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        });
    } else {
      console.log("Invalid phone number input for resend OTP");
      setErrorMessage("Please enter a valid phone number.");
    }
  };

  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Forgot Password</h2>
        <p className="mt-2 text-sm text-center text-gray-600">
          Enter your phone number to receive OTP for password reset.
        </p>

        {successMessage && (
          <div className="mt-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded">
            {errorMessage}
          </div>
        )}

        {!otpSent && (
          <form onSubmit={handleOtpSubmit} className="mt-6">
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
            >
              Send OTP
            </button>
            {errorMessage && (
              <button
                type="button"
                onClick={handleResendOtp}
                className="mt-2 text-sm text-blue-500 hover:bg-blue-100 px-4 py-2 rounded-full border border-blue-500 focus:ring-2 focus:ring-blue-300"
              >
                Resend OTP
              </button>
            )}
          </form>
        )}

        {otpSent && !isOtpVerified && (
          <form onSubmit={handleOtpVerification} className="mt-6">
            <div className="mb-4">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter the OTP"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
            >
              Verify OTP
            </button>
          </form>
        )}

        {isOtpVerified && (
          <form onSubmit={handlePasswordChange} className="mt-6">
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="retypeNewPassword" className="block text-sm font-medium text-gray-700">
                Retype New Password
              </label>
              <div className="relative">
                <input
                  type={showRetypePassword ? "text" : "password"}
                  id="retypeNewPassword"
                  value={retypeNewPassword}
                  onChange={(e) => setRetypeNewPassword(e.target.value)}
                  placeholder="Retype new password"
                  required
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={() => setShowRetypePassword(!showRetypePassword)}
                >
                  {showRetypePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
            >
              Reset Password
            </button>
          </form>
        )}

        <div className="mt-4 text-center">
          <a href="/login" className="text-blue-500 hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};



export default ForgotPassword;


