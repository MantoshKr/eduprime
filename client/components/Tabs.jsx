import * as Tabs from "@radix-ui/react-tabs";
import CourseCard from "./CourseCard";
import { FaCode } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { GiEagleEmblem } from "react-icons/gi";
import { FaChartBar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

export default () => {
  const tabItems = [
    {
      icon: (
        <FaCode style={{fontSize: "15px"}}/>
      ),
      name: "Web Development",
    },
    {
      icon: (
        <GrCertificate style={{fontSize: "15px"}}/>
      ),
      name: "IT Certification",
    },
    {
      icon: (
        <GiEagleEmblem style={{fontSize: "15px"}} />
      ),
      name: "Leadership",
    },
    {
      icon: (
        <FaChartBar style={{fontSize: "15px"}} />
      ),
      name: "Data Science ",
    },
    {
      icon: (
        <FaUsers style={{fontSize: "15px"}} />
      ),
      name: "Communication",
    },
  ];

  return (
    <Tabs.Root
      className=" mx-auto"
      defaultValue="Overview"
    >
      <Tabs.List
        className="w-full border-b flex items-center gap-x-3 overflow-x-auto text-md"
        aria-label="Manage your account"
      >
        {tabItems.map((item, idx) => (
          <Tabs.Trigger
            key={idx}
            className="group outline-none py-1.5 border-b-2 border-white text-gray-500 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
            value={item.name}
          >
            <div className="flex items-center gap-x-2 py-1.5 px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium">
              {item.icon}
              {item.name}
            </div>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabItems.map((item, idx) => (
        <Tabs.Content key={idx} className="py-6" value={item.name}>
          <div className="text-xs leading-normal">
            This is <b>{item.name}</b> Tab
            <CourseCard />
          </div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
