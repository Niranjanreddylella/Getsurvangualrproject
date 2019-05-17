import { Component, OnInit, EventEmitter ,Output} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable , of} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isActive: boolean = false;
  collapsed: boolean = false;
  showMenu: string = '';
  pushRightClass: string = 'push-right';
  us: Observable<string>;
  cl: Observable<string>;
  ad: Observable<string>;

  typeof: any

  @Output() collapsedEvent = new EventEmitter<boolean>();
  
  constructor(private translate: TranslateService, public router: Router) {
      this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
      this.translate.setDefaultLang('en');
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

      this.router.events.subscribe(val => {
          if (
              val instanceof NavigationEnd &&
              window.innerWidth <= 992 &&
              this.isToggled()
          ) {
              this.toggleSidebar();
          }
      });
  }

  eventCalled() {
      this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
      if (element === this.showMenu) {
          this.showMenu = '0';
      } else {
          this.showMenu = element;
      }
  }

  toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.collapsedEvent.emit(this.collapsed);
  }

  isToggled(): boolean {
      const dom: Element = document.querySelector('body');
      return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle('rtl');
  }

  changeLang(language: string) {
      this.translate.use(language);
  }

  onLoggedout() {
      localStorage.removeItem('isLoggedin');
  }
  checkLocalstorage(): Observable<any> {
    return of (localStorage.getItem('typeOfUser'));
  }

  // checkLocalstorage1(): Observable <any> {
  //   return of(localStorage.getItem('typeOfUser'))
  // }

  checkLocalstorage2(): Observable<any> {
    return of (localStorage.getItem('username'));
  }
ngDoCheck(){
    if (this.typeof === 'user') {
        this.checkLocalstorage().subscribe((data) => {
          this.us = data
        })
      }
      else if (this.typeof == 'client') {
        this.checkLocalstorage().subscribe((data) => {
          this.cl = data
        })
      }
  
      this.checkLocalstorage().subscribe((data) => {
        this.typeof = data;
      })
  
      this.checkLocalstorage2().subscribe((data) => {
        this.ad = data;
      })
}
}
