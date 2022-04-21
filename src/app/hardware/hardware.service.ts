import {Injectable} from '@angular/core';
import { Hardware} from "./hardware";
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";





@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  private hardwareUrl = 'http://localhost:8080/hardware';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {
  }


  getHardwares(): Observable<Hardware[]>{
    return this.http.get<Hardware[]>(this.hardwareUrl)
      .pipe(
        tap(_ => console.log('fetched hardwares')),
        catchError(this.handleError<Hardware[]>('getHardwares', []))
      )
  }
  getHardwareByCode(code: String): Observable<any>{
    const url = `${this.hardwareUrl}/${code}`;
    return this.http.get<Hardware>(url)
      .pipe(
        tap(_ => console.log('fetched hardwares')),
        catchError(this.handleError<Hardware[]>('getHardwares', []))
      )
  }
  addHardware(hardware: Hardware): Observable<Hardware>{
    return this.http.post<Hardware>(this.hardwareUrl, hardware, this.httpOptions).pipe(
      tap((newHardware: Hardware) => console.log(`added hardware w/ code=${newHardware.code}`)),
      catchError(this.handleError<Hardware>('addHardware'))
    );
  }
  updateHardware(hardware: Hardware): Observable<any> {
    const url = `${this.hardwareUrl}/${hardware.code}`;
    return this.http.put(url, hardware, this.httpOptions).pipe(
      tap(_ => console.log(`updated hardware code=${hardware.code}`)),
      catchError(this.handleError<any>('updateHardware'))
    );
  }

  deleteHardware(hardware: Hardware | string): Observable<Hardware> {
    const code = typeof hardware === 'string' ? hardware : hardware.code;
    const url = `${this.hardwareUrl}/${code}`;
    return this.http.delete<Hardware>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted hardware code=${code}`)),
      catchError(this.handleError<Hardware>('deleteHardware'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }

}
