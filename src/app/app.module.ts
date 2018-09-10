import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MethodologyComponent } from './components/methodology/methodology.component';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { MethodologiesService } from './services/methodologies.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MethodologyComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    MethodologiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
