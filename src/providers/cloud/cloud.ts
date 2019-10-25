import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class CloudProvider {
  files:any = [
    { url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
      name: 'No surrender',
      author: 'Judas Priest',
      img: 'https://ionicframework.com/docs/v1/img/blue-album.jpg',
      duration: '3:21'
    },
    {
      url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      name: 'Dream on',
      author: 'Dio',
      img: 'https://ionicframework.com/docs/v1/img/siamese-dream.jpg',
      duration: '4:43'
    },
    { url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
      name: 'Alone',
      author: 'Judas Priest',
      img: 'https://ionicframework.com/docs/v1/img/blue-album.jpg',
      duration: '2:57'
    },
    {
      url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      name: 'Dance of death',
      author: 'Yulunga',
      img: 'https://ionicframework.com/docs/v1/img/siamese-dream.jpg',
      duration: '5:07'
    },
    { url: 'https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3',
      name: 'Horizon',
      author: 'Nightwish',
      img: 'https://ionicframework.com/docs/v1/img/nevermind.jpg',
      duration: '6:15'
    }
  ];
  getFiles() {
    return of(this.files);
  }
}
