import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrl: './add-bus.component.css'
})
export class AddBusComponent {

  matricule: string = '';
  departure: string = '';
  arrival: string = '';
  departureDate: string = '';
  arrivalDate: string = '';
  duration: string = '';
  price: number | null = null;
  station: string = '';
  seats: number | null = null;

  constructor(private dialogRef: MatDialogRef<AddBusComponent>) {}

  onSubmit() {
    const busData = {
      matricule: this.matricule,
      departure: this.departure,
      arrival: this.arrival,
      departureDate: this.departureDate,
      arrivalDate: this.arrivalDate,
      duration: this.duration,
      price: this.price,
      station: this.station,
      seats: this.seats
    };
    console.log('Bus Data Submitted:', busData);
    this.dialogRef.close(busData);
  }
}
