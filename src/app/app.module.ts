import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { TopbarComponent } from './_containers/topbar/topbar.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
            name: 'Vishu_Learn_NGRX',
            autoPause: false,
        }),
        EffectsModule.forRoot([])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
