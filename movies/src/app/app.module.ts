import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDecadeFilterComponent } from './components/movie-decade-filter/movie-decade-filter.component';
import { ByDecadePipe } from './shared/pipes/by-decade.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieDecadeFilterComponent,
    ByDecadePipe,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
