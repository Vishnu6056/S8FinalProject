import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-status-check',
  templateUrl: './status-check.component.html',
  styleUrls: ['./status-check.component.css']
})
export class StatusCheckComponent 
{
   flag=false;
   default=true;
   constructor(private router: Router) { }
   load()
   {
    this.flag=true;
    this.default=false;
    
   }
   backbtn() 
   {
    if (this.flag) 
      {
        // If flag tab is true, set default tab to true
        this.flag = false;
        this.default = true;
    } 
    else if (this.default) 
      {
        // If default tab is true, redirect to homepage
        //  this.default = false;
        this.router.navigateByUrl('/homepage')
    }
}

}
