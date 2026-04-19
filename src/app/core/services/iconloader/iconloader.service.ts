import { inject, Injectable } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { Icons } from 'public/icons/icons';

@Injectable({
  providedIn: 'root',
})
export class IconloaderService {

  private iconRegistry = inject(SvgIconRegistryService)

  loadIcons() {
    for (const icon of Icons) {
      this.iconRegistry.loadSvg(icon.url, icon.name)
    }




  }




}
