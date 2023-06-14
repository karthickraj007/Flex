import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Observable, Subscription,} from 'rxjs';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

public arr:Subscription | undefined

  constructor(){

    const myobs = new Observable(
      (obs)=>{
        obs.next("100"),
        obs.next("200"),
        obs.next("300"),
        // obs.error("Not working"),
        // obs.complete()
        setTimeout(
          ()=>{
            obs.next("400"),
            obs.next("500")
          },2000
        ),
        console.log("End")
       
      }
    )
  
     this.arr =  myobs.subscribe(
        (data)=>{
          console.log(data)
        },
        (error)=>{
          console.log(error)
        },

        ()=>{
          console.log("completed")
        }
      )

      this.arr?.unsubscribe()

  }

 

  

 }
