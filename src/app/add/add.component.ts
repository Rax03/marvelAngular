import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  name: string = '';

  constructor(private crudService: CrudService) {}

  createItem(): void {
    const data = { name: this.name };
    this.crudService.createItem('your-collection', data).then(() => {
      this.name = "";
    });
  }
}



