import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './menu/main/main.component';
import { TreningComponent } from './menu/trening/trening.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'Trening', component: TreningComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class appRoutingModule {}