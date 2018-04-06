/** ANGULAR REQUIREMENTS */
import { Component,
         EventEmitter,
         Input,
         Output,
         ViewChild }          from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */
import { AlertController,
         Slides }             from 'ionic-angular';

/** APP IMPORTS */
import { ProfileMockService } from '../../services/profile-mock.service';
import { Profile }            from '../../models/interfaces/profile.interface';


@Component({
  selector: 'profile-details',
  templateUrl: 'profile-details.html'
})
export class ProfileDetailsComponent {

  @ViewChild('thumbSlide')
  thumbSlide: Slides;

  @Input('profile')
  profile: Profile;

  @Output('profileRemoved')
  profileRemoved: EventEmitter<number> = new EventEmitter<number>();

  currentSlide: number;

  constructor(private alertCtrl: AlertController, 
              private profileService: ProfileMockService) {
    console.log('Hello ProfileDetailsComponent Component');
  }

  ionViewDidLoad() {
    this.thumbSlide.centeredSlides = false;
    this.thumbSlide.initialSlide = 0;
    this.getCurrentSlide();
    this.thumbSlide.lockSwipeToPrev(true);
  }

  slideNext() {
    this.thumbSlide.lockSwipeToPrev(false);
    this.thumbSlide.slideNext();
    this.getCurrentSlide();
    if (this.thumbSlide.isEnd()) this.thumbSlide.lockSwipeToNext(true);
  }

  slidePrev() {
    this.thumbSlide.lockSwipeToNext(false);
    this.thumbSlide.slidePrev();
    this.thumbSlide.update();
    this.getCurrentSlide();
    if (this.thumbSlide.isBeginning()) this.thumbSlide.lockSwipeToPrev(true);
  }

  remove(index: number) {
    this.alertCtrl.create({
      title: 'Delete thumbnail',
      message: 'are you sure you want to delete this image?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('cancel image delete')
        }, {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.profile.images.splice(index, 1);
            if (this.profile.images.length > 1) {
              this.thumbSlide.lockSwipes(true);
              this.thumbSlide.update();
            }
            else this.profileRemoved.emit(index);
          }
        }
      ]
    }).present();
  }


  getCurrentSlide() {
    this.currentSlide = this.thumbSlide.getActiveIndex();
  }
}
