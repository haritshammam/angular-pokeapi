import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CategoryComponent } from './category/category.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { MovesComponent } from './moves/moves.component';
import { ItemsComponent } from './items/items.component';
import { BerriesComponent } from './berries/berries.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponent } from './nav/nav.component';
import { BagComponent } from './bag/bag.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchbarComponent,
    CategoryComponent,
    PokedexComponent,
    MovesComponent,
    ItemsComponent,
    BerriesComponent,
    PageNotFoundComponent,
    NavComponent,
    BagComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomepageComponent },
      { path: 'pokedex-list', component: PokedexComponent },
      { path: 'moves', component: MovesComponent },
      { path: 'items', component: ItemsComponent },
      { path: 'berries', component: BerriesComponent },
      { path: 'my-bag', component: BagComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
