import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class localStorageService {
  constructor() {}

  saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getData(key: string) {
    return localStorage.getItem(key);
  }

  clearData() {
    localStorage.clear();
  }
}
