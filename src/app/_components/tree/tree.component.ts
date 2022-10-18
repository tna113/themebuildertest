import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //button
  public click() {
    alert('clicked');
  }


  //treeview
  public expandedKeys: any[] = ['1', '1'];

  public data: any[] = [
    {
      text: 'furniture',
      items: [
        {
          text: 'tables'
        },
        {
          text: 'chairs'
        },
        {
          text: 'sofas'
        }
      ]
    },
    {
      text: 'decor',
      items: [
        {
          text:'lamps'
        },
        {
          text: 'carpets'
        }
      ]
    }
  ]


  
  //dialog
  public opened = false;

  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }
}
