'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _ = require('../..');

var _simpleMessage = require('../../fixtures/simple-message.json');

var _simpleMessage2 = _interopRequireDefault(_simpleMessage);

var _genericMessageWithDefauilt_action = require('../../fixtures/generic-message-with-defauilt_action.json');

var _genericMessageWithDefauilt_action2 = _interopRequireDefault(_genericMessageWithDefauilt_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Elements', function () {
  it('#toJSON', function () {
    var elements = new _.Elements();
    elements.add({ text: 'sup', buttons: [{ text: 'Google', url: 'http://google.com' }] });
    _assert2.default.deepEqual(_simpleMessage2.default, elements.toJSON());
  });

  it('#toJSON with default_action', function () {
    var elements = new _.Elements();
    elements.add({
      text: 'sup',
      subtext: 'subtext',
      image: 'https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png',
      buttons: [{ text: 'Wikipedia', url: 'https://www.wikipedia.org' }],
      defaultAction: { text: 'Wikipedia', url: 'https://www.wikipedia.org' }
    });

    _assert2.default.deepEqual(_genericMessageWithDefauilt_action2.default, elements.toJSON());
  });
});
//# sourceMappingURL=Elements-test.js.map
