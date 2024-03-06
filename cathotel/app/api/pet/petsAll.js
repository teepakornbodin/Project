
import { connectToDB } from '../../../utils/database';
import Pet from '../../../models/Pet';

export default async (req, res) => {
  try {
    await connectToDB();
    const pets = await Pet.find({});

    res.status(200).json({ status: 'success', data: pets });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
