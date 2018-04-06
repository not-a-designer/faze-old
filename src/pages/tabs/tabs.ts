/** ANGULAR REQUIREMENTS */
import { Component, 
         ViewChild }                   from '@angular/core';

/** IONIC-ANGULAR REQUIREMENTS */
import { IonicPage, 
         ActionSheetController,
         AlertController,
         Content, 
         FabList,
         //ItemSliding, 
         //List, 
         //LoadingController,
         ModalController,
         NavController, 
         NavParams, 
         //PopoverController,
         Slides,
         //ToastController, 
                              }        from 'ionic-angular';

/** IONIC-NATIVE CAMERA PREVIEW IMPORTS */
import { CameraPreview,
         CameraPreviewDimensions,
         CameraPreviewOptions,
         CameraPreviewPictureOptions } from '@ionic-native/camera-preview';

/** APP IMPORTS */
import { Profile }                     from '../../models/interfaces/profile.interface';
import { ProfileMockService }          from '../../services/profile-mock.service';
import { SocialMetadata }              from '../../models/interfaces/social-metadata.interface';

/** ANIMATIONS IMPORT */
import { fade, 
         fadeIn, 
         fadeOut, 
         slideFromLeft, 
         slideFromRight, 
        scale }                        from '../../app/app.animations';


/** 3RD PARTY IMPORTS */
//import * as moment                     from 'moment';


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

  @ViewChild('opacityFab')
  opacityFab: FabList;

  /** PAGE VARIABLES */

  socialData: Array<SocialMetadata> = [
    {
      icon: 'logo-google',
      text: 'Google',
      name: 'google'
    }, {
      icon: 'logo-facebook',
      text: 'Facebook',
      name: 'facebook'
    }, {
      icon: 'logo-instagram',
      text: 'Instagram',
      name: 'instagram'
    }, {
      icon: 'logo-twitter',
      text: 'Twitter',
      name: 'twitter'
    }, {
      icon: 'mail',
      text: 'Email',
      name: 'email'
    }, {
      icon: 'phone',
      text: 'SMS',
      name: 'message'
    }
  ];

  //currentTab: number = 1;

  isPicTaken: boolean = false;
  isFrontFacing: boolean = true;
  isFlashOn: boolean = false;
  isOpacityOpen: boolean = false;
  opacity: number = 0;
  selectedProfile: Profile;
  profiles: Profile[] = [];

  showProfileOptions: boolean = false;
  isSettingsVisible: boolean = true;

  /** CAMERA-PREVIEW VARIABLES */
  //camera-preview.takePicuture parameter
  previewPictureOptions: CameraPreviewPictureOptions = {
    width: window.screen.width,
    height: window.screen.width,
    quality: 85
  };

  //camera-preview.startCamera height and width parameters
  previewDimensions: CameraPreviewDimensions = {
    height: window.screen.height,
    width: window.screen.width
  };

  //camera-preview.startCamera parameter
  previewOptions: CameraPreviewOptions = {
    x: 0,
    y: 0,
    height: this.previewDimensions.height,
    width: this.previewDimensions.width,
    tapPhoto: false,
    toBack: true,
    previewDrag: false,
    camera: this.cameraPreview.CAMERA_DIRECTION.FRONT,
    alpha: 1
  };

  settingsModal = this.modalCtrl.create('SettingsPage', {}, { cssClass: 'settings-modal' });

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private actionSheetCtrl: ActionSheetController,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController,
              //private popoverCtrl: PopoverController,
              private profileService: ProfileMockService,
              private cameraPreview: CameraPreview
  ) {

  }

  /** LIFECYCLE HOOK FUNCTIONS */
  ionViewDidLoad() {
    this.profiles = this.profileService.getProfiles();
    //console.log('ionViewDidLoad TabsPage');
    this.tabs.centeredSlides = false;
    this.tabs.initialSlide = this.navParams.data.index ? 
      this.navParams.data.index : 
      1;
  }

  ionViewDidEnter() {
    // /this.resizeTabs();
    this.logNewTab();
    this.tabs.lockSwipes(true);
    
  }

   /*
    * PAGE FUNCTIONS * 
                     */

  /** NAVIGATION METHODS */
  public getCurrentTab() {
    return this.tabs.getActiveIndex();
  }

  public slideToCamera() {
    this.selectedProfile = this.getSelectedProfile();
    this.unlockTabs();
    if (this.getCurrentTab() === 0) this.navCtrl.setRoot('TabsPage', { index: 2 });
    else this.tabs.slideTo(2);
    this.resizeTabs();
  }

  public slideToDetails() {
    this.selectedProfile = this.getSelectedProfile();
    this.unlockTabs();
    this.tabs.slideTo(0);
  }

  public slideToProfiles() {
    this.unlockTabs();
    this.profileService.selectedId = null;
    this.profileService.setSelectedProfile();
    this.tabs.slideTo(1);
  }

  public handleNavbarActions(event) {
    //if (event === 'add') this.navCtrl.setRoot('TabsPage', { index: 2 });
    if (event === 'share') this.showShareOptions();
    if (event === 'camera') this.slideToCamera();
    if (event === 'delete') this.deleteProfile(this.profileService.selectedId);
    if (event === 'details') this.slideToDetails();
    if (event === 'settings') this.showSettings();
    if (event === 'hide') this.dismissSettings();
    //console.log(event);
  }
  
  public showShareOptions() {
    let shareActionSheet = this.actionSheetCtrl.create({
      title: 'Share'
    });

    const cancelButton = {
      text: 'Cancel',
      role: 'cancel',
      handler: () => console.log('cancel share')
    };

    for (let soc of this.socialData) {
      let button = {
        text: soc.text,
        handler: () => {
          //TODO
          //SHARE FEATURE
          console.log(soc.text + ' clicked');
        }
      }
      shareActionSheet.addButton(button);  
    }
    shareActionSheet.addButton(cancelButton);
    shareActionSheet.present();
  }

  showSettings() {
    this.isSettingsVisible = false;

    this.settingsModal.present();
  }

  dismissSettings() {
    this.isSettingsVisible = true;
    this.settingsModal.onDidDismiss((status: string) => {
      
      if (status && status === 'logout') this.navCtrl.setRoot('LoginPage');
    });
    this.settingsModal.dismiss();
  }

  deleteProfile(event: number) {
    this.alertCtrl.create({
      title: 'Delete Profile',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('dont delete profile')
        }, {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.profileService.removeProfile(event);
            this.tabs.slideTo(1);
          }
        }
      ]
    }).present();
    
  }

  /** CAMERA FUNCTIONS */
  public capturePreview() {
    if (this.isOpacityOpen) this.isOpacityOpen = false;
    this.isPicTaken = true;
  }

  public deletePreview() {
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

  public switchCamera() {
    this.isFrontFacing = !this.isFrontFacing;
  }

  public toggleOpacity() {
    this.isOpacityOpen = !this.isOpacityOpen;
  }

  public toggleFlash() {
    this.isFlashOn = !this.isFlashOn;
  }

  logNewTab() {
    this.resizeTabs();
    console.log('current tab, ', this.getCurrentTab());
  }

  resizeTabs() {
    setTimeout(() => this.content.resize(), 207);
  }

  public lockTabs() {
    //this.content.resize();
    this.tabs.lockSwipes(true);
  }

  private unlockTabs() {
    this.tabs.lockSwipes(false);
  }

  getSelectedProfile() {
    return this.profiles[this.profileService.selectedId];
  }
}
