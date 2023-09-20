import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";




const MainMenu = (props) => {
  const { children, items } = props;
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="">
      <div className="">
        <button
          className="flex items-center justify-between w-full p-2 text-gray-600 duration-150 rounded-lg hover:bg-gray-50 active:bg-gray-100 "
          onClick={() => setIsOpened(!isOpened)}
        >
          <div className="flex items-center gap-x-2">{children}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-5 h-5 duration-150 ${isOpened ? "rotate-180" : ""}`}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpened ? (
          <ul className="px-2 mx-4 text-sm font-medium border-l bg-sky-800">
            {items.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="flex items-center p-2 text-white duration-150 rounded-lg gap-x-2 hover:bg-text-gray-600 active:bg-gray-100"
                >
                  {item.icon ? (
                    <div className="text-white">{item.icon}</div>
                  ) : (
                    ""
                  )}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};



MainMenu.propTypes = {
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.string),
  // Other prop validations
};

const Dashboard1 = () => {
  const { collapseSidebar } = useProSidebar();

  const nestedNav = [
    { name: "Cards", href: "dummuy", icon: "" },
    { name: "Chekouts", href: "dummuy", icon: "" },
    { name: "Payments", href: "dummuy", icon: "" },
    { name: "Get paid", href: "dummuy", icon: "" },
  ];

  return (
    <>
       <nav className="fixed top-0 left-0 w-66 h-screen space-y-8 border-r shadow-2xl bg-primary">
        <div className="flex flex-col h-screen px-4 bg-primary xl:mt-32 lg:mt-20 ">
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>
       
          <div className="overflow-auto">
            <ul className="flex-1 text-sm font-medium">
            <Link to="/VendorRegsitration"><MenuItem icon={<HomeOutlinedIcon />}>Vendor Registration</MenuItem></Link>
            <Link to="/staffregister"><MenuItem icon={<PeopleOutlinedIcon />}>Staff Register</MenuItem></Link>
            <Link to="/shiftroster"><MenuItem icon={<ContactsOutlinedIcon />}>Shift Roster</MenuItem></Link>
            <Link to="staffallocation"><MenuItem icon={<ReceiptOutlinedIcon />}>Staff Allocation</MenuItem></Link>
            <Link to="staffallocationupdate"><MenuItem icon={<HelpOutlineOutlinedIcon />}>Staff Allocation Update</MenuItem></Link>
            <Link to="staffnurseallocation"><MenuItem icon={<CalendarTodayOutlinedIcon />}>Staff Nurse Allocation</MenuItem></Link>
            <Link to="staffnurseroster"><MenuItem icon={<CalendarTodayOutlinedIcon />}>Ataff Nurse Roster</MenuItem></Link>

           <MenuItem icon={<ReceiptOutlinedIcon />}> 
           <MainMenu items={nestedNav}>
                  Billing
                </MainMenu></MenuItem>
          
            </ul>
            <div className="pt-2 mt-2 border-t">
              <ul className="text-sm font-medium">
              <Link to="dummuy"><MenuItem icon={<HomeOutlinedIcon />}>Help</MenuItem></Link>
              <Link to="dummuy"><MenuItem icon={<PeopleOutlinedIcon />}>Settings</MenuItem></Link>
              </ul>
            </div>
          </div>

        </Menu>
      </Sidebar>
    </div>
          </nav>
    </>
  );
};

export default Dashboard1;