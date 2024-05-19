import React, { useState, useEffect } from 'react';
import MilestoneCard from './../components/MilestoneCard'; // Adjust the path as necessary

interface Milestone {
  _id: string;
  title: string;
  description: string;
  amount: number;
  createdAt: string;
}

const FinancialOverview: React.FC = () => {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0); // Initially zero raised
  const [totalNeeded, setTotalNeeded] = useState<number>(0); // Total needed is calculated from milestones

  useEffect(() => {
    fetch('/api/milestones')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setMilestones(data);
        const total = data.reduce((acc: number, curr: Milestone) => acc + curr.amount, 0);
        setTotalNeeded(total); // Set totalNeeded as the sum of all milestone amounts
      })
      .catch(error => console.error('Error fetching milestones:', error));
  }, []);

  const progressPercentage = Math.min((totalAmount / totalNeeded) * 100, 100); // Ensure it does not exceed 100%

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold text-center my-4">Financial Milestones Overview</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4">
          <div className="card bg-white shadow-lg rounded-lg p-4 text-center mb-4 md:mb-0 md:mr-4">
            <h3 className="text-lg font-semibold">Total Amount Raised</h3>
            <p className="text-xl font-bold">${totalAmount} / ${totalNeeded}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {milestones.map(milestone => (
              <MilestoneCard key={milestone._id} milestone={milestone} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;