import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NewObject } from './models/object';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {
  constructor(private firestore: AngularFirestore, private toastr: ToastrService) {}

  getObjects() {
    return this.firestore.collection('object').snapshotChanges();  
  }

  addObject(item: NewObject) {
    if(item) {
      this.toastr.success('Hello world!', 'Toastr fun!');
      return this.firestore.collection("object").add(item).then(function() {
        console.log("Document successfully added!");
      }).catch(function(error) {
        console.error("Error adding document: ", error);
      });      
    }

  }

  deleteObject(id) {
    console.log(id);

  }
}
