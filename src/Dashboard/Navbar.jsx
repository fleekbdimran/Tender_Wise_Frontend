
import { useState, useEffect } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { FaUserCheck } from "react-icons/fa";
import { HiCircleStack } from "react-icons/hi2";
import { FaCodePullRequest } from "react-icons/fa6";
import { TbPackages } from "react-icons/tb";
import { MdSubscriptions } from "react-icons/md";
import { FcBusinessContact } from "react-icons/fc";
import { IoSettings } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";



const Navbar = ({ onLogout }) => {
  const [stateOpenKeys, setStateOpenKeys] = useState([]);
    const [adminType, setAdminType] = useState(
      localStorage.getItem('userType')
    );

    // Update adminType dynamically when localStorage changes
    useEffect(() => {
      const handleStorageChange = () => {
        setAdminType(localStorage.getItem('userType'));
      };

      window.addEventListener('storage', handleStorageChange);
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);

  const items = [
    {
      key: '1',
      icon: <MdSpaceDashboard />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },

    ...(adminType === 'super-admin'
      ? [
          {
            key: '2',
            icon: <FaUserCheck />,
            label: 'Users',
            children: [
              { key: '2-1', label: <Link to="/create-user">Create User</Link> },
              { key: '2-2', label: <Link to="/user-list">User List</Link> },
            ],
          },
        ]
      : []), 
    {
      key: '3',
      icon: <HiCircleStack />,
      label: 'Stack-Holder',
      children: [
        { key: '3-1', label: <Link to="/all-users">All Users</Link> },
        { key: '3-2', label: <Link to="/active-user">Active User</Link> },
        { key: '3-3', label: <Link to="/inactive-user">In-Active User</Link> },
      ],
    },
    {
      key: '4',
      icon: <AiFillEdit />,
      label: 'Tender',
      children: [
        {
          key: '4-2',
          label: <Link to="/createtenderForm">Create Tender</Link>,
        },
        { key: '4-1', label: <Link to="/tenderList">Tender List</Link> },

        { key: '4-3', label: <Link to="/activetender">Live Tender</Link> },
        {
          key: '4-4',
          label: <Link to="/publishedtender">Published Tender</Link>,
        },
        {
          key: '4-5-1',
          label: <Link to="/pendingtender">Pending Tender</Link>,
        },
        {
          key: '4-5',
          label: 'Tender Dropdown',
          children: [
            { key: '4-6', label: <Link to="/category">Category</Link> },
            { key: '4-7', label: <Link to="/sector">Sector</Link> },
            { key: '4-8', label: <Link to="/subSector">Sub Sector</Link> },
            { key: '4-9', label: <Link to="/department">Department</Link> },
            {
              key: '4-19',
              label: <Link to="/subdepartment">Sub Department</Link>,
            },
            { key: '4-10', label: <Link to="/division">Division</Link> },
            { key: '4-11', label: <Link to="/district">District</Link> },
            { key: '4-12', label: <Link to="/upazila">Upazila</Link> },
            { key: '4-13', label: <Link to="/source">Source</Link> },
          ],
        },
      ],
    },
    {
      key: '15',
      icon: <FaCodePullRequest />,
      label: 'Tender Request',
      children: [
        {
          key: '15-1',
          label: <Link to="/allpublishedtender">All Tender Request</Link>,
        },
        {
          key: '15-2',
          label: <Link to="/pendingpublishtender">Pending Tender Request</Link>,
        },
        {
          key: '15-3',
          label: (
            <Link to="/publishtenderrequest">Published Tender Request</Link>
          ),
        },
      ],
    },
    {
      key: '8',
      icon: <TbPackages />,
      label: 'Packages',
      children: [
        { key: '8-1', label: <Link to="/createpackage">Create Package</Link> },
        { key: '8-2', label: <Link to="/allpackagelist">All Packages</Link> },
        { key: '8-3', label: <Link to="/activepackage">Active Packages</Link> },
      ],
    },
    {
      key: '19',
      icon: <MdSubscriptions />,
      label: 'Subscription',
      children: [
        { key: '11-1', label: <Link to="/allsubscriberlist">All Subscriber List</Link> },
        // { key: '11-2', label: <Link to="/subscriberdetails">Subscriber Details</Link> },
       
      ],
    },
    {
      key: '10',
      icon: <FcBusinessContact />,
      label: 'Contact Us',
      children: [
        { key: '10-1', label: <Link to="/allcontactlist">Contact List</Link> },
        // { key: "10-2", label: <Link to="/contactusdetails">Contact Us Details</Link> }
      ],
    },
    {
      key: '9',
      icon: <IoSettings />,
      label: 'Settings',
      children: [
        {
          key: '9-1',
          label: <Link to="/company-info-update">Update Company Info</Link>,
        },
      ],
    },
  ];

  // Utility to create a key-to-level map for submenu control
  const getLevelKeys = items => {
    const keyMap = {};
    const assignLevels = (items, level = 1) => {
      items.forEach(item => {
        if (item.key) keyMap[item.key] = level;
        if (item.children) assignLevels(item.children, level + 1);
      });
    };
    assignLevels(items);
    return keyMap;
  };

  const levelKeys = getLevelKeys(items);

  // Manage open keys to control submenu visibility
  const onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => !stateOpenKeys.includes(key));
    if (latestOpenKey && levelKeys[latestOpenKey] === 1) {
      setStateOpenKeys([latestOpenKey]);
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  // Logout confirmation using SweetAlert
  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of the application.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Logout',
      cancelButtonText: 'Cancel',
      customClass: {
        popup: 'w-72 h-auto p-3',
        title: 'text-lg',
        content: 'text-xs',
        confirmButton: 'bg-blue-500 text-white px-4 py-1 text-sm rounded-md',
        cancelButton: 'bg-red-500 px-4 py-1 text-sm rounded-md',
      },
    }).then(result => {
      if (result.isConfirmed) {
        onLogout();
        localStorage.removeItem('token');
      }
    });
  };

  return (
    <>
    
         <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '256px',
          position: 'fixed',
          marginTop:'98px',
          top: '0',
          left: '0',
          bottom: '0',
          backgroundColor: '#fff',
          boxShadow: '2px 0px 10px rgba(0,0,0,0.1)',
          overflowY: 'auto',
        }}
      >
        

        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          style={{ width: '256px' }}
          items={items}
        />

        {/* Logout Button */}
        <div
          style={{
            padding: '10px',
            textAlign: 'center',
            borderTop: '1px solid #f0f0f0',
          }}
        >
          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              color: '#ff4d4f',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
            }}
          >
            <LogoutOutlined /> Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ marginLeft: '256px', flex: '1', padding: '20px' }}>
        {/* Add main content here */}
      </div>
    </div>
    </>

  );
  

  
  
};


Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;


