import {NgModule} from "@angular/core";
import {NotificationService} from "./services/notification.service";
import {StorageService} from "./services/storage.service";


@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    NotificationService,
    StorageService
  ],
})
export class CoreModule {
}
