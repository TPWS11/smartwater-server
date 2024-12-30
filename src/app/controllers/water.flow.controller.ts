import { FirestoreService } from "../services/firestore.service";

const firestoreService = new FirestoreService();
const collection = 'waterflow';

export const createWaterData = async (req: any, res: any) => {
  try {
    const data = await firestoreService.createData(collection, req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating soil moisture data' });
  }
};

export const getAllWaterData = async (req: any, res: any) => {
  try {
    const data = await firestoreService.getAllData(collection);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching water data', error });
  }
};


