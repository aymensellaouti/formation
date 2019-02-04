import {AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy {
  name = 'aymen';
  couleur = 'lightblue';
  constructor() { }
  ngOnInit() {
    console.log('onInit');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('in On changes');
    console.log('OnChanges', changes);
  }
  ngOnDestroy(): void {
    console.log('OnDestoy');
  }

}
