import Ember from 'ember';

export default Ember.Service.extend({
  cordova: Ember.inject.service(),
  photoList: [],
  pushPicture(name, uri) {
    this.get('photoList').pushObject({
      name: name,
      uri: uri
    });
  },

  importPicture() {
    console.log('import');
    navigator.camera.getPicture((imageUri) => {
      console.log('get picture ok');
       window.swal({
        title: 'Type a name',
        text: 'That picture is just perfect!',
        type: 'input',
        showCancelButton: false,
        confirmButtonText: 'Submit',
        closeOnConfirm: true,
        animation: false 
      }, (name) => {
        this.pushPicture(name || '-', imageUri);
      });
    }, () => { }, {
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
    });
  },

  cameraCapture() {
    console.log('hello');
    navigator.camera.getPicture((imageUri) => {
      console.log('get picture ok');
       window.swal({
        title: 'Type a name',
        text: 'That picture is just perfect!',
        type: 'input',
        showCancelButton: false,
        confirmButtonText: 'Submit',
        closeOnConfirm: true,
        animation: false 
      }, (name) => {
        this.pushPicture(name || '-', imageUri);
      });
    }, () => { }, {
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
    });
  },
});
