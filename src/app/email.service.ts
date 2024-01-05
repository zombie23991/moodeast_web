import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'https://auth-db1215.hstgr.io/index.php?db=u622363701_wUXjI'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-email`, emailData);
  }
}
