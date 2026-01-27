"use client";

import { cn } from "@/lib/utils";

interface FilterTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function FilterTabs({ tabs, activeTab, onTabChange }: FilterTabsProps) {
  return (
    <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300",
            activeTab === tab
              ? "gradient-bg text-white"
              : "bg-transparent text-white border-2 border-white/20 hover:border-primary/50"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
