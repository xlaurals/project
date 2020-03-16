import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  @Output() closed = new EventEmitter<boolean>();
  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Scan");
  }
  close(){
this.closed.emit(false);
  }

}
