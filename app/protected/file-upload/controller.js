import Ember from 'ember';

export default Ember.Controller.extend({
  platform: Ember.inject.service('device/platform'),
  isAndroid: Ember.computed.oneWay('platform.isAndroid'),
  cameraPicture: Ember.inject.service('camera-picture'),
  pictures: Ember.computed.oneWay('cameraPicture.photoList'),

  triggerAnimation() {
    Ember.run.scheduleOnce('afterRender', () => {
      console.log('trigger animation');
      Ember.$('.upload-camera').css({
        'transform': 'translateY(-120px)'
      });
    });
  },
});
