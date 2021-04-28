import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { TokenService } from './services/token.service';
import { FacadeService } from './services/facade.service';
import { SessionGuardService } from './guards/session-guard.service';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidenavComponent],
  imports: [CommonModule, CoreModule],
  providers: [FacadeService, TokenService, SessionGuardService, AuthInterceptorService],
  exports: [LayoutComponent, HeaderComponent, SidenavComponent],
})
export class SharedModule {}
