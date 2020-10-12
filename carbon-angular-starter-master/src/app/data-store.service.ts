import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  breakfastData = new BehaviorSubject(null);
  lunchData = new BehaviorSubject(null);
  dinnerData = new BehaviorSubject(null);
  constructor(private http: HttpClient) { 
  }

  saveData(payload) {
    return this.http.post('http://localhost:8080/dishes', payload);
  }

  getData() {
    return this.http.get('http://localhost:8080/dishes');
  }
}
