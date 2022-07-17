import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/api/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  public form:FormGroup;

  constructor(private fb:FormBuilder,private api:UserServiceService) { 
    this.formInit();
  }

  public ngOnInit(): void {
    this.form
      .get('username')
      .valueChanges
      .subscribe( (value) => {
        this.verifyUsernameOrEmail('username');
      });

    this.form
      .get('email')
      .valueChanges
      .subscribe( (value) => {
        this.verifyUsernameOrEmail('email');
      });
  }

  private formInit(){
    this.form = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      username: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  public submitForm(){
    console.log(this.form);
    console.log(this.form.getRawValue())
  }

  public verifyUsernameOrEmail(fieldName){
    const field = this.form.get(fieldName);
    if(field.valid){
      const filter = {}
      filter[fieldName] = field.value;
      this.api.verifyUsernameOrEmail(filter).subscribe((res:any )=> {
        if(res?.availability){
          const message = fieldName === 'email' ? 'Email already Exists.' : 'Username already Exists.'
          fieldName === 'email' ? 
            field.setErrors({ inValidEmail: true, message}) : 
            field.setErrors({ inValidUserName: true, message})
        }
        else{ 
          field.setErrors(null);
          fieldName === 'email' ? 
            field.setValidators([Validators.required,Validators.email]) :
            field.setValidators([Validators.required,Validators.minLength(4),Validators.maxLength(20)]) 
        }
      },
      error=>{
        console.log(error)
      })
    }
  }

}
