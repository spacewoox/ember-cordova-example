import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('upload-camera', 'Integration | Component | upload camera', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{upload-camera}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#upload-camera}}
      template block text
    {{/upload-camera}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
