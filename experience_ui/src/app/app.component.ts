import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToastModule,
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    MessageService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'experience_ui';
  
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Toast works!' });
  }
}
