import { Injectable } from '@angular/core';
@Injectable()
export class NavBarService {

    public showNavBar: boolean;

    show() {
        this.showNavBar = true;
    }

    hide() {
        this.showNavBar = false;
    }
}
