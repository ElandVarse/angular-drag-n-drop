import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.css']
})
export class ResultBoxComponent {
  @Input() data: any;
}
