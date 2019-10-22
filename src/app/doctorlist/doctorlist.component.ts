import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {HttpClient} from '@angular/common/http';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2'

export interface PeriodicElement {
  name: string;
  type: string;
  hospital: string;
  username: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Dr. Steven Moffat ', type: 'Neurologist', hospital: 'St. John\'s', username: 'smoffat', },
  {name: 'Dr. Peter Mcadams', type: 'Urologist', hospital: 'St. John\'s', username: 'padams'},
  {name: 'Dr. Jerome Taylor', type: 'Orthodpadic', hospital: 'St. John\'s', username: 'jtaylor'},
  {name: 'Dr. John Winsky', type: 'Cardiologist', hospital: 'St. John\'s', username: 'jwinsky'}
];

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.scss']
})

export class DoctorlistComponent implements OnInit {

  displayedColumns: string[] = ['name', 'type', 'hospital', 'username', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
   this.dataSource.sort = this.sort;
   this.dataSource.paginator = this.paginator;

   // throw new Error("Method not implemented.");
  }
  // displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  // exampleDatabase: ExampleHttpDatabase | null;
  // data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(private _httpClient: HttpClient) {}
async addUser() {
  const {value: username} = await Swal.fire({
    title: 'Add user',
    html:
    '<label>Enter Username</label><input id="swal-input1" class="swal2-input">' +
    '<label>Enter Type</label><input id="swal-input2" class="swal2-input">',
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return 'You need to write something!'
      }
    }
  })
  if (username) {
    Swal.fire('Entered username: ' + username)
  }
}
//   ngAfterViewInit() {
//     this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);

//     // If the user changes the sort order, reset back to the first page.
//     this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

//     merge(this.sort.sortChange, this.paginator.page)
//       .pipe(
//         startWith({}),
//         switchMap(() => {
//           this.isLoadingResults = true;
//           return this.exampleDatabase!.getRepoIssues(
//             this.sort.active, this.sort.direction, this.paginator.pageIndex);
//         }),
//         map(data => {
//           // Flip flag to show that loading has finished.
//           this.isLoadingResults = false;
//           this.isRateLimitReached = false;
//           this.resultsLength = data.total_count;

//           return data.items;
//         }),
//         catchError(() => {
//           this.isLoadingResults = false;
//           // Catch if the GitHub API has reached its rate limit. Return empty data.
//           this.isRateLimitReached = true;
//           return observableOf([]);
//         })
//       ).subscribe(data => this.data = data);
//   }
// }

// export interface GithubApi {
//   items: GithubIssue[];
//   total_count: number;
// }

// export interface GithubIssue {
//   created_at: string;
//   number: string;
//   state: string;
//   title: string;
// }

// /** An example database that the data source uses to retrieve data for the table. */
// export class ExampleHttpDatabase {
//   constructor(private _httpClient: HttpClient) {}

//   getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
//     const href = 'https://api.github.com/search/issues';
//     const requestUrl =
//         `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

//     return this._httpClient.get<GithubApi>(requestUrl);
//   }
}

