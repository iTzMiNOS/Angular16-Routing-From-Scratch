import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularRoutingScratch';

  constructor(){}

  ngOnInit(): void {
    const obsTest$ = new Observable(observer => {
      observer.next('Return from observor');
      observer.next('Second Return from observor');

      setTimeout(()=>{
        observer.next('This is From Timeout Function');
        obsTest$.unsubscribe();
      },3000)
      setTimeout(()=>{
        observer.next('This is From Timeout Function2');
      },5000)
      observer.next('Third Return from observor');
    }).subscribe(value => {
        console.log(value);
    });
  
    
    
    const obsTest = function(){
      return 'Return From Function';
      return 'Second Return From Function';
    }
    const ret = obsTest();
    console.log(ret);
    obsTest();

  }

}
