import { Router } from 'express';
import { createSoilData, getAllSoilData, } from '../controllers/soil.moisture.controller';
import { createWaterData, getAllWaterData,  } from '../controllers/water.flow.controller';

const route = Router();

route.post('/soil/create', createSoilData);
route.get('/soil/get', getAllSoilData);

route.post('/water/create', createWaterData);
route.get('/water/get', getAllWaterData);

export default route;
