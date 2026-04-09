import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Service } from "./components/service/service";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Service, About, Contact, Header, Main, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('composant');
}
