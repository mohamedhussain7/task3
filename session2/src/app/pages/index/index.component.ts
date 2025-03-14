import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  title : string="Angular"
  num= 20
  placeholderinput ="enter you nameee "
  inputclass='form-control'
  inputtype='text'
  handlefunction(){
    return 'angular session2'
   }
   handelmax(num1:any , num2:number, num3:number){
    return Math.max(num1,num2,num3)

   }
   content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusantium id quos? Sequi nisi voluptatem culpa iste labore, quis neque sunt debitis dicta alias perspiciatis magnam suscipit, dolorum corrupti error."

elemnt="<p>depi-angular session2"
  }

