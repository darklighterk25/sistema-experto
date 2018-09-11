import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MethodologyComponent } from './components/methodology/methodology.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SurveyComponent } from './components/survey/survey.component';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { MethodologiesService } from './services/methodologies.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MethodologyComponent,
    FooterComponent,
    NavbarComponent,
    SurveyComponent
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
