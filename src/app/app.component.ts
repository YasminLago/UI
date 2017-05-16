import { Component } from '@angular/core';
import { PreviewService } from "./services/PreviewService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PreviewService]
})
export class AppComponent {
  title = 'Editor de estilos';
}

