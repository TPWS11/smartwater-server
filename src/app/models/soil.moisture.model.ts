import {Timestamp} from 'firebase-admin/firestore';

export interface SoilModel {
    id: string;
    moistureLevel: number;
    time: Date;
};
