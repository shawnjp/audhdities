import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase('dev');
      const milestones = await db.collection('milestones').find({}).toArray();
      res.status(200).json(milestones);
    } catch (error) {
      console.error('Failed to fetch data:', error);  // Log the error for internal review
      res.status(500).json({ message: 'Failed to fetch data. Please try again later.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}