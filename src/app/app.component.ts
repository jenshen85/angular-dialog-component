import { Component } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { Dialog } from './dialog/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dialog-component';

  constructor(private readonly dialog: Dialog) {}

  open() {
    const dialogRef = this.dialog.open(ContentComponent, {
      data: 'some data',
      isScrolled: true,
      scrolledOverlayPosition: 'top',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }
}
