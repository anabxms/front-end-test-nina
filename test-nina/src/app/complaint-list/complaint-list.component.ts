import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WebSocketSubject } from 'rxjs/webSocket';
import { interval } from 'rxjs';

const socket$ = new WebSocketSubject('ws://localhost:8080');

socket$.subscribe(
  (notification) => {
    console.log('Conectado ao WebSocket');
  },
  (error) => {
    console.error(error);
  }
);

setInterval(() => {
  socket$.next('Conectado ao WebSocket');
}, 300000);

interface ComplaintQueryParams {
  [key: string]: string | undefined;
  place?: string;
  type?: string;
  situation?: string;
}

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css'],
})
export class ComplaintListComponent implements OnInit {
  complaints!: any[];
  complaintPlaces!: string[];
  complaintTypes!: string[];
  complaintSituation!: string[];
  selectedPlace = '';
  selectedType = '';
  selectedSituation = '';

  constructor(private http: HttpClient) {}

  getComplaints() {
    let params = new HttpParams();
    if (this.selectedPlace) {
      params = params.append('place', this.selectedPlace);
    }
    if (this.selectedType) {
      params = params.append('type', this.selectedType);
    }
    if (this.selectedSituation) {
      params = params.append('situation', this.selectedSituation);
    }
    this.http
      .get<any[]>('http://localhost:3000/complaints', { params: params })
      .subscribe({
        next: (data) => {
          this.complaints = data;
          this.complaintPlaces = Array.from(
            new Set(data.map((complaint) => complaint.place))
          );
          this.complaintTypes = Array.from(
            new Set(data.map((complaint) => JSON.stringify(complaint.type)))
          ).map((typeString) => JSON.parse(typeString));
          this.complaintSituation = Array.from(
            new Set(
              data.map((complaint) => JSON.stringify(complaint.situation))
            )
          ).map((situationString) => JSON.parse(situationString));
        },
        error: (error) => console.error(error),
      });
  }

  filterComplaints() {
    const queryParams: ComplaintQueryParams = {};
    if (this.selectedPlace) {
      queryParams.place = this.selectedPlace;
    }
    if (this.selectedType) {
      queryParams.type = this.selectedType;
    }
    if (this.selectedSituation) {
      queryParams.situation = this.selectedSituation;
    }
    const queryString = Object.keys(queryParams)
      .map((key) => `${key}=${queryParams[key]}`)
      .join('&');
    const url = `http://localhost:3000/complaints?${queryString}`;
    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        this.complaints = data;
      },
      error: (error) => console.error(error),
    });
  }

  ngOnInit() {
    this.getComplaints();
  }
}
