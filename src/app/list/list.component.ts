import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: any[];

  constructor(private crudService: CrudService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.crudService.readItems('your-collection').subscribe(data => {
      this.items = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as any;
      });
    });
  }

  deleteItem(id: string): void {
    this.crudService.deleteItem('your-collection', id);
  }
}

