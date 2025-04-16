import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResultBoxComponent } from '../result-box/result-box.component';
import { PipelineService } from '../../services/pipeline.service';

@Component({
  selector: 'app-pipeline-view',
  standalone: true,
  imports: [CommonModule, FormsModule, ResultBoxComponent],
  templateUrl: './pipeline-view.component.html',
  styleUrls: ['./pipeline-view.component.css']
})
export class PipelineViewComponent {
  inputNumbers: string = '';
  result: any = null;

  constructor(private pipelineService: PipelineService) {}

  runPipeline() {
    const items = this.inputNumbers
      .split(',')
      .map(val => parseInt(val.trim(), 10))
      .filter(n => !isNaN(n));
    
    this.pipelineService.processItems(items).subscribe({
      next: (res) => this.result = res,
      error: (err) => console.error(err)
    });
  }
}
