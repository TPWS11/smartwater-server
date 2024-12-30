import { Server } from "ws";
import { FirestoreService } from "./firestore.service";
import { firestore } from "../configs/firebase.config";

export class WebSocketService {
    private firestoreService = new FirestoreService();
    setup(server: any) {
        const wss = new Server({ server });

        console.log('WebSocket server is listening on ws://localhost:2001');

        wss.on('connection', (ws) => {
            console.log('Client connected');

            this.watchCollection(ws, 'soilmoisture', 'soil');
            this.watchCollection(ws, 'waterflow', 'waterflow');

            ws.on('close', () => {
                console.log('Client disconnected');
            });
        });
    }

    private async watchCollection(ws: any, collection: string, type: string) {
        firestore.collection(collection).onSnapshot(async (snap) => {
            const allData = await this.firestoreService.getAllData(collection);
            console.log(`Sending data for ${collection} collection`);
            ws.send(
                JSON.stringify({
                    type,
                    data: allData,
                })
            );

        });
    }

}
