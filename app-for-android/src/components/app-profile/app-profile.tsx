import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
})
export class AppProfile {
  @State() selected: boolean = false;

  segmentChanged(id: string) {
    console.log('Segment changed', id);
    let el = document.getElementById(`${id}`);
    const segmentlistOptions = Array.from(document.querySelectorAll('ion-list'));
    console.log("segmentlistOptions",segmentlistOptions);
    //let difference = arr1.filter(x => !arr2.includes(x));
    el.hidden= false;
  }


  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Profile: Test</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-toolbar>
          <ion-segment onIonChange={(e) => this.segmentChanged(e.detail.value)}>
            <ion-segment-button value="Friends">
              <ion-label>Friends</ion-label>
            </ion-segment-button>
            <ion-segment-button value="Enemies">
              <ion-label>Enemies</ion-label>
            </ion-segment-button>
          </ion-segment>
        </ion-toolbar>,

        <ion-list id="Friends" hidden={true}>
					<h1>Friends</h1>	
				</ion-list>
        <ion-list id="Enemies" hidden={true}>
					<h1>Enemies</h1>	
				</ion-list>
      </ion-content>,
    ];
  }
}
