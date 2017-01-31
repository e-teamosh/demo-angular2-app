import {NgModule} from "@angular/core";
import {NotificationService} from "./services/notification.service";
import {StorageService} from "./services/storage.service";
import {DialogModule} from "./dialog/dialog.module";
import {HttpClientModule} from "./http-client/http-client.module";

@NgModule({
  imports: [
    DialogModule,
    HttpClientModule
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
