import {
  Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
                                               AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
    console.log('####################');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log('####################');
    // console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('The value of header is: ' + this.header.nativeElement.textContent);
    console.log('The value of paragraph is: ' + this.paragraph.nativeElement.textContent);
    console.log('####################');
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
    console.log('####################');
  }

  // We can't use the content child paragraph before this method on lifecycle
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('The value of paragraph is: ' + this.paragraph.nativeElement.textContent);
    console.log('####################');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
    console.log('####################');
  }

  // We can't use the view child header before this method on lifecycle
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('The value of header is: ' + this.header.nativeElement.textContent);
    console.log('####################');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
    console.log('####################');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
    console.log('####################');
  }

}
