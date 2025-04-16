import { Component } from '@angular/core';
import { PipelineViewComponent } from './components/pipeline-view/pipeline-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PipelineViewComponent],
  template: '<app-pipeline-view></app-pipeline-view>',
})
export class AppComponent {}
