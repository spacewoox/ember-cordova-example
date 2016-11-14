import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    console.log('init');
    controller.triggerAnimation();
  },
});
