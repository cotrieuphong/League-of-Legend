import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { SumSpellComponent } from './sum-spell/sum-spell.component';
import { SumDetailComponent } from './sum-detail/sum-detail.component';
import { RuneComponent } from './rune/rune.component';
import { PaymentConfirmComponent } from './payment/payment-confirm/payment-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent,
    DetailsComponent,
    SumSpellComponent,
    SumDetailComponent,
    RuneComponent,
    PaymentConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
