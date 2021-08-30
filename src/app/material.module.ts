import { NgModule } from "@angular/core";

import {CarouselModule} from 'primeng/carousel';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {BadgeModule} from 'primeng/badge';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  imports: [
      CarouselModule,
      MenubarModule,
      InputTextModule,
      ButtonModule,
      RatingModule,
      BadgeModule,
      GalleriaModule
  ],
  exports: [
      CarouselModule,
      MenubarModule,
      InputTextModule,
      ButtonModule,
      RatingModule,
      BadgeModule,
      GalleriaModule
  ],
})
export class AngularMaterialModule {}
