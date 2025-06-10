import React from 'react';

interface Language {
  name: string;
  percentage: number;
  color: string;
}

interface LanguageStatsProps {
  languages: Language[];
}

export function LanguageStats({ languages }: LanguageStatsProps) {
  return (
    <div className="w-full p-4 sm:p-6 rounded-lg bg-[#151515] text-white shadow-xl">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-pink-500">Most Used Languages</h2>
      <div className="space-y-4">
        {languages.map((lang) => (
          <div key={lang.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-gray-300">{lang.name}</span>
              <span className="text-sm sm:text-base text-gray-300">{lang.percentage.toFixed(2)}%</span>
            </div>
            <div className="w-full h-2 sm:h-2.5 bg-[#1a1a1a] rounded-full">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${lang.percentage}%`,
                  backgroundColor: lang.color
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}