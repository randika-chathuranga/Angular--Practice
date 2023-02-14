import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(ChildComponent) viewdata!: ChildComponent;

  inputName: any = '';

  //declare an object to get the data to transfer app-child.
  inputObj = {
    "name": "",
    "address": ""
  }
 
  //declare a variable to get response
  response: any;

  title: any = "Parent Component"

  //transfer data from parent to child
  transferData(name:any, address: any){
    this.inputName = name;

    this.inputObj = {
      "name": name,
      "address": address
    }
    //can access all methods in child using "viewdata"
    this.response = this.viewdata.updateList(this.inputObj);
  }


  //transfer data from child to parent
  updateTitle(title:any){
    this.title = title
  }
}
