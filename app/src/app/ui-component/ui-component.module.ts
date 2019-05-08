//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule, MatButtonModule, 
         MatSidenavModule, MatCardModule, MatInputModule,
         MatRadioModule } from '@angular/material';
import { ChartModule } from 'angular-highcharts';

// Components
import { UiComponent } from './ui-component.component';
import { DevComponent } from './dev-component/dev-component.component';
import { SearchComponent } from './search-component/search-component.component';
import { FilterComponent } from './filter-component/filter-component.component';
import { PostComponent } from './post-component/post-component.component';
import { GraphComponent } from './graph-component/graph-component.component';

//Services
import { UiComponentService } from './ui-component.service';

//Pipes
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    UiComponent,
    DevComponent,
    SearchComponent,
    FilterComponent,
    PostComponent,
    GraphComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    HttpClientModule,
    ChartModule
  ],
  exports: [
    UiComponent
  ],
  providers: [
    UiComponentService
  ],
  entryComponents: [
    UiComponent
  ],
  bootstrap: [UiComponent]
})
export class UiModule { }
