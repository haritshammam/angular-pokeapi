import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CategoryComponent } from './components/category/category.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { MovesComponent } from './pages/moves/moves.component';
import { ItemsComponent } from './pages/items/items.component';
import { BerriesComponent } from './pages/berries/berries.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { BagComponent } from './pages/bag/bag.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/pokecard/pokecard.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { TextLabelComponent } from './components/text-label/text-label.component';

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
    CardComponent,
    PokemonDetailsComponent,
    TextLabelComponent,
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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
