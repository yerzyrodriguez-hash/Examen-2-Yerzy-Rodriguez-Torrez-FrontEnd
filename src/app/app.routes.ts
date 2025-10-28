import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'',
        children:[
            {
                path:'',
                loadComponent:()=>
                    import('./empleados/empleados').then(m=>m.Home)
            },
        ]
    }

];
