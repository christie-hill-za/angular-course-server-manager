import { Component, input } from '@angular/core';
import { Image } from "../../models/Image";

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  image = input.required<Image>();
  title = input.required<string>();
}
