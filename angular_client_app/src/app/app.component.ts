import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'JobJack DL';
  directoryListing: any[] = [];
  selectedDirectory:  string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDirectoryListing();
  }

  getDirectoryListing(): void {
    const apiUrl = 'http://localhost:3000/directory';

    const params = new HttpParams().set('path', this.selectedDirectory);
    this.errorMessage = '';

    this.http.get(apiUrl, { params })
      .subscribe(
        (response: any) => {
          this.directoryListing = response.directoryListing;
        },
        (error) => {
          console.error(error);
          this.errorMessage = 'Failed to read directory. Please check the path/server and try again.';
        }
      );
  }

  selectDirectory(path: string): void {
    this.selectedDirectory = path;
    this.getDirectoryListing();
  }
}
