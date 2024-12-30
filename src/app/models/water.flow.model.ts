import { Timestamp } from "firebase-admin/firestore";

export interface WaterModel {
    id: string;
    flowRate: number;
    time: Date;
};

