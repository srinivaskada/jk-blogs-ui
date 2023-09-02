import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, of, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'capture-token',
  templateUrl: './capture-token.component.html',
  styleUrls: ['./capture-token.component.scss'],
  host: {
    class: 'is-flex is-justify-content-center'
  }
})
export class CaptureTokenPage implements OnInit {
  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.paramMap.subscribe(paramsMap => {
      const token = paramsMap.get('token')
      if(token) {
        this.authService.setToken(token)
        this.router.navigate(['blogs'])
      } else {
        this.router.navigate(['auth'])
      }
    })
  }
}
