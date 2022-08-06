import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { TopbarModule } from './_modules/topbar.module';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
import { AuthModule } from './_modules/auth.module';
import { HomeModule } from './_modules/home.module';
import { ArticleModule } from './_modules/article.module';
import { SettingsModule } from './_modules/settings.module';
import { ProfileModule } from './_modules/profile.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({
            router: routerReducer
        }),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
            name: 'Vishu_Learn_NGRX',
            autoPause: false,
        }),
        EffectsModule.forRoot([]),
        AuthModule,
        HomeModule,
        TopbarModule,
        ArticleModule,
        SettingsModule,
        ProfileModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
