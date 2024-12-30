import { FirestoreService } from "../services/firestore.service";

const firestoreService = new FirestoreService();
const collection = 'soilmoisture';

export const createSoilData = async (req: any, res: any) => {
  try {
    const data = await firestoreService.createData(collection, req.body);
    res.status(201).json(data);
  }catch (error) {
    res.status(500).json({ error: 'An error occurred while creating soil moisture data' });
  }
};

export const getAllSoilData = async (req: any, res: any) => {
  try {
    const data = await firestoreService.getAllData(collection);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching soil data', error });
  }
};


