import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private firestore: AngularFirestore) {}

  createItem(collection: string, data: any): Promise<any> {
    return this.firestore.collection(collection).add(data);
  }

  readItems(collection: string): Observable<any[]> {
    return this.firestore.collection(collection).snapshotChanges();
  }

  updateItem(collection: string, id: string, data: any): Promise<void> {
    return this.firestore.collection(collection).doc(id).update(data);
  }

  deleteItem(collection: string, id: string): Promise<void> {
    return this.firestore.collection(collection).doc(id).delete();
  }
}
