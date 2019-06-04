import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NewObject } from './models/object';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {
  formData : NewObject;
  constructor(private firestore: AngularFirestore, private toastr: ToastrService) {}

  getObjects() {

    return this.firestore.collection('object').snapshotChanges();  
  }

  addObject(item: NewObject) {
    if(item) {
      
      this.toastr.success('Data sent successfully!', 'Object added');
      return this.firestore.collection("object").add(item).then(function() {
        console.log("Document successfully added!");
      }).catch(function(error) {
        console.error("Error adding document: ", error);
      });      
    }

  }

  deleteObject(id) {
    this.firestore.doc('object/'+id).delete().then(function() {
        console.log("Document deleted!");
      }).catch(function(error) {
        console.error("Error deleting document: ", error);
      }); ;

  }
}
