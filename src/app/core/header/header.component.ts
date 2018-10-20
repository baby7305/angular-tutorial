import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('gifts', sanitizer.bypassSecurityTrustResourceUrl('assets/gifts.svg'));
  }

  ngOnInit() {
  }

  openSidebar() {
    this.toggle.emit();
  }

}
