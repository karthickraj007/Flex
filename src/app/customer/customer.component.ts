import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CloudService } from '../cloud.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements  OnInit, AfterViewInit {

public customerdata:any[]=[]

public len:any
public len1:any
public len2:number = 0

public arr:boolean= false

public newcustomerdata:any

public search:any;

public p:number = 1

constructor(public svc:CloudService){
  this.customerdata = this.svc.data
}

ngAfterViewInit(): void {
  this.len =  this.svc.length()
  console.log(this.len)
}


  ngOnInit(): void {
   
  }

public edit(k:any){
 this.newcustomerdata = k 
 console.log(this.newcustomerdata)
 this.customerdata.forEach(element => {
    element.isEdit = false;
  });
  k.isEdit = true
}

public update(k:any){
  debugger;
  console.log(k)
  k.isEdit = false

}

public cancel(k:any){
  const newdata = this.newcustomerdata
  console.log(newdata.Id)
  k.Id = newdata.Id
  k.Name = newdata.Name
  k.Mobile = newdata.Mobile
  k.Email = newdata.Email
  k.isEdit = false
}


public delete(k:any){
  this.arr = true
   this.len1 = this.svc.length()-1
    this.svc.arr ++
   this.len2 = this.svc.arr 
  const index: number = this.svc.data.indexOf(k);
    if (index !== -1) {
        this.svc.data.splice(index, 1);
    }   
    console.log(this.svc.data)     

}

key:string = 'Id';
reverse:boolean = false;
public sort(key:any){
  this.key = key;
  this.reverse = !this.reverse
}

 



}
