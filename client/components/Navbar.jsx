import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { MdOutlineDesktopMac } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { IoFitness } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const dropdownNavs = [
  {
    label: "Tech & Development",
    navs: [
      {
        title: "Development",
        desc: "Building software, coding, programming languages",
        path: "#",
        icon: <FaCode style={{ fontSize: "30px" }} />,
      },
      {
        title: "IT & Softwares",
        desc: "Technology, software solutions, digital innovation",
        path: "#",
        icon: <MdOutlineDesktopMac style={{ fontSize: "22px" }} />,
      },
    ],
  },
  {
    label: "Professional Growth",
    navs: [
      {
        title: "Buisness",
        desc: "Commerce, finance, corporate activities",
        path: "#",
        icon: <FaBriefcase style={{ fontSize: "25px" }} />,
      },
      {
        title: "Personal Development",
        desc: "Self-improvement, growth, lifelong learning",
        path: "#",
        icon: <FaBrain style={{ fontSize: "25px" }} />,
      },
    ],
  },
  {
    label: "Wellness & Leisure",
    navs: [
      {
        title: "Health & Fitness",
        desc: "Wellness, exercise, healthy living",
        path: "#",
        icon: <IoFitness style={{ fontSize: "30px" }} />,
      },

      {
        title: "Music",
        desc: "Melodies, rhythms, audio compositions, performances",
        path: "#",
        icon: <FaMusic style={{ fontSize: "22px" }} />,
      },
    ],
  },
];

export default () => {
  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState({
    isActive: false,
    idx: null,
  });

  const navigation = [
    {
      title: "Categories",
      path: "#",
      isDrapdown: true,
      navs: dropdownNavs,
    },
    { title: "Pricing", path: "/pricingPage", isDrapdown: false },
    { title: "Buisness", path: "#", isDrapdown: false },
    { title: "Teaching", path: "#", isDrapdown: false },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".nav-menu"))
        setDrapdownState({ isActive: false, idx: null });
    };
  }, []);

  return (
    <>
      <nav
        className={`relative z-40 bg-white w-full md:static md:text-sm md:border-none ${
          state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
        }`}
      >
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <img
                src="/images/eduprime2.gif"
                width={200}
                height={70}
                alt="logo"
              />
            </a>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <IoMdClose style={{ fontSize: 26 }} />
                ) : (
                  <HiMenuAlt3 style={{ fontSize: 26 }} />
                )}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0 ">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    {item.isDrapdown ? (
                      <button
                        className="w-full flex items-center justify-between gap-1 text-gray-700 hover:text-indigo-600"
                        onClick={() =>
                          setDrapdownState({
                            idx,
                            isActive: !drapdownState.isActive,
                          })
                        }
                      >
                        {item.title}
                        {drapdownState.idx == idx && drapdownState.isActive ? (
                          <MdKeyboardArrowUp
                            style={{ fontSize: 22, marginTop: "1px" }}
                          />
                        ) : (
                          <MdKeyboardArrowDown
                            style={{ fontSize: 22, marginTop: "1px" }}
                          />
                        )}
                      </button>
                    ) : (
                      <a
                        href={item.path}
                        className="block text-gray-700 hover:text-indigo-600"
                      >
                        {item.title}
                      </a>
                    )}
                    {item.isDrapdown &&
                    drapdownState.idx == idx &&
                    drapdownState.isActive ? (
                      <div className="mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0">
                        <ul
                          className="max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3 z-50 lg:top-32 md:top-56 w-full md:absolute bg-white"
                          style={
                            window.innerWidth >= 768
                              ? {
                                  left: 0,
                                  right: 0,
                                  transform: "translateY(-50%)",
                                }
                              : {}
                          }
                        >
                          {item?.navs.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <p className="text-indigo-600 text-sm">
                                {dropdownItem.label}
                              </p>
                              <ul className="mt-5 space-y-6">
                                {dropdownItem.navs.map((navItem, idx) => (
                                  <li key={idx} className="group">
                                    <a
                                      href={navItem.path}
                                      className="flex gap-3 items-center"
                                    >
                                      <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14">
                                        {navItem.icon}
                                      </div>
                                      <div>
                                        <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                                          {navItem.title}
                                        </span>
                                        <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1">
                                          {navItem.desc}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <li>
                  <a
                    href="/login"
                    className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                  >
                    Log in
                  </a>
                </li>
                <li>
                  <a
                    href="/register"
                    className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                  >
                    Sign Up
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
};
