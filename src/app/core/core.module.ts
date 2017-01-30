import {NgModule} from "@angular/core";
import {NotificationService} from "./services/notification.service";
import {StorageService} from "./services/storage.service";
import {DialogModule} from "./dialog/dialog.module";

@NgModule({
  imports: [
    DialogModule
  ],
  exports: [],
  declarations: [],
  entryComponents: [],
  providers: [
    NotificationService,
    StorageService
  ]
})
export class CoreModule {
}
