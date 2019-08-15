import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-landscape-page',
    templateUrl: './landscape-page.page.html',
    styleUrls: ['./landscape-page.page.scss'],
})
export class LandscapePagePage implements OnInit {

    constructor(private screenOrientation: ScreenOrientation,
        private navCtrl: NavController) { }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }

    // On view leave
    ionViewWillLeave() {
        this.screenOrientation.unlock();
    }

    back() {
        this.navCtrl.back();
    }

}
