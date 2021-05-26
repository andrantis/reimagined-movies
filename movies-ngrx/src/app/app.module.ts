import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDecadeFilterComponent } from './components/movie-decade-filter/movie-decade-filter.component';
import { ByDecadePipe } from './shared/pipes/by-decade.pipe';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { moviesReducer } from './state/movies.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieDecadeFilterComponent,
    ByDecadePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ movies: moviesReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
