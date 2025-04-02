import React from "react";

interface TabButtonProps {
  active: boolean;
  SelectTab: () => void;
  children: React.ReactNode;
}

const TabButton = ({ active, SelectTab, children }: TabButtonProps) => {
const  buttonClasses = active 
? "text-white border-b border-purple-500"
: "text-[#ADB7BE]";

return (
   <button onClick={SelectTab}>
     <p className={'mr-3 font-semibold hover:text-white ${buttonClasses}'} >
    {children}
    </p>
   </button>
);
};


export default TabButton;



