import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
    pushRightClass: string = 'push-right';
    @Input() userDet: any
    us: Observable<string>;
    cl: Observable<string>;
    ad: Observable<string>;
    userDetails: any
    typeof: any
    constructor(private translate: TranslateService, public router: Router, private user: UsersService) {

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

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
    profileRoute() {
        let userType = localStorage.getItem('typeOfUser')
        if (userType == 'client') {
            this.router.navigate(['cprofile'])
        }
        else if (userType == 'user') {
            this.router.navigate(['myprofile'])
        }
    }
    ngOnInit() {
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

    onLoggedout() {
        // localStorage.removeItem('isLoggedin');
        localStorage.clear();
        this.router.navigate(['login'])
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
    checkLocalstorage(): Observable<any> {
        return of(localStorage.getItem('typeOfUser'));
    }
    checkLocalstorage2(): Observable<any> {
        return of(localStorage.getItem('username'));
    }
    getUser() {
        let a = localStorage.getItem('emailId');

        this.user.GetByEmail(a).subscribe((data) => {
            this.userDet = data[0]
            console.log(this.userDetails)
        })
    }
    ngDoCheck() {
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
            if (this.ad) {
                this.userDet = { 'firstname': 'Rama-ProjectManager' }
            }
        })
    }
}
