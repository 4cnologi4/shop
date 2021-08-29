import { NgModule } from "@angular/core";

import {CarouselModule} from 'primeng/carousel';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
      CarouselModule,
      MenubarModule,
      InputTextModule,
      ButtonModule
  ],
  exports: [
      CarouselModule,
      MenubarModule,
      InputTextModule,
      ButtonModule
  ],
})
export class AngularMaterialModule {}
