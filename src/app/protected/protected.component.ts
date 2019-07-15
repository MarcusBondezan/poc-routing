import { Component } from '@angular/core';

@Component({
    selector: 'app-public',
    template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
`
})
export class ProtectedComponent {
    title = 'poc-routing';
}