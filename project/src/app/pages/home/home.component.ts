import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('mensContainer') mensContainer!: ElementRef;
  @ViewChild('womensContainer') womensContainer!: ElementRef;
  @ViewChild('kidsContainer') kidsContainer!: ElementRef;

  
  showMensLeft: boolean = false;
  showMensRight: boolean = true;
  showWomensLeft: boolean = false;
  showWomensRight: boolean = true;
  showKidsLeft: boolean = false;
  showKidsRight: boolean = true;

  private scrollAmount = 300; 

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    
  
    this.logContainerStatus('mens', this.mensContainer);
    this.logContainerStatus('womens', this.womensContainer);
    this.logContainerStatus('kids', this.kidsContainer);

    
    if (this.mensContainer) {
      this.setupScrollListener(this.mensContainer, 'mens');
    } else {
      console.error('Mens container is not properly initialized');
    }

    if (this.womensContainer) {
      this.setupScrollListener(this.womensContainer, 'womens');
    } else {
      console.error('Womens container is not properly initialized');
    }

    if (this.kidsContainer) {
      this.setupScrollListener(this.kidsContainer, 'kids');
    } else {
      console.error('Kids container is not properly initialized');
    }

    
    this.updateButtonVisibility('mens');
    this.updateButtonVisibility('womens');
    this.updateButtonVisibility('kids');
  }

  private logContainerStatus(section: string, container: ElementRef) {
    console.log(`${section}Container:`, container?.nativeElement);
  }

  private setupScrollListener(containerRef: ElementRef, section: string) {
    const container = containerRef.nativeElement;
    console.log(`Setting up scroll listener for ${section} container:`, container);

    container.addEventListener('scroll', () => {
      this.updateButtonVisibility(section);
      console.log(`Scroll event triggered for ${section}`);
    });
  }

  scrollLeft(section: string) {
    const container = this.getContainer(section);
    if (container) {
      console.log(`Scrolling left for ${section}`);
      const start = container.nativeElement.scrollLeft;
      const distance = -this.scrollAmount;
      const duration = 500; 
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4); 

        container.nativeElement.scrollLeft = start + distance * easeProgress;
        console.log(`Current scroll position for ${section}:`, container.nativeElement.scrollLeft);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          this.updateButtonVisibility(section);
        }
      };

      requestAnimationFrame(animate);
    } else {
      console.error(`Container for ${section} not found`);
    }
  }

  scrollRight(section: string) {
    const container = this.getContainer(section);
    if (container) {
      console.log(`Scrolling right for ${section}`);
      const start = container.nativeElement.scrollLeft;
      const distance = this.scrollAmount;
      const duration = 500; 
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4); 

        container.nativeElement.scrollLeft = start + distance * easeProgress;
        console.log(`Current scroll position for ${section}:`, container.nativeElement.scrollLeft);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          this.updateButtonVisibility(section);
        }
      };

      requestAnimationFrame(animate);
    } else {
      console.error(`Container for ${section} not found`);
    }
  }

  private getContainer(section: string): ElementRef | undefined {
    switch (section) {
      case 'mens':
        return this.mensContainer;
      case 'womens':
        return this.womensContainer;
      case 'kids':
        return this.kidsContainer;
      default:
        console.error(`Invalid section: ${section}`);
        return undefined;
    }
  }

  private updateButtonVisibility(section: string) {
    const container = this.getContainer(section);
    if (!container) {
      console.error(`Cannot update button visibility for ${section}: container not found`);
      return;
    }

    const element = container.nativeElement;
    const scrollLeft = element.scrollLeft;
    const scrollWidth = element.scrollWidth;
    const clientWidth = element.clientWidth;

    console.log(`${section} Scroll Metrics - Left:`, scrollLeft, 'Width:', scrollWidth, 'Client:', clientWidth);

    
    const isAtStart = scrollLeft <= 1;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;

    switch (section) {
      case 'mens':
        this.showMensLeft = !isAtStart;
        this.showMensRight = !isAtEnd;
        console.log('Mens buttons visibility - Left:', this.showMensLeft, 'Right:', this.showMensRight);
        break;
      case 'womens':
        this.showWomensLeft = !isAtStart;
        this.showWomensRight = !isAtEnd;
        console.log('Womens buttons visibility - Left:', this.showWomensLeft, 'Right:', this.showWomensRight);
        break;
      case 'kids':
        this.showKidsLeft = !isAtStart;
        this.showKidsRight = !isAtEnd;
        console.log('Kids buttons visibility - Left:', this.showKidsLeft, 'Right:', this.showKidsRight);
        break;
      default:
        console.error(`Unknown section: ${section}`);
    }
  }
}