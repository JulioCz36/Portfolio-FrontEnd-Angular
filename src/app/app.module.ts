import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonEditComponent } from './components/button-edit/button-edit.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArPrComponent } from './components/logo-ar-pr/logo-ar-pr.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { DeleteComponent } from './components/delete/delete.component';
import { AddComponent } from './components/add/add.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { SeparacionComponent } from './components/separacion/separacion.component';
import { CartasSkillsComponent } from './components/cartas-skills/cartas-skills.component';
import { CartasProyectosComponent } from './components/cartas-proyectos/cartas-proyectos.component';
import { ModoOscuroComponent } from './components/modo-oscuro/modo-oscuro.component';
import { CartaPerfilComponent } from './components/carta-perfil/carta-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonEditComponent,
    HeaderComponent,
    LogoArPrComponent,
    SocialComponent,
    BannerComponent,
    LoginComponent,
    AcercaDeComponent,
    DeleteComponent,
    AddComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    SeparacionComponent,
    CartasSkillsComponent,
    CartasProyectosComponent,
    ModoOscuroComponent,
    CartaPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
