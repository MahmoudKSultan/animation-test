import { useState } from 'react';
import React from 'react';
import { useTranslations } from "next-intl";

const Taps = () => {
    const [selectedTab, setSelectedTab] = useState(1);

const t = useTranslations('tages');
const tabs = [
  { id: 1, title: t('tagesName'), content:t('tagescontent') },
  { id: 2, title: t('tagesName2'), content: '' },
];
    return (
<div className="w-full">
  <div className="border-b-2 border-primary">
    <nav className="-mb-px flex" aria-label="Tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${
            selectedTab === tab.id
              ? 'border-primary text-white bg-primary rounded-t-sm p-[1px]'
              : 'border-transparent  ttext-[#238023] hover:text-[#238023] hover:border-[#238023] hover:bg-[#E8E8E8]'
          } whitespace-nowrap py-2 px-3 border-b-2 font-medium text-md`}
          onClick={() => setSelectedTab(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </nav>
  </div>
  <div>
    {tabs.map((tab) => (
      <div
        key={tab.id}
        className={`${
          selectedTab === tab.id ? 'block' : 'hidden'
        } px-4 py-5 sm:p-6 bg-[#F4F7FA] text-[var(--primary)]`}
      >
        {tab.content}
      </div>
    ))}
  </div>
</div>
);
};

export default Taps;