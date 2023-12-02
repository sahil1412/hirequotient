import { Component,Input} from '@angular/core';
import { BasicService } from './basic.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hirequotient';
  Searched = false;
  notSearched = true;
  public maxSize:number = 5;
  public data: any;
  public searchedData: any;
  @Input() nameValue: String ="";
  selectedElement : any;
  searchedRecords : any;
  totalRecords: any;
  page: number = 1;
  name: any;

  public selectedList = new Array();  

  public arr = Array();

  constructor(private basic: BasicService,nameValue: String) {  }
  ngOnInit(): void {
    
    this.basic.getBrandList().subscribe((data) => {
      // console.log(data);
      this.data = data;
      this.totalRecords = data.length;
      this.selectedElement = this.selectedList.length;
      this.arr = Array.apply(false,Array(this.totalRecords));
    });  
  }

  check(num: any){
    if(this.arr[num]){
      this.unselect(num);
    }
    else{
      this.select(num);
    }
  }

  select(num : any){
    this.selectedList.push(num);
    this.show(this.data);
    this.arr[num] = true;
  }

  unselect(num : any){
    const updatedSelectList = []
    this.arr[num] = false;
    for(let i=0;i<this.selectedList.length;i++){
      if(num != this.selectedList[i].id){
        updatedSelectList.push(this.selectedList[i].id);
      }
    }
    this.selectedList = updatedSelectList;
    this.show(this.data);
  }

  show(data : any){
      this.data = data;
      this.totalRecords = data.length;
      this.selectedElement = this.selectedList.length;
  }

  deleteSingle(num : any){
    console.log(num);
    const updatedList = [];
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].id != num){
          updatedList.push(this.data[i])
        }
      }
    this.data = updatedList;
    this.show(this.data);
    console.log(this.data)
  }

  deleteMultiple(){
    const updatedList = [];
    for(let i=0;i<this.data.length;i++){
      let selected =  0;
      for(let j=0;j<this.selectedList.length;j++){
        if(this.data[i].id == this.selectedList[j]){
          selected = 1;
          break;
        }
      }
      if(selected == 0){
        updatedList.push(this.data[i]);
      }
    }
    this.data = updatedList;
    this.show(this.data);
    // console.log(this.data);
  }

  search(num1:any) {
    console.log(num1);
    if(num1==""){
      this.searchedData = this.data,
      this.searchedRecords = this.data.length
    }
    else{
      let found = new Array();
      this.data.filter((res:any) => {
      if (res.name == num1) {
        this.Searched = true;
        this.notSearched = false;
        // console.log(res);
        found.push(res);
      }
      else if(res.role == num1){
        this.Searched = true;
        this.notSearched = false;
        // console.log(res);
        found.push(res);
      }
      else if(res.email == num1){
        this.Searched = true;
        this.notSearched = false;
        // console.log(res);
        found.push(res);
      }
    this.searchedData = found,
    this.searchedRecords = found.length
    }
    )}
  }  
  checkNum(num1 : any) {
    this.ngOnInit;
  console.log(num1)
}
}
