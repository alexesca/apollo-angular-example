import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apollo-angular-example';
  matrix;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .query({
        query: gql`
          {
            profitMatrix {
              _id,
              version
            }
          }
        `,
      })
      .subscribe(result => {
        debugger
        this.matrix = result.data
      });
  }
}
