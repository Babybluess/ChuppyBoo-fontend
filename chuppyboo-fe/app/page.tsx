"use client";
import BottomBar from "./component/BottomBar";
import { useMemo, useState } from "react";
import GameScreen from "./Game/page";
import BooScreen from "./Boo/page";
import BattleScreen from "./Battle/page";
import ProfileScreen from "./Profile/page";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");
  const content = useMemo(() => {
    switch (activeTab) {
      case "Home":
        return <span className="w-full h-full">Home</span>;
      case "Game":
        return <GameScreen />;
      case "Boo":
        return <BooScreen />;
      case "Battle":
        return <BattleScreen />;
      case "Profile":
        return <ProfileScreen />;
      default:
        return <span>Home</span>;
    }
  }, [activeTab]);

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="bg-[#674a46] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full h-full">{content}</div>
      <BottomBar activeTab={activeTab} onChangeTab={handleChangeTab} />
    </div>
  );
}
