import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  //image lazy loading directive
  import { Directive, ElementRef } from '@angular/core';

  @Directive({ selector: 'img' })
  export class LazyImgDirective {
    constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
      const supports = 'loading' in HTMLImageElement.prototype;
  
      if (supports) {
        nativeElement.setAttribute('loading', 'lazy');
      }
    }
  }