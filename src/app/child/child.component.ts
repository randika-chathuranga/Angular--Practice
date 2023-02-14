import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  //getting data from parent
  @Input() nameData: any;

  //when there are more input coming from parent | use object
  @Input() objData: any;


  //creating array to get data to table(view child understanding)
  listArray = [
    {"name": "Aravinda", "address": "kurunegala"},
    {"name": "Randika", "address": "Galle"}
  ]

  //value passing from parent..get as object and pass it to current array 
  updateList(obj: any){
    this.listArray.push(obj);
    return obj.name + "is added";
  }




  //to send data from child
  @Output() dataUpdateEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
