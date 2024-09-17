import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

  bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(withFetch()), // Enable fetch API for HttpClient
      provideAnimations()             // Enable animations
    ],
  }).catch(err => console.error('$$.. Animation error: ',err));