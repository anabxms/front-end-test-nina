import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css']
})

export class ComplaintListComponent implements OnInit {

  complaints!: any[];

  constructor(private http: HttpClient) { }

  getComplaints() {
    this.http.get<any[]>('http://localhost:3000/complaints')
      .subscribe(data => {
        this.complaints = data;
      });
  }

  ngOnInit() {
    this.getComplaints();
  }

}
