import {NgModule} from "@angular/core";
import {DialogService} from "./services/dialog.service";
import {NotificationService} from "./services/notification.service";
import {StorageService} from "./services/storage.service";

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    DialogService,
    NotificationService,
    StorageService
  ],
})
export class CoreModule {
}
