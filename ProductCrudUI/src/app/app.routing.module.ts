import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "app/core/home/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', loadChildren: './products/product.module#ProductModule'},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {

}