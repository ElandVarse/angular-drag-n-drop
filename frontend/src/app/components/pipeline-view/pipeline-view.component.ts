// src/app/components/pipeline-view/pipeline-view.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipelineService } from '../../services/pipeline.service';

@Component({
  selector: 'app-pipeline-view',
  templateUrl: './pipeline-view.component.html',
  styleUrls: ['./pipeline-view.component.css']
})
export class PipelineViewComponent {
  inputNumbers: string = '';
  result: any = null;

  constructor(private pipelineService: PipelineService) {}

  runPipeline() {
    const items = this.inputNumbers.split(',').map(val => parseInt(val.trim(), 10));
    this.pipelineService.processItems(items).subscribe({
      next: (res) => this.result = res,
      error: (err) => console.error(err)
    });
  }
}
