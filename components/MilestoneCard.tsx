import React from 'react';

interface Milestone {
  _id: string;
  title: string;
  description: string;
  amount: number;
  createdAt: string;
}

interface MilestoneCardProps {
  milestone: Milestone;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({ milestone }) => {
  return (
    <div className="card bg-white hover:bg-gray-50 transition duration-300 ease-in-out shadow-lg hover:shadow-x3 rounded-lg overflow-hidden border border-gray-200">
      <h3 className="text-lg font-semibold p-4 block text-center">{milestone.title}</h3>
      <p className="px-4 pb-4 block text-center">{milestone.description}</p>
      <p className="block text-center text-blue-500 hover:underline p-4">Amount: ${milestone.amount}</p>
    </div>
  );
};

export default MilestoneCard;