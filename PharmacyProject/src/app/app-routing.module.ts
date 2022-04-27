import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacyTableComponent } from './pharmacy-table/pharmacy-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { MedicineTableComponent } from './medicine-table/medicine-table.component';
const routes: Routes = [
 {path: 'pharmacy-table' , component:PharmacyTableComponent},
{path: 'user-table'  , component:UserTableComponent},
{path: 'medicine-table' , component:MedicineTableComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
