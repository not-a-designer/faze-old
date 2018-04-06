/** ANGULAR REQUIREMENTS */
import { Injectable } from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */
import { Platform }   from 'ionic-angular';


@Injectable()
export class PlatformService {

    platforms: string[];

    constructor(private platform: Platform) {
        this.platforms = this.getPlatforms();
    }

    getPlatforms(): string[] {
        return this.platform.platforms().slice();
    }

    get isMd(): boolean {
        return (this.platforms.indexOf('android') > -1) ? true : false;
    }
    get isIos(): boolean {
        return (this.platforms.indexOf('ios') > -1) ? true : false;
    }
    get isWp(): boolean {
        return (this.platforms.indexOf('windows') > -1) ? true : false;
    }
}