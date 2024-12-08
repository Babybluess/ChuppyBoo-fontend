"use client";
import { PiGameControllerFill } from "react-icons/pi";
import { MdOutlinePets } from "react-icons/md";
import { IconItem } from "../type/icon.type";
import { GiCardRandom } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

export default function BottomBar({
  activeTab,
  onChangeTab,
}: {
  activeTab: string;
  onChangeTab: (tab: string) => void;
}) {
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
    <div
      className={`fixed bottom-0 left-0 right-0 text-white flex justify-around items-end py-3 shadow-sm ${activeTab == "Home" ? "bg-[#120606]" : "rounded-xl"}`}
    >
      {activeTab !== "Home" && (
        <div className="w-full h-[15vh] relative z-0 border-t-[1px] border-white rounded-3xl">
          <div className="w-full h-full absolute bottom-0 rounded-3xl left-0 bg-[#120606] opacity-70 blur-md"></div>
        </div>
      )}
      <div className="w-full h-full absolute left-0 bottom-0 flex justify-around items-center">
        {menuItem.map((item, index) => (
          <button
            key={index}
            className={`flex flex-col items-center z-10 ${activeTab === item.name ? "text-[#C0D894]" : ""}`}
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
    </div>
  );
}
