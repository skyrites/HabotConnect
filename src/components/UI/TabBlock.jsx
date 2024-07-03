import { useState } from 'react';

const tabsData = [
    {
        id: 'p1',
        label: 'Buyer',
        content: `<ul>
        <li>Post your requirements.</li>
        <li>Sit back for multiple suppliers to contact you.</li>
        <li>Choose among the suppliers based on the ratings and reviews.</li>
        </ul>`,
    },
    {
        id: 'p2',
        label: 'Supplier',
        content: `<ul>
        <li>Supplier Post your requirements.</li>
        <li>Sit back for multiple suppliers to contact you.</li>
        <li>Choose among the suppliers based on the ratings and reviews.</li>
        </ul>`,
    },
];

export default function TabBlock() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    return (
        <div className="custome-tab-block">
            <div className="flex justify-evenly">
                {tabsData.map((tab, id) => {
                    return (
                        <button
                            key={tab.id}
                            className={`text-3xl font-bold text-white py-2.5 w-1/2
                                 border-b-4 transition-colors duration-300 ${id === activeTabIndex ? 'border-secondary text-secondary' : 'border-transparent hover:border-gray-200'}`}
                            onClick={() => setActiveTabIndex(id)}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>
            <div className="pt-9 text-white">
                <div className="tabs-content" dangerouslySetInnerHTML={{ __html: tabsData[activeTabIndex].content }}></div>
            </div>
        </div>
    );
}
