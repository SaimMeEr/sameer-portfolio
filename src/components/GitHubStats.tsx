import React from 'react';
import { Star, GitCommit, GitPullRequest, AlertCircle, Calendar } from 'lucide-react';

interface GitHubStatsProps {
  username: string;
  stats: {
    stars: number;
    commits: number;
    prs: number;
    issues: number;
    contributions: number;
  };
}

export function GitHubStats({ username, stats }: GitHubStatsProps) {
  return (
    <div className="w-full p-4 sm:p-6 rounded-lg bg-[#151515] text-white shadow-xl">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-pink-500">{username}'s GitHub Stats</h2>
      
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" />
            <span className="text-sm sm:text-base text-gray-300">Total Stars Earned:</span>
          </div>
          <span className="font-mono font-bold text-cyan-400">{stats.stars}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GitCommit className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400" />
            <span className="text-sm sm:text-base text-gray-300">Total Commits (2025):</span>
          </div>
          <span className="font-mono font-bold text-cyan-400">{stats.commits}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GitPullRequest className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400" />
            <span className="text-sm sm:text-base text-gray-300">Total PRs:</span>
          </div>
          <span className="font-mono font-bold text-cyan-400">{stats.prs}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 sm:w-5 h-4 sm:h-5 text-red-400" />
            <span className="text-sm sm:text-base text-gray-300">Total Issues:</span>
          </div>
          <span className="font-mono font-bold text-cyan-400">{stats.issues}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-green-400" />
            <span className="text-sm sm:text-base text-gray-300">Contributed to (last year):</span>
          </div>
          <span className="font-mono font-bold text-cyan-400">{stats.contributions}</span>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 flex justify-end">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center border-4 border-pink-500">
          <span className="text-xl sm:text-2xl font-bold text-cyan-400">C+</span>
        </div>
      </div>
    </div>
  );
}