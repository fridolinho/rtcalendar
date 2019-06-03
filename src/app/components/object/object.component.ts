import { Component, OnInit } from '@angular/core';
import { ObjectService } from '../../object.service';
import { Observable } from 'rxjs';


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

  addObject(data) {
    let obj;
    obj = {
      id: this.list.length + 1,
      title: data.value.title,
      description: data.value.description,
    }

    this._objectService.addObject(obj);
  }
}

