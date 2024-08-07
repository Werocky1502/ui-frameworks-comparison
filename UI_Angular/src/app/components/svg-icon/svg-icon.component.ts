import { catchError, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.css'
})
export class SvgIconComponent implements OnInit {
  @Input() iconName: string;

  constructor(
    private http: HttpClient,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    const iconPath = `assets/${this.iconName}.svg`;

    this.http
      .get(iconPath, { responseType: 'text' })
      .pipe(
        tap((svgText) => {
          const svgElement = this.renderer.createElement('span');
          svgElement.innerHTML = svgText;
          const icon = svgElement.querySelector('svg');

          this.elementRef.nativeElement.appendChild(icon);
        }),
        catchError((error: any) => {
          console.error(`Failed to load SVG icon '${this.iconName}':`, error);
          return of(null);
        })
      )
      .subscribe();
  }
}
