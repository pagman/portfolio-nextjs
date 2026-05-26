"use client";

import { cn } from "@/lib/utils";

interface FilterTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function FilterTabs({ tabs, activeTab, onTabChange }: FilterTabsProps) {
  return (
    <div className="flex gap-2 mb-8 md:mb-12 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            activeTab === tab
              ? "bg-white text-black"
              : "text-white/40 border border-white/10 hover:text-white/70 hover:border-white/20"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
