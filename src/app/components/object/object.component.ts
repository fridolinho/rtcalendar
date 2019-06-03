import { Component, OnInit } from '@angular/core';
import { ObjectService } from '../../object.service';
import { Observable } from 'rxjs';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})

export class ObjectComponent implements OnInit {

  list;
 constructor(
   private _objectService: ObjectService
 ) { }
   ngOnInit() {
    this._objectService.getObjects().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return item.payload.doc.data();
      })
    });
  }

  addObject() {
    this._objectService.deleteObject();
  }

  deleteObject() {
    this._objectService.deleteObject();
  }
}

