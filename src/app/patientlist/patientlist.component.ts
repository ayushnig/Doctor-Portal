import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {HttpClient} from '@angular/common/http';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  age: number;
  gender: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Adam Gill', age: 48, gender: 'Male'},
  {name: 'Gary Nicole', age: 40, gender: 'Male'},
  {name: 'Amanda Brooke', age: 69, gender: 'Female'},
  {name: 'Nathon Lyon', age: 56, gender: 'Male'}

];

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.scss']
})


export class PatientlistComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'gender', 'actions'];
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

