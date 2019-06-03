import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {
  constructor(private firestore: AngularFirestore) { }
  getObjects() {
    return this.firestore.collection('object').snapshotChanges();  
  }

  deleteObject() {
    return this.firestore.collection("object").doc("DC").delete().then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
  }
}
