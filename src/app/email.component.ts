import { Component, Input} from '@angular/core';

@Component({
    selector:'app-email',
    template:`<h2>{{email}}</h2>`
})

export class EmailComponent{
    @Input() email:string;
}