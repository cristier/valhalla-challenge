//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule, MatButtonModule, 
         MatSidenavModule, MatCardModule, MatInputModule,
         MatRadioModule } from '@angular/material';

// Components
import { DevComponent } from './dev-component/dev-component.component';
import { SearchComponent } from './search-component/search-component.component';
import { FilterComponent } from './filter-component/filter-component.component';
import { PostComponent } from './post-component/post-component.component';
import { UiComponent } from './ui-component.component';

//Services
import { UiComponentService } from './ui-component.service'

@NgModule({
  declarations: [
    UiComponent,
    DevComponent,
    SearchComponent,
    FilterComponent,
    PostComponent,
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
