import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule,
             RouterLink, RouterLinkActive, RouterOutlet
          ],

  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.css'
})
export class HeaderAdminComponent {
  mobileQuery: MediaQueryList;

  @ViewChild('snav') snav!: MatSidenav;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener); // Cambié addEventListener a addListener
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener); // Cambié removeEventListener a removeListener
  }

  toggleSidenav(): void {
    this.snav.toggle();
  }

  logout(): void {
    
  }
  


}
