// footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // تم تصحيح الخطأ هنا
})
export class FooterComponent {
  item: string = 'Example@gmail.com'; // تم تصحيح البريد الإلكتروني أيضًا
}
