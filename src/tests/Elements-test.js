import assert from 'assert';
import {Elements} from '../..';
import simpleMessage from '../../fixtures/simple-message.json';
import simpleMessageWithDefaultAction from '../../fixtures/generic-message-with-defauilt_action.json';

describe('Elements', () => {
  it('#toJSON', () => {
    const elements = new Elements();
    elements.add({text: 'sup', buttons: [{text: 'Google', url: 'http://google.com'}]});
    assert.deepEqual(simpleMessage, elements.toJSON());
  });

  it('#toJSON with default_action', () => {
    const elements = new Elements();
    elements.add({
      text: 'sup',
      subtext: 'subtext',
      image: 'https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png',
      buttons: [{text: 'Wikipedia', url: 'https://www.wikipedia.org'}],
      defaultAction: {text: 'Wikipedia', url: 'https://www.wikipedia.org'}
    });

    assert.deepEqual(simpleMessageWithDefaultAction, elements.toJSON());
  });
});
