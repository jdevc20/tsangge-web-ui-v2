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
      src: 'https://source.unsplash.com/random/400x300?store',
      alt: 'Store',
      title: 'Tsangge Store',
      description: 'Explore handcrafted items and unique finds.'
    },
    {
      src: 'https://source.unsplash.com/random/400x300?market',
      alt: 'Market',
      title: 'Local Market',
      description: 'Discover fresh produce and daily essentials.'
    },
    {
      src: 'https://source.unsplash.com/random/400x300?handmade',
      alt: 'Handmade',
      title: 'Handmade Crafts',
      description: 'Support local artisans and creators.'
    },
    {
      src: 'https://source.unsplash.com/random/400x300?clothing',
      alt: 'Clothing',
      title: 'Fashion Finds',
      description: 'Trendy clothing at affordable prices.'
    },
    {
      src: 'https://source.unsplash.com/random/400x300?food',
      alt: 'Food',
      title: 'Food & Snacks',
      description: 'Delicious local delicacies to try.'
    },
    {
      src: 'https://source.unsplash.com/random/400x300?accessories',
      alt: 'Accessories',
      title: 'Accessories',
      description: 'Complete your look with our collection.'
    }
  ];
}
