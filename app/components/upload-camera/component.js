import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['upload-camera'],
  platform: Ember.inject.service('device/platform'),
  isAndroid: Ember.computed.oneWay('platform.isAndroid'),
  cameraPicture: Ember.inject.service('camera-picture'),
  actions: {
    startCameraPicture() {
      this.get('cameraPicture').cameraCapture();
    },
    importPicture() {
      this.get('cameraPicture').importPicture();
    }
  }
});
