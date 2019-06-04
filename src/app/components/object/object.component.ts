import { Component, OnInit } from '@angular/core';
import { ObjectService } from '../../object.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { NewObject } from '../../models/object';


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
    this.resetForm();
    this._objectService.getObjects().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return  {
          id:item.payload.doc.id,
          obj:item.payload.doc.data()
        }
      })
    });
  }

  resetForm(form ? : NgForm) {
    if(form != null) {
    form.resetForm();
      this._objectService.formData = {
        id: null,
        title: '',
        description: '',
      }
    }
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

  editObject(object) {
    let newObj: NewObject = {
      id: object.id,
      title: object.obj.title,
      description: object.obj.description
    }
    this._objectService.formData = Object.assign({}, newObj);
  }

  deleteObject(id) {
    this._objectService.deleteObject(id);
  }
}

