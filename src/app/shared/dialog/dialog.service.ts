import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Observable } from "rxjs/Observable";
import { ConfirmationDialogComponent, ConfirmationDialogOptions } from "./confirmation-dialog/confirmation-dialog.component";


@Injectable()
export class DialogService {

    public constructor(private dialog: MatDialog) {

    }

    public showConfirmation(message: string, title= "Comfirmation required", confirmTitle = "Confirm", cancelTitle = "Cancel"): Observable<boolean> {
        let dialog = this.dialog.open(ConfirmationDialogComponent, {            
            width: '600px',
            data: new ConfirmationDialogOptions(
                message,
                confirmTitle,
                cancelTitle,
                title
            )
        });
        return  dialog.afterClosed();
    }

}