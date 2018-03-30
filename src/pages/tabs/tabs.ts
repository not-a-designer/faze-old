/** ANGULAR REQUIREMENTS */
import { Component, ViewChild } from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */
import { IonicPage, 
         ActionSheetController,
         AlertController,
         Content, 
         FabList,
         //ItemSliding, 
         List, 
         //LoadingController,
         //ModalController
         NavController, 
         NavParams, 
         //PopoverController,
         Slides,
         //ToastController, 
                              } from 'ionic-angular';

/** ANIMATIONS IMPORT */
import { fade, 
         fadeIn, 
         fadeOut, 
         slideFromLeft, 
         slideFromRight, 
        scale }                 from '../../app/app.animations';

/** 3RD PARTY IMPORTS */
import * as moment              from 'moment';

/** LOCAL INTERFACES */
interface Profile {
  dateCreated: string;
  id: number;
  name: string;
  desc?: string;
  images?: Array<string>;
}


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
  animations: [
    fade,
    fadeIn,
    fadeOut,
    slideFromRight,
    slideFromLeft,
    scale
  ]
})
export class TabsPage {

  /**  DECORATED PAGE VARIABLES */
  @ViewChild('tabs')
  public tabs: Slides;

  @ViewChild('thumbSlide')
  thumbSlide: Slides;

  @ViewChild(Content)
  content: Content;

  @ViewChild('profileList')
  profileList: List;

  //@ViewChild('item')
  //item: ItemSliding;

  @ViewChild('opacityFab')
  opacityFab: FabList;

  /** PAGE VARIABLES */
  sampleDate: string = moment().format('MM-DD-YYYY|HH:mm:ssA');
  pageTitle: string;
  skeletonList: Array<any> = new Array(3);
  currentTab: number;
  slidePos: string = 'out';

  sampleProfiles: Array<Profile> = [
    {
      dateCreated: this.sampleDate,
      id: 0,
      name: 'Profile 1',
      desc: 'This is the description for Profile 1'
    }, {
      dateCreated: this.sampleDate,
      id: 1,
      name: 'Profile 2',
      desc: 'This is the description for Profile 2'
    }, {
      dateCreated: this.sampleDate,
      id: 2,
      name: 'Profile 3',
      desc: 'This is the description for Profile 3'
    }, 
  ];

  socialMedia: Array<any> = [
    {
      icon: 'logo-google',
      text: 'Google',
      slug: 'google'
    }, {
      icon: 'logo-facebook',
      text: 'Facebook',
      slug: 'facebook'
    }, {
      icon: 'logo-instagram',
      text: 'Instagram',
      slug: 'instagram'
    }, {
      icon: 'logo-twitter',
      text: 'Twitter',
      slug: 'twitter'
    }, {
      icon: 'mail',
      text: 'Email',
      slug: 'email'
    }, {
      icon: 'phone',
      text: 'SMS',
      slug: 'message'
    }
  ];

  isPicTaken: boolean = false;
  isFrontFacing: boolean = true;
  isFlashOn: boolean = false;
  isOpacityOpen: boolean = false;
  opacity: number = 0;
  selectedId: number;
  selectedProfile: Profile;
  selectedColor: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private actionSheetCtrl: ActionSheetController,
              private alertCtrl: AlertController,
              //private popoverCtrl: PopoverController
  ) {
  }

  /** LIFECYCLE HOOK FUNCTIONS */
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad TabsPage');
    this.tabs.centeredSlides = false;
    this.tabs.initialSlide = this.navParams.data.index ? this.navParams.data.index : 1;
    if (this.getCurrentTab() === 1) {
      this.pageTitle = 'App'
    };
    //this.tabs.lockSwipes(true);
  }

   /*
    * PAGE FUNCTIONS * 
                     */

  toggleSlideLock() {
    this.tabs.lockSwipes(this.selectedId !== null);
    /*if (!this.selectedId) this.tabs.lockSwipes(true);
    else if (this.tabs.isEnd()) this.tabs.lockSwipeToNext(true);
    else if (this.tabs.isBeginning()) this.tabs.lockSwipeToPrev(true);
    else this.tabs.lockSwipes(false);*/
  }

  slideToCamera() {
    //this.toggleProfile(id);
    this.tabs.lockSwipes(false);
    (this.getCurrentTab() === 0) ? 
      this.navCtrl.setRoot('TabsPage', { index: 2 }) : 
      this.tabs.slideTo(2);
    this.slidePos = 'in';
    this.content.resize();
    this.tabs.lockSwipes(true);
  }
  slideToDetails() {
    //this.toggleProfile(id);
    this.pageTitle = this.selectedProfile.name;
    this.tabs.lockSwipes(false);
    this.tabs.slideTo(0);
    this.slidePos = 'out';
    this.content.resize();
    this.tabs.lockSwipes(true);
  }

  slideToProfiles() {
    this.clearSelected();
    this.tabs.lockSwipes(false);
    this.tabs.slideTo(1);
    this.slidePos = 'out';
    this.content.resize();
    this.tabs.lockSwipes(true);
  }

  /** CAMERA FUNCTIONS */
  capturePreview() {
    this.isPicTaken = true;
  }

  deleteCapture() {
    this.alertCtrl.create({
      title: 'Delete Capture',
      message: 'Are you sure you want to delete this?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('dont delete')
        }, {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.isPicTaken = false;
          }
        }
      ]
    }).present();
    
  }

  switchCamera() {
    this.isFrontFacing = !this.isFrontFacing;
  }

  toggleOpacity() {
    this.isOpacityOpen = !this.isOpacityOpen;
    console.log(this.opacityFab._fabs);
  }

  showShareOptions() {
    let shareActionSheet = this.actionSheetCtrl.create({
      title: 'Share'
    });

    const cancelButton = {
      text: 'Cancel',
      role: 'cancel',
      handler: () => console.log('cancel share')
    };

    for (let soc of this.socialMedia) {
      let button = {
        text: soc.text,
        handler: () => console.log(soc.text + ' clicked')
      }
      shareActionSheet.addButton(button);  
    }

    shareActionSheet.addButton(cancelButton);
    shareActionSheet.present();
  }

  toggleProfile(id?: number) {
    console.log('param id = ', (id > -1 ? id : 'no click'));
    
    if (id < 0) this.clearSelected();
    else {
      (this.selectedId === id) ? 
        this.clearSelected() : 
        this.setSelected(id);
    }
    let tempString: string = (this.selectedProfile == null) ? 'null' : this.selectedProfile.name;
    console.log('selectedId ', this.selectedId);
    console.log('selectedProfile ', tempString);
  }

  toggleActive(id: number) {
    return this.selectedId === id;
  }

  getCurrentTab() {
    return this.tabs.getActiveIndex();
  }

  clearSelected() {
    this.selectedId = null;
    this.selectedProfile = null;
  }

  setSelected(id: number) {
    this.selectedId = id;
    this.selectedProfile = this.sampleProfiles[this.selectedId];
  }

  addOrShare(event) {
    if (event === 'add') this.slideToCamera();
    if (event === 'share') this.showShareOptions();
    //console.log(event);
  }
}
