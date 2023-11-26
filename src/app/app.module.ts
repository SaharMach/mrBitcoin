import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { FormsModule } from '@angular/forms';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
// import { GoogleChartsModule } from 'angular-google-charts';
import { MarketPriceChartComponent } from './cmps/market-price-chart/market-price-chart.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactPageComponent,
    HomePageComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    ContactFilterComponent,
    StatisticsPageComponent,
    MarketPriceChartComponent,
    AppHeaderComponent,
    SignupComponent,
    TransferFundComponent,
    MovesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // GoogleChartsModule
  ],
  providers: [
    // Provide HashLocationStrategy
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
