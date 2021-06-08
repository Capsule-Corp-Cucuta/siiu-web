import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { LabelConstants } from 'src/app/shared/constants/label-constants';
import { Event } from 'src/app/core/models/event.model';
import { FacadeService } from '../../../shared/services/facade.service';
import { Inscription } from 'src/app/core/models/inscription.model';
import { SharedConstants } from 'src/app/shared/constants/shared-constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../../shared/styles/_modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public readonly ICONS = LabelConstants.ICONS;
  public readonly LABELS = LabelConstants.LABELS.EVENT.FORM;
  public readonly ROLES = SharedConstants.ROLES;

  public event: Event;
  public idEvent: number;
  public idUser: string;
  public inscription: Inscription;
  public authority: string;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private service: FacadeService,
  ) {
    this.buildEvent();
  }

  ngOnInit(): void {
    this.idEvent = this.data;
    this.authority = this.service.getAuthorities()[0];
    this.idUser = this.service.getUser().id;
    this.loadEvent();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public inscriptionEvent(): void {
    this.service.eventInscription(this.idUser, this.idEvent).subscribe(
      () => {
        Swal.fire(
          SharedConstants.ALERTSUCCESS.TITLE,
          SharedConstants.ALERTSUCCESS.TEXTCREATE +
            SharedConstants.ALERTSUCCESS.EVENT_INSCRIPTION,
          'success',
        );
      },
      () => {
        Swal.fire(
          SharedConstants.ALERTERROR.TITLE,
          SharedConstants.ALERTERROR.TEXTCREATE +
            SharedConstants.ALERTERROR.EVENT_INSCRIPTION,
          'error',
        );
      },
    );
  }

  private loadEvent() {
    this.service.findByIDEvent(this.idEvent).subscribe((resp) => {
      this.event = resp;
    });
  }

  private buildEvent() {
    this.event = {
      id: null,
      title: null,
      theme: null,
      description: null,
      type: null,
      state: null,
      startDate: null,
      closeDate: null,
      registrationDeadlineDate: null,
      eventDurationInHours: null,
      department: null,
      city: null,
      place: null,
      email: null,
      link: null,
    };
  }
}
