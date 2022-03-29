import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestApiService } from 'src/app/core/service/api-services/rest-api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public loading = false;
  public errorMsg: any;

  constructor(private restApi: RestApiService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(_form: NgForm)
  {
    this.loading = true;
    this.restApi.sendEmailToUser(_form.value.email).subscribe(
      {
        next: result =>{
          if(!result)
          {
            this.errorMsg = "Votre email est incorrecte !";
          }
          else{
            this.toastr.success("Veuillez vérifier votre email !", null, {timeOut: 4000});
           this.router.navigate(["/authentication/signin"]);
          }
          this.loading = false;
        },
        error: error =>{
          console.log(error);
          this.loading = false;
        }
      }
    )
  }

}
