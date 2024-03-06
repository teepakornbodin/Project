import Pet from '../../../../models/pet';
import { connectToDB } from '../../../../utils/database';

export const getPets = async (req, res) => {
  await connectToDB();

  try {
    const cats = await Pet.find({});
    res.status(200).json({ cats });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching cats' });
  }
};

export const handler = async (req, res) => {
  if (req.method === 'GET') {
    return getPets(req, res);
  } else {
    // Handle other HTTP methods if needed
    res.status(405).json({ error: 'Method not allowed' });
  }
};