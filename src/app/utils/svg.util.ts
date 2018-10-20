import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResource = (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
    iconRegistry.addSvgIcon('gifts', sanitizer.bypassSecurityTrustResourceUrl('assets/gifts.svg'));
}