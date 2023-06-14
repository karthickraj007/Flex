import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

public data:any[]= [
  {Id:1,Name:"karthik",Mobile:9025736282,Email:"karthik@123.gmail.com"},
  {Id:2,Name:"Ram",Mobile:9925736284,Email:"ram@773.gmail.com"},
  {Id:3,Name:"Santhosh",Mobile:8825736833,Email:"santhosh@321.gmail.com"},
  {Id:4,Name:"kiran",Mobile:7725736882,Email:"kiran@12345.gmail.com"},
  {Id:5,Name:"Aswin",Mobile:6225736272,Email:"aswin@999.gmail.com"},
  {Id:6,Name:"Raj",Mobile:6225736592,Email:"raj@999.gmail.com"},
  {Id:7,Name:"Kishore",Mobile:7225736965,Email:"kishore999.gmail.com"},
  {Id:8,Name:"Nakul",Mobile:9225736878,Email:"nakul999.gmail.com"},
  {Id:9,Name:"Rahul",Mobile:6225736878,Email:"rahul@999.gmail.com"},
  {Id:10,Name:"Ramkumar",Mobile:6995736572,Email:"ramkumar@999.gmail.com"},
]

public arr:number = 0

  constructor() { 
    
  }


  public getdata(){
    return this.data
  }

  public length(){
    return this.data.length
  }

  public getval(){
    return this.arr ++ 
  }

 
}
