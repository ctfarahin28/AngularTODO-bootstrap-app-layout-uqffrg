import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() navbarEventEmitter: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  public toggleNavbar() {
    this.navbarEventEmitter.emit(null);
  }
}