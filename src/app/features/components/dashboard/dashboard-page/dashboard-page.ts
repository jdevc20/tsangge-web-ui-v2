import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-page.html',
  styleUrls: ['./dashboard-page.css']
})
export class DashboardPageComponent {
  galleryImages = [
    {
      src: './assets/images/store.jpg',
      alt: 'Store',
      title: 'Tsangge Store',
      description: 'Explore handcrafted items and unique finds.'
    },
    {
      src: 'assets/images/store.jpg',
      alt: 'Market',
      title: 'Local Market',
      description: 'Discover fresh produce and daily essentials.'
    },
    {
      src: 'assets/images/store.jpg',
      alt: 'Handmade',
      title: 'Handmade Crafts',
      description: 'Support local artisans and creators.'
    },
    {
      src: 'assets/images/store.jpg',
      alt: 'Clothing',
      title: 'Fashion Finds',
      description: 'Trendy clothing at affordable prices.'
    },
    {
      src: 'assets/images/store.jpg',
      alt: 'Food',
      title: 'Food & Snacks',
      description: 'Delicious local delicacies to try.'
    },
    {
      src: 'assets/images/store.jpg',
      alt: 'Accessories',
      title: 'Accessories',
      description: 'Complete your look with our collection.'
    }
  ];
}
