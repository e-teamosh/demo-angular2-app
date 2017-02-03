import {NgModule} from "@angular/core";
import {WfNotificationService} from "./services/notification.service";
import {WfStorageService} from "./services/storage.service";
import {WfDialogModule} from "./dialog/dialog.module";
import {WfHttpClientModule} from "./http-client/http-client.module";

@NgModule({
  imports: [
    WfDialogModule,
    WfHttpClientModule
  ],
  exports: [],
  declarations: [],
  entryComponents: [],
  providers: [
    WfNotificationService,
    WfStorageService
  ]
})
export class WfCoreModule {
}
