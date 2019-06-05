import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersManagementModule } from './users-management/users-management.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      StoreModule.forRoot([]),
      StoreDevtoolsModule.instrument(),
      EffectsModule.forRoot([]),
      UsersManagementModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
