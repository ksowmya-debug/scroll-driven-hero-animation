import React from 'react';

const Stats = () => {
  const statItems = [
    { value: '95%', label: 'Performance' },
    { value: '87%', label: 'Quality' },
    { value: '92%', label: 'Growth' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full">
      {statItems.map((stat, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md transition-colors hover:bg-white/[0.06]"
        >
          <span className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {stat.value}
          </span>
          <span className="text-sm md:text-base text-gray-400 mt-2 tracking-widest uppercase">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
