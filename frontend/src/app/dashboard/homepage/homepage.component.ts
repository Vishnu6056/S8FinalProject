import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent 
{

constructor(private router: Router) { }
  load_statuscheck()
  {
    this.router.navigateByUrl('/status-check')
    console.log("123")
  }
}
