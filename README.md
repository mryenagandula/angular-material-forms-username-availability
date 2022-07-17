# Angular Material Forms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### How to implement form array in angular

### Steps: 

- Create angular project with below command.
	"ng new angular-material-forms"

- After successfully creation of angular app, change file directory to project-name.
	"cd angular-material-forms"

- Open project in vs code using "code ."

- Then run the project using "ng serve".

- Open project in chrome using `localhost:4200`

- Open app component in vs code and remove the content which is created by angular cli while creating the app.

- Adding angular material using the command `ng add @angular/material`

- Select theme , Am selecting  `Indigo/Pink`

- Set up global Angular Material typography styles? Am selecting as `y`

- Set up browser animations for Angular Material? (Y/n) Select 'y'.

- Created Shared Module in the libs folder.And import , export material modules.

- Create Signup component in the apps/component folder.

- Add signup compopent in router and path as `signup`.

- Add ReactiveFormsModule, FormsModule in app.module.ts

- Open signup.component.ts , then add formbuilder as dependency in constuctor.

- Create form variable above the constructor.

- Create formInit method to intialize the form and call the method form either contructor or ngOninit.

- And create form group using form builder and add controls in that same form.

- Form Controls like firstName, secondName , email, username, password and mobile.

- Add The below html in signup.component.html.

```bash
  <div class="container">
    <form class="form shadow m-3 p-3" [formGroup]="form" (ngSubmit)="submitForm()">
        <h1>Sign Up Form</h1>
    </form>
</div>
```

```bash
  <div class="container">
    <form class="form shadow m-3 p-3" [formGroup]="form" (ngSubmit)="submitForm()">
        <h1>Sign Up Form</h1>
        <div class="row mt-3">
            <mat-form-field class="col-md-6">
                <mat-label>First Name</mat-label>
                <input matInput formControlName="firstName" placeholder="Enter First Name">
            </mat-form-field>
        </div>
    </form>
</div>
```
  

```bash
<div class="container">
    <form class="form shadow m-3 p-3" [formGroup]="form" (ngSubmit)="submitForm()">
        <h1>Sign Up Form</h1>
        <div class="row mt-3">
            <mat-form-field class="col-md-6">
                <mat-label>First Name</mat-label>
                <input matInput formControlName="firstName" placeholder="Enter First Name">
                <mat-error *ngIf="this.form.controls.firstName.hasError('required')">
                  First Name is <strong>required</strong>
                </mat-error>
            </mat-form-field>
        </div>
    </form>
</div>
```

```bash
<div class="container">
    <form class="form shadow m-3 p-3" [formGroup]="form" (ngSubmit)="submitForm()">
        <h1>Sign Up Form</h1>
        <div class="row mt-3">
            <mat-form-field class="col-md-6">
                <mat-label>First Name</mat-label>
                <input matInput formControlName="firstName" placeholder="Enter First Name">
                <mat-error *ngIf="this.form.controls.firstName.hasError('required')">
                  First Name is <strong>required</strong>
                </mat-error>
            </mat-form-field>
        </div>
        <div class="row mt-3">
            <mat-form-field class="col-md-6">
                <mat-label>Last Name</mat-label>
                <input matInput formControlName="lastName" placeholder="Enter Last Name">
                <mat-error *ngIf="this.form.controls.lastName.hasError('required')">
                  Last Name is <strong>required</strong>
                </mat-error>
            </mat-form-field>
        </div>
        <div class="row mt-3">
            <mat-form-field class="col-md-6">
                <mat-label>User Name</mat-label>
                <input matInput formControlName="username" placeholder="Enter Username">
                <mat-error *ngIf="this.form.controls.username.hasError('required')">
                  Username is <strong>required</strong>
                </mat-error>
            </mat-form-field>
        </div>
        <div class="row mt-3">
            <mat-form-field class="col-md-6">
                <mat-label>Email</mat-label>
                <input matInput formControlName="email" placeholder="Enter Email">
                <mat-error *ngIf="this.form.controls.email.hasError('required')">
                  Email <strong>required</strong>
                </mat-error>
            </mat-form-field>
        </div>
        <div class="row mt-3">
            <mat-form-field class="col-md-6">
                <mat-label>Password</mat-label>
                <input type="password" matInput formControlName="password" placeholder="Enter Password">
                <mat-error *ngIf="this.form.controls.password.hasError('required')">
                  Password is <strong>required</strong>
                </mat-error>
            </mat-form-field>
        </div>
        <div class="row mt-3">
            <button type="submit" mat-raised-button color="primary" class="m-2" style="width: 100px;" [disabled]="!form.valid">Submit Form</button>
            <button type="button" mat-raised-button color="warn" class="m-2" style="width: 100px;" (click)="form.reset()">Reset</button>
        </div>
    </form>
</div>
  ```
  
  ### OUTPUT
  
![image](https://user-images.githubusercontent.com/98155788/169647286-66781477-d50d-42d0-8aba-ae720f796e6c.png)


![image](https://user-images.githubusercontent.com/98155788/169647322-b385d570-3269-4985-acca-8a3b97987bf8.png)


![image](https://user-images.githubusercontent.com/98155788/169647372-8c603c75-d2cd-47a6-b3c0-4291311d0309.png)

![image](https://user-images.githubusercontent.com/98155788/169647392-4f66bc3b-b4aa-47f2-a6bc-9977c16f455f.png)





