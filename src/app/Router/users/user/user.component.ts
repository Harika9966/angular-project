import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user!: {id: number, name: string};
  paramsSubscription!: Subscription;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user ={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    };
    this.route.params
      .subscribe(
        (parms:Params) => {
          this.user.id = parms['id'];
          this.user.name = parms['name'];
        }
      )
  }
  ngOnDestroy(): void {
      this.paramsSubscription.unsubscribe();
  }

}
