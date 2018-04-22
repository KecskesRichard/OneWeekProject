import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.pug',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  datas: any;
  duties: any;
  thisDuty: object = {
    title: '',
    text: '',
    status: ''
  }

  newDuty: object = {
    title: '',
    text: '',
    status: ''
  }

  constructor(public http: Http) { }

  errorHandling(res) {
    res = JSON.parse(res['_body']);
    if (res.error) {
      console.error('API error:' + res.error);
    } else {
      this.datas = res;
    }
  }

  list() {
    this.http.get('http://localhost:8080/todo/list').subscribe(
      data => {
        this.errorHandling(data);
        this.duties = data;
      });
  }

  create() {
    this.http.post('http://localhost:8080/todo/create', this.newDuty).subscribe(
      data => {
        this.errorHandling(data);
      });
  }

  update(duty) {
    this.http.put('http://localhost:8080/todo/5adcc76b5227752730b59b21' + duty['id'], duty).subscribe(
      data => {
        this.errorHandling(data);
      });
  }

  ngOnInit() {
  }

}
