import { RouterModule } from "@angular/router";
import { CustomerComponent } from "./customer/customer.component";



let router = [
    {path:'customer',component:CustomerComponent}
]

let routeconfig = RouterModule.forRoot(router)

export{routeconfig}