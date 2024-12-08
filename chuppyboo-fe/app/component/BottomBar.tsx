"use client";
import { PiGameControllerFill } from "react-icons/pi";
import { MdOutlinePets } from "react-icons/md";
import { IconItem } from "../type/icon.type";
import { GiCardRandom } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

export default function BottomBar({activeTab, onChangeTab}: {activeTab: string, onChangeTab: (tab: string) => void}) {
  const menuItem: IconItem[] = [
    {
      name: "Game",
      icon: (
        <PiGameControllerFill
          className={`${activeTab === "Game" ? "text-[#C0D894]" : ""} w-6 h-6`}
        />
      ),
    },
    {
      name: "Boo",
      icon: (
        <MdOutlinePets
          className={`${activeTab === "Boo" ? "text-[#C0D894]" : ""} w-6 h-6`}
        />
      ),
    },
    {
      name: "Home",
      icon: "./icons/chuppyboo-logo.png",
    },
    {
      name: "Battle",
      icon: (
        <GiCardRandom
          className={`${activeTab === "Battle" ? "text-[#C0D894]" : ""} w-6 h-6`}
        />
      ),
    },
    {
      name: "Profile",
      icon: (
        <CgProfile
          className={`${activeTab === "Profile" ? "text-[#C0D894]" : ""} w-6 h-6`}
        />
      ),
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#120606] text-white flex justify-around items-end py-3 shadow-md">
      {menuItem.map((item, index) => (
        <button
          key={index}
          className={`flex flex-col items-center ${activeTab === item.name ? "text-[#C0D894]" : ""}`}
          onClick={() => onChangeTab(item.name)}
        >
          {typeof item.icon == "string" ? (
            <img
              src={item.icon}
              alt="icon"
              className="w-14 h-14 object-contain"
            />
          ) : (
            <>
              {item.icon}
              <span className="">{item.name}</span>
            </>
          )}
        </button>
      ))}
    </div>
  );
}
