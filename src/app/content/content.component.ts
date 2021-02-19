import { Component, Inject, OnInit } from '@angular/core';
import { DIALOG_DATA } from '../dialog/dialog';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(@Inject(DIALOG_DATA) public data: any) { }

  ngOnInit(): void {}
}
