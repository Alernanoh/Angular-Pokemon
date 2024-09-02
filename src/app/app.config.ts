import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), provideFirebaseApp(() => initializeApp({"apiKey": "AIzaSyDz3FAFnz0lLJNpYaQ_7vyZN98M7gYIQ-4",
        "authDomain": "angular-firebase-b037e.firebaseapp.com",
        "projectId": "angular-firebase-b037e",
        "storageBucket": "angular-firebase-b037e.appspot.com",
        "messagingSenderId": "95063776982",
        "appId": "1:95063776982:web:620f41fec9112bfb363377"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage()),
  ]
};
