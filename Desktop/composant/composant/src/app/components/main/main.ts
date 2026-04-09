import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})

export class Main {
personnes: Personne[] = [
    { id: 1, nom: 'Dupont',   prenom: 'Alice',   sexe: 'F', age: 22 },
    { id: 2, nom: 'Martin',   prenom: 'Bob',     sexe: 'M', age: 24 },
    { id: 3, nom: 'Bernard',  prenom: 'Carla',   sexe: 'F', age: 21 },
    { id: 4, nom: 'Petit',    prenom: 'David',   sexe: 'M', age: 23 },
    { id: 5, nom: 'Leroy',    prenom: 'Emma',    sexe: 'F', age: 20 },
    { id: 6, nom: 'Moreau',   prenom: 'Fabrice', sexe: 'M', age: 25 },
    { id: 7, nom: 'Simon',    prenom: 'Grace',   sexe: 'F', age: 22 },
    { id: 8, nom: 'Laurent',  prenom: 'Hugo',    sexe: 'M', age: 26 },
  ];
}

interface Personne {
  id: number;
  nom: string;
  prenom: string;
  sexe: string;
  age: number;
}

