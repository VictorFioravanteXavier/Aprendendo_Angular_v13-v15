import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (res) => console.log(res.id, res.username, res)
    );

    this.activatedRoute.queryParams.subscribe(
      res => console.log(res)
    )

    /* setInterval(() => {
      this.router.navigate(['404']);
      //this.router.navigateByUrl();
    }, 5000) */
  }

}
