import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import{MessageComponent} from './message.component'
import{EmailComponent} from './email.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DynamicComponent';
  // entry:ViewContainerRef;
  @ViewChild('messagecontainer',{read:ViewContainerRef,static:true}) entry:ViewContainerRef;

  constructor(private resolver:ComponentFactoryResolver){

  }
   messageComponent(message){
     this.entry.clear();
     const factory = this.resolver.resolveComponentFactory(MessageComponent);
     const componentRef = this.entry.createComponent(factory);
     componentRef.instance.message=message;
   }
   emailComponent(email){
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(EmailComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.email=email;
  }
}
