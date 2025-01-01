import { firestore } from "../configs/firebase.config";
import { Timestamp } from 'firebase-admin/firestore';  // Mengimpor Timestamp dari firebase-admin

export class FirestoreService {
    
    async createData(collectionName: string, data: Record<string, any>) {
        const docRef = firestore.collection(collectionName).doc(); 
        await docRef.set({
            ...data,
            time: Timestamp.now(), 
        });

        await docRef.set({ id: docRef.id }, { merge: true });

        return { id: docRef.id, ...data };
    };

    async getAllData(collectionName: string) {
        const snap = await firestore.collection(collectionName).get();
        return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    };

}
