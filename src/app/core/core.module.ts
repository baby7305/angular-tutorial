import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { loadSvgResource } from '../utils/svg.util';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载！')
    }
    loadSvgResource(iconRegistry, sanitizer);
  }
}
