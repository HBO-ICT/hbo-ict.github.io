"use strict";



define('infosite/app', ['exports', 'infosite/resolver', 'ember-load-initializers', 'infosite/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('infosite/components/article-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('infosite/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('infosite/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('infosite/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('infosite/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('infosite/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('infosite/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('infosite/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('infosite/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('infosite/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('infosite/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('infosite/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('infosite/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('infosite/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('infosite/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('infosite/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('infosite/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('infosite/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('infosite/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('infosite/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('infosite/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('infosite/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('infosite/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('infosite/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('infosite/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('infosite/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('infosite/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('infosite/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('infosite/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('infosite/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('infosite/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('infosite/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('infosite/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('infosite/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('infosite/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('infosite/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('infosite/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('infosite/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('infosite/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('infosite/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('infosite/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('infosite/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('infosite/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('infosite/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('infosite/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('infosite/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('infosite/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('infosite/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('infosite/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('infosite/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('infosite/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('infosite/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('infosite/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('infosite/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('infosite/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('infosite/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('infosite/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('infosite/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('infosite/components/compagny-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('infosite/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('infosite/helpers/app-version', ['exports', 'infosite/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('infosite/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('infosite/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('infosite/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('infosite/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('infosite/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'infosite/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('infosite/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('infosite/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('infosite/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('infosite/initializers/export-application-global', ['exports', 'infosite/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('infosite/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('infosite/initializers/load-bootstrap-config', ['exports', 'infosite/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('infosite/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('infosite/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("infosite/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('infosite/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('infosite/router', ['exports', 'infosite/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('software');
    this.route('business');
    this.route('service-management');
    this.route('werkveld', function () {
      this.route('moneybird');
      this.route('thales');
      this.route('switch');
      this.route('denko-ict');
    });
  });

  exports.default = Router;
});
define('infosite/routes/business', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('infosite/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('infosite/routes/service-management', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('infosite/routes/software', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('infosite/routes/werkveld/denko-ict', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('infosite/routes/werkveld/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('infosite/routes/werkveld/moneybird', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('infosite/routes/werkveld/switch', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('infosite/routes/werkveld/thales', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('infosite/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("infosite/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3LAogGDz", "block": "{\"symbols\":[\"navbar\",\"nav\"],\"statements\":[[4,\"bs-navbar\",null,[[\"class\",\"type\",\"fluid\",\"collapsed\",\"onCollapse\",\"onExpand\"],[\"navbar-fixed-top\",[25,\"if\",[[19,0,[\"inverse\"]],\"inverse\"],null],[19,0,[\"fluid\"]],[19,0,[\"collapsed\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"collapsed\"]]],null],true],null],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"collapsed\"]]],null],false],null]]],{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"navbar-header\"],[7],[0,\"\\n    \"],[1,[19,1,[\"toggle\"]],false],[0,\"\\n    \"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[6,\"img\"],[9,\"src\",\"/images/saxionLogo.png\"],[9,\"alt\",\"Saxion logo\"],[9,\"style\",\"height: 30px; display: inline; margin-top: -4px;\"],[7],[8],[0,\"HBO-ICT\"]],\"parameters\":[]},null],[0,\"\\n  \"],[8],[0,\"\\n\"],[4,\"component\",[[19,1,[\"content\"]]],null,{\"statements\":[[4,\"component\",[[19,1,[\"nav\"]]],null,{\"statements\":[[0,\"      \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"index\"],null,{\"statements\":[[0,\"Home\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"business\"],null,{\"statements\":[[0,\"Business\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"service-management\"],null,{\"statements\":[[0,\"Service Management\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"software\"],null,{\"statements\":[[0,\"Software\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"werkveld\"],null,{\"statements\":[[0,\"Werkveld\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null],[6,\"div\"],[9,\"class\",\"container-fluid\"],[7],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"footer container-fluid\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"footer-text col-md-6 col-md-offset-3\"],[7],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"\\n      Saxion HBO-ICT | Project Oriëntatie Studie en Beroep | 2017\"],[6,\"br\"],[7],[8],[0,\"\\n      Nick Schuitema - Niek Herbig - Ruben Smit\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/application.hbs" } });
});
define("infosite/templates/business", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ssNDX5Oa", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"image\"],[\"Business\",\"images/studenten.jpg\"]],{\"statements\":[[0,\"  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\nDe uitstroomrichting Business IT gaat met name over het vaststellen van de wensen van de klant met betrekking tot de IT.\\nDenk hierbij aan het vervangen van het huidige netwerk of de bestaande systemen.\\nHet is dan ook handig dat je goed met mensen overweg kan en goed kan luisteren naar de wensen van de klant.\\nNaast de verkoop van systemen/netwerken kan het ook zo zijn dat er van je wordt gevraagd om de bedrijfsprocessen bloot te leggen.\\nJe moet deze dan op een logische manier rangschikken zodat het systeem weer vlekkeloos kan werken.\\n\"],[8],[0,\"\\n\"],[6,\"h3\"],[7],[0,\"Curriculum\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Dit deel van de pagina is gewijd aan het vakkenpakket dat je de laatste twee kwartielen bij Business IT krijgt.\\n  Deze laatste twee kwartielen bestaan bijvoorbeeld uit de onderstaande vakken.\"],[6,\"br\"],[7],[8],[0,\"\\n  \"],[6,\"strong\"],[7],[0,\"kwartiel 1.3\"],[8],[6,\"br\"],[7],[8],[0,\"\\n  \"],[6,\"strong\"],[7],[0,\"financiën\"],[8],[6,\"br\"],[7],[8],[0,\"\\n  Bij deze les leer je hoe je de financiën van een bedrijf kan automatiseren en de processen die hierbij horen.\"],[6,\"br\"],[7],[8],[0,\"\\n  \"],[6,\"strong\"],[7],[0,\"Databases\"],[8],[6,\"br\"],[7],[8],[0,\"\\n  Bij dit vak leer je hoe je een database ontwerpt, maar ook hoe deze aangepast kunnen worden en de processen die hierbij horen.\"],[6,\"br\"],[7],[8],[0,\"\\n  \"],[6,\"strong\"],[7],[0,\"Projectmanagement\"],[8],[6,\"br\"],[7],[8],[0,\"\\n  Bij dit vak leer je hoe je het beste overzicht kan bewaren binnen een project en ook wat er voor nodig is dit te managen.\"],[6,\"br\"],[7],[8],[0,\"\\n  \"],[6,\"strong\"],[7],[0,\"kwartiel 1.4\"],[8],[6,\"br\"],[7],[8],[0,\"\\n  \"],[6,\"strong\"],[7],[0,\" Procesmanagement\"],[8],[6,\"br\"],[7],[8],[0,\"\\n  Bij dit vak leer je welke processen van belang zijn en hoe je deze goed kan managen.\"],[6,\"br\"],[7],[8],[0,\"\\n  \"],[6,\"strong\"],[7],[0,\"Webontwikkeling\"],[8],[6,\"br\"],[7],[8],[0,\"\\n  Bij dit vak leer je hoe je websites moet ontwikkelen en onderhouden.\"],[6,\"br\"],[7],[8],[0,\"\\n  \"],[6,\"strong\"],[7],[0,\"business English\"],[8],[6,\"br\"],[7],[8],[0,\"\\n  Bij dit vak leer je hoe je in correct en bedrijfsmatig engels kan spreken.\"],[6,\"br\"],[7],[8],[0,\"\\n  \"],[6,\"strong\"],[7],[0,\"Project\"],[8],[6,\"br\"],[7],[8],[0,\"\\n  Voor elk kwartiel moet je ook een project maken. Wat dit project gaat inhouden kunnen wij op dit moment nog niet zeggen omdat dit met het kwartiel verandert.\"],[6,\"br\"],[7],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/business.hbs" } });
});
define("infosite/templates/components/article-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5FJhT4pg", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"card article-card\"],[7],[0,\"\\n\"],[4,\"if\",[[19,0,[\"image\"]]],null,{\"statements\":[[0,\"    \"],[6,\"img\"],[9,\"class\",\"card-img-top col-md-12\"],[10,\"src\",[26,[[18,\"image\"]]]],[10,\"alt\",[26,[[18,\"title\"]]]],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[6,\"div\"],[9,\"class\",\"card-body col-lg-offset-3 col-sm-offset-2 col-lg-6 col-sm-8\"],[7],[0,\"\\n\"],[4,\"if\",[[19,0,[\"title\"]]],null,{\"statements\":[[0,\"      \"],[6,\"h1\"],[9,\"class\",\"card-title\"],[7],[1,[18,\"title\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[11,1],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/components/article-card.hbs" } });
});
define("infosite/templates/components/compagny-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "o1Zm+wIs", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"card compagny-card col-sm-6\"],[7],[0,\"\\n  \"],[6,\"img\"],[9,\"class\",\"card-img-top\"],[10,\"src\",[26,[[18,\"image\"]]]],[10,\"alt\",[26,[[18,\"title\"]]]],[7],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"card-body\"],[7],[0,\"\\n    \"],[6,\"h4\"],[9,\"class\",\"card-title\"],[7],[1,[18,\"title\"],false],[8],[0,\"\\n    \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n      \"],[11,1],[0,\"\\n    \"],[8],[0,\"\\n    \"],[4,\"link-to\",[[19,0,[\"link\"]]],[[\"class\"],[\"btn btn-primary\"]],{\"statements\":[[0,\"Lees meer over \"],[1,[18,\"title\"],false]],\"parameters\":[]},null],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/components/compagny-card.hbs" } });
});
define("infosite/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9X7LFVf4", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"image\"],[\"HBO-ICT\",\"images/studenten.jpg\"]],{\"statements\":[[0,\"  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Welkom bij HBO-ICT. Op deze site kan je informatie vinden over de opleiding HBO-ICT.\\n    Op deze pagina vind je de informatie over het oriënterende deel van de opleiding. Het eerste half jaar bestaat uit het verkennen van het ICT vak. Je zal dus aan hand van de informatie die je hier krijgt en projecten die je moet uitvoeren leren hoe breed het ICT vak daadwerkelijk is. Het eerste deel van het kwartiel zal dan ook voornamelijk bestaan uit theorie lessen en toetsen aan het eind van het kwartiel. Als je het eerste kwartiel doorstaan hebt kom je in het tweede kwartiel. Het tweede kwartiel zal voornamelijk bestaan uit het in de praktijk brengen van wat je in het eerste kwartiel hebt geleerd.\\n    Als je beide kwartielen hebt doorstaan kun je een uitstroomrichting kiezen. De uitstroomrichtingen waar je uit kan kiezen zijn: IT Business, IT Service Management en Software Engineering.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"Curriculum\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Dit deel van de pagina is gewijd aan het vakkenpakket dat je de eerste twee kwartielen gaat krijgen.\\n    Dit geldt nog voor alle stromingsrichtingen, wil je verdere informatie na de eerste twee kwartielen kijk dan bij het desbetreffende uitstromingsprofiel.\\n    Deze eerste twee kwartielen bestaan bijvoorbeeld uit de onderstaande vakken.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"kwartiel 1.1\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Introductie programmeren\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij deze les leer je de basis van het programmeren in Java en werken met de processen.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"infrastructuur en service management\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Binnen het vak infrastructuur en service management leer je het ontwerpen, realiseren, analyseren en het adviseren van procesinfrastructuren.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"analyse bedrijfsprocessen\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Deze les gaat over het leren analyseren van de processen die zich afspelen binnen een bedrijf.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"kwartiel 1.2\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\" projectmatig werken\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij dit vak leer je op een juiste en overzichtelijke manier in een projectvorm te werken.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Object georiënteerd programmeren\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij dit vak leer je wat preciezer, doelgerichter en aan hand van objecten programmeren in Java.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Architectuur infrastructuur\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij dit vak leer je hoe je goed de architectuur van de IT kan analyseren en hoe je deze moet ontwerpen.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Gedrag in organisatie\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij dit vak leer je hoe je het gedrag binnen een organisatie goed kan analyseren en hoe dit toegepast kan worden binnen de organisatie.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Project\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Voor elk kwartiel moet je ook een project maken. Wat dit project gaat inhouden kunnen wij op dit moment nog niet zeggen omdat dit met het kwartiel verandert.\"],[6,\"br\"],[7],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"em\"],[7],[0,\"\\n    HBO-ICT: Techniek op zijn best\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/index.hbs" } });
});
define("infosite/templates/service-management", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WAODNd3a", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"image\"],[\"Service Management\",\"images/studenten.jpg\"]],{\"statements\":[[0,\"  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    IT service management is de uitstroomrichting die zich vooral focust op het helpen ontwerpen/bouwen van een netwerksysteem.\\n    Bij het denken aan het helpen bouwen gaat het dan ook niet alleen maar over het opzetten van het systeem,\\n    maar dit kan ook inhouden dat je de leiding neemt over een team en deze sturing biedt over hoe het opgezet moet worden.\\n    Met deze reden is klantcontact dan ook een belangrijk onderdeel.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"Curriculum\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Dit deel van de pagina is gewijd aan het vakkenpakket dat je de laatste twee kwartielen bij IT service management krijgt.\\n    Deze laatste twee kwartielen bestaan bijvoorbeeld uit de onderstaande vakken.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"kwartiel 1.3\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"archtitectuur en infrastructuur\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij deze les leer je hoe je de architectuur en infrastructuur goed kunt analyseren en aan hand hiervan leer je ook ontwerpen voor de IT ontwikkelen\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Technisch beheer\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij dit vak leer je hoe je een IT systeem goed in beheer neemt.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Projectmanagement\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij dit vak leer je hoe je het beste overzicht kan bewaren binnen een project en ook wat er voor nodig is dit te managen.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"kwartiel 1.4\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\" netwerken\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij dit vak leer je hoe een netwerk is opgebouwd, hoe je dit het beste kan onderhouden of aanpassen/opbouwen.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Applicatiebeheer\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij dit vak leer je een deel programmeren, maar ook de correcte manier van omgaan en gebruik applicaties.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Professionele communicatie\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij dit vak leer je hoe je op een juiste en correcte manier met een klant/collega kan communiceren.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"business English\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij dit vak leer je hoe je in correct en bedrijfsmatig engels kan spreken.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Project\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Voor elk kwartiel moet je ook een project maken. Wat dit project gaat inhouden kunnen wij op dit moment nog niet zeggen omdat dit met het kwartiel verandert.\"],[6,\"br\"],[7],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/service-management.hbs" } });
});
define("infosite/templates/software", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jG7wy3nd", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"image\"],[\"Software\",\"images/studenten.jpg\"]],{\"statements\":[[0,\"  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    De uitstroomrichting Software Engineering focust zicht bijna volledig op het ontwikkelen van software, van het idee tot de realisatie. Hier leer je verschillende vaardigheden en ga je dieper in op vakken zoals programmeren en zal je onder andere programmeertalen leren zoals Java en C++. Tevens moet je goed oog hebben op de onderliggende processen om jouw programma’s goed te laten inspelen op de wensen van de klant.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"Curriculum\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Dit deel van de pagina is gewijd aan het vakkenpakket dat je de laatste twee kwartielen bij Software Engineering krijgt.\\n    Deze laatste twee kwartielen bestaan bijvoorbeeld uit de onderstaande vakken.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"kwartiel 1.3\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Android Programmeren\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij deze les leer je hoe je applicaties kan programmeren voor android toestellen.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"algorithmes\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij dit vak leer je hoe je goed algorithmes toepast en hoe deze werken.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Software ontwerp\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij dit vak leer je hoe je software programmeert maar ook de juiste manier deze te ontwerpen.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"kwartiel 1.4\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\" netwerkservice\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij dit vak leer je hoe een netwerk is opgebouwd en hoe je deze kan onderhouden.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Databases\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij dit vak leer je hoe je een database ontwerpt, maar ook hoe deze aangepast kunnen worden en de processen die hierbij horen.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Requirements en testen\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Bij dit vak leer je hoe je op een juiste manier de requirements opstelt en de juiste manier voor het testen van je omgeving.\"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Project\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    Voor elk kwartiel moet je ook een project maken. Wat dit project gaat inhouden kunnen wij op dit moment nog niet zeggen omdat dit met het kwartiel verandert.\"],[6,\"br\"],[7],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/software.hbs" } });
});
define("infosite/templates/werkveld/denko-ict", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Uo7sbaB4", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/werkveld/denko-ict.hbs" } });
});
define("infosite/templates/werkveld/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5bqbUYk4", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"image\"],[\"Werkveld\",\"images/studenten.jpg\"]],{\"statements\":[[0,\"  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Dit is een stuk over het werkveld\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-lg-offset-3 col-sm-offset-2 col-lg-6 col-sm-8\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\"],[4,\"compagny-card\",null,[[\"title\",\"image\",\"link\"],[\"Moneybird\",\"images/moneybirdLogo.png\",\"werkveld.moneybird\"]],{\"statements\":[[0,\"        \"],[6,\"strong\"],[7],[0,\"Elian Krosse\"],[8],[0,\" is Software Engineer bij Moneybird, een klein bedrijf dat werkt aan online boekhoudsoftware. Hij is hier tijdens zijn stage voor HBO-ICT begonnen en vertelt over over het bedrijf zelf, zijn ervaringen en hoe zijn studie hier in terug komt.\\n\"]],\"parameters\":[]},null],[4,\"compagny-card\",null,[[\"title\",\"image\",\"link\"],[\"Switch\",\"images/switchLogo.png\",\"werkveld.switch\"]],{\"statements\":[[0,\"        Lorem ipsum\\n\"]],\"parameters\":[]},null],[4,\"compagny-card\",null,[[\"title\",\"image\",\"link\"],[\"Thales\",\"images/switchLogo.png\",\"werkveld.thales\"]],{\"statements\":[[0,\"        Lorem ipsum\\n\"]],\"parameters\":[]},null],[4,\"compagny-card\",null,[[\"title\",\"image\",\"link\"],[\"Denko-ICT\",\"images/switchLogo.png\",\"werkveld.denko-ict\"]],{\"statements\":[[0,\"        Lorem ipsum\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/werkveld/index.hbs" } });
});
define("infosite/templates/werkveld/moneybird", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7IDJciEZ", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"image\"],[\"Moneybird\",\"../images/moneybirdLogo.png\"]],{\"statements\":[[0,\"  \"],[6,\"p\"],[9,\"class\",\"card-text text-intro\"],[7],[0,\"\\n    \"],[6,\"img\"],[9,\"class\",\"img-inline-right\"],[9,\"src\",\"../images/moneybirdElianKrosse.jpg\"],[9,\"alt\",\"Elian Krosse\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Elian Krosse\"],[8],[0,\" is Software Engineer bij Moneybird, een klein bedrijf dat werkt aan online boekhoudsoftware. Hij is hier tijdens zijn stage voor HBO-ICT begonnen en vertelt over over het bedrijf zelf, zijn ervaringen en hoe zijn studie hier in terug komt.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[9,\"id\",\"wat-doet-moneybird\"],[7],[0,\"\\n    Wat doet Moneybird\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"kun-je-vertellen-wat-moneybird-zoal-doet-als-bedrijf-welke-producten-maken-jullie-\"],[7],[0,\"\\n    Kun je vertellen wat Moneybird zoal doet als bedrijf, welke producten maken jullie?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Wij ontwikkelen een online softwarepakket, en daarmee kunnen mensen boekhouden en facturen versturen. Dus alles is online, ze gaan naar moneybird.nl, ze loggen in, en als ZZP’er kun je daarin je volledige boekhouding voeren.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"wat-is-jullie-missie-of-doel-\"],[7],[0,\"\\n    Wat is jullie missie of doel?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Ons doel is om mensen daar plezier in te geven. Als je als ZZP’er begint is het vaak de grootste frustratie, en misschien ook de grootste onwetendheid: Hoe doe je je boekhouding? Je kunt het op papier gaan doen, of in Excel, maar dat gaat toch frictie opleveren. Je hebt toch niet de controle erop, je ziet niet precies of de facturen betaald zijn. Wij proberen zo veel mogelijk slimmigheidjes in te bouwen zodat mensen het veel makkelijker hebben. Je vult gewoon in wat je gedaan hebt voor de klant en wat je geleverd hebt, en dat is eigenlijk alles wat je moet doen. Je klikt op klaar en de factuur gaat automatisch naar de administratie van de klant. Die hoeft maar op de betaalknop te drukken en het is helemaal verwerkt. Het is allemaal via iDeal geregeld, maar incasso's zijn ook mogelijk en we zijn bezig om de betalingen ook direct via de banken te regelen.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"dus-jullie-proberen-het-zo-makkelijk-mogelijk-te-maken-voor-de-klant-\"],[7],[0,\"\\n    Dus jullie proberen het zo makkelijk mogelijk te maken voor de klant.\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Ja, en dan het liefst met zo min mogelijk functionaliteit ingebouwd zodat je een heel simpele interface hebt, zodat de klant meteen denkt: \\\"Hier kan ik mee uit de voeten\\\". Maar onderwater is het zo slim dat alles in een keer werkt. De klant moet niet eens door hebben dat het zo slim is. Ze moeten denken \\\"Dit werkt heel simpel\\\", maar tegelijkertijd nemen we al het werk uit handen.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"is-het-niet-heel-lastig-om-die-balans-te-vinden-tussen-gebruiksvriendelijkheid-en-functionaliteit-\"],[7],[0,\"\\n    Is het niet heel lastig om die balans te vinden tussen gebruiksvriendelijkheid en functionaliteit?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Dat is inderdaad een continu gevecht dat we hebben. Dan denken we dat we ergens een knopje voor kunnen toevoegen, maar dan zijn er meteen drie werknemers die zeggen dat als we daar een knopje voor toevoegen, dan maken we het lastiger, en hoeveel mensen helpen we hier mee. Zijn er 300 op de 3000 mensen die hier gebruik van maken, dan is het waarschijnlijk niet de moeite waard want 10% van de mensen is te weinig. Dat zijn afwegingen die we hier continu maken.\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"img-container\"],[7],[0,\"\\n    \"],[6,\"img\"],[9,\"class\",\"img-inline-full\"],[9,\"src\",\"../images/moneybird1.jpg\"],[9,\"alt\",\"Werknemers aan het werk bij Moneybird\"],[7],[8],[0,\"\\n    \"],[6,\"small\"],[9,\"class\",\"img-caption\"],[7],[0,\"Werknemers aan het werk bij Moneybird\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"wat-is-jullie-doelgroep-\"],[7],[0,\"\\n    Wat is jullie doelgroep?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    We richten ons voornamelijk ZZP’ers en kleine ondernemers, maar we hebben wel een aantal klanten die langzaam groot zijn geworden. Dat is leuk want dat geeft nieuwe inzichten, maar dat is tegelijkertijd ook waar we de klanten gaan verliezen. Op het moment dat het bedrijf groeit, dan hebben ze andere wensen aan het pakket dan mensen die een kleiner bedrijf hebben. Tot op zekere hoogte is het zinvol om hierin mee te gaan, maar op een gegeven moment moet je niet functionaliteiten in gaan bouwen voor iemand die groter is geworden, want het gros van onze klanten is een klein bedrijf, en die hebben niets aan die functionaliteit. Dat maakt het pakket alleen maar lastiger.\"],[6,\"br\"],[7],[8],[0,\"\\n    We zeggen wel echt heel hard: \\\"Als je te groot bent voor ons helpen we je met alle plezier overstappen, we zijn blij om je als klant te zien gaan\\\". Het gaat ons er om dat ze gelukkig zijn en een goede tijd hebben gehad met de administratie in Moneybird. Dan laten we ze met plezier gaan en gaan we niet moeilijk zitten doen om ze binnen te houden.\"],[6,\"br\"],[7],[8],[0,\"\\n    Dat is ook het voordeel van ons businessmodel. Onze klanten betalen €10 €17,50 of €25 per maand en daar zit verder geen onderscheid in, en we hebben veel gebruikers. Eentje meer of minder maakt niet veel uit, maar we hebben het liefst dat iedereen tevreden is. Als je niet tevreden bent kun je beter naar een ander pakket toe gaan. Die luxe die hebben we.\\n  \"],[8],[0,\"\\n  \"],[6,\"em\"],[7],[0,\"\\\"Het gaat er om dat de klanten gelukkig zijn\\\"\"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"jullie-zijn-een-innovatief-bedrijf-waaruit-zich-dat-in-\"],[7],[0,\"\\n    Jullie zijn een innovatief bedrijf, waaruit zich dat in?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    In het feit dat wij niet kijken naar de cijfertjes, dat doen we wel maar niet als hoofdmoot. Dus als wij in een maand iets slechter of beter draaien dan blijven we nog steeds kijken naar onze eigen kracht, waar zouden we in kunnen verbeteren in functionaliteit. We kijken niet naar hoe we meer kunnen verdienen aan onze klanten, maar hoe we onze klanten nog beter kunnen helpen. Ik denk dat het als innovatief bedrijf heel belangrijk is dat je niet gaat kijken naar waar je winst op kunt maken en welke slagen je kunt maken om meer geld te verdienen, maar dat je je product zo sterk maakt dat je concurrenten niet eens in de buurt kunnen komen. Je bent dus continu bezig met je eigen kracht, en maakt je product nog beter en nog sterker.\"],[6,\"br\"],[7],[8],[0,\"\\n    Pas heeft een bedrijf een concurrent gelanceerd voor ons product. Wat je meteen zag was dat een aantal van onze gebruikers, maar ook andere mensen in de markt, dat gingen gebruiken om het te testen. En iedere keer lazen wij berichten waarin stond: \\\"Waarom gebruiken mensen geen Moneybird? Dit programma werkt helemaal niet fijn\\\". Voor hun is dat iets ongrijpbaars, waarom Moneybird beter is dat het product dat zij gebouwd hebben. Maar wij weten gewoon dat we zo veel tijd hebben gestoken in het perfectioneren van ons product. Over elk knopje is nagedacht waarom het op die plek staat en waarom het zo werkt. Voor hun is dat iets wat bijna niet na te bouwen is. Zij denken geld te gaan verdienen aan een boekhoudpakket, maar wij gaan uit van onze eigen kracht en willen niet imiteren en zetten een eigen sterk product neer. En altijd vanuit de filosofie: hoe kunnen we het product prettiger maken voor onze klanten.\"],[6,\"br\"],[7],[8],[0,\"\\n    Het is heel verfrissend, want financieel gezien zijn we niet afhankelijk van één klant. Sommige bedrijven moeten klanten binnen houden en grote projecten draaien, en dat is heel anders dan hoe wij dat doen. Als ons project drie maanden uitloopt dan kijken we waarom dat uitgelopen is en als dat een goede reden heeft wordt niemand er boos om. Het product is er beter op geworden en daar draait het om. Een ander bedrijf zal misschien zien dat de budgetten overschreden zijn dus dat het niet goed gaat. Dat is een luxe die we hebben.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[9,\"id\",\"werken-bij-moneybird\"],[7],[0,\"\\n    Werken bij Moneybird\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"hoeveel-medewerkers-telt-het-bedrijf-\"],[7],[0,\"\\n    Hoeveel medewerkers telt het bedrijf?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Twee mensen zijn hier continu bezig met de gebruiksvriendelijkheid en er zijn ongeveer 12 ontwikkelaars. Daarnaast hebben we 6 supportmedewerkers, iemand voor de marketing en een voor data-analyse. Ook hebben we 2 office en HR-medewerkers. Dus totaal 25 tot 30 man. De kern van het bedrijf zijn de ontwikkelaars. We zijn ooit opgericht door 3 ontwikkelaars, inmiddels zijn er daar nog 2 van over.\"],[6,\"br\"],[7],[8],[0,\"\\n    Het bedrijf is echt vanuit het ontwikkelen opgezet. Dat is ook de manier waarop hier gewerkt wordt, we hebben een grote rustige werkplek waar niet veel gesproken wordt, behalve in de vergaderruimtes. Het is echt de bedoeling dat je daar gefocust kunt werken zonder afleiding. Als je een vraag hebt loop je dus niet naar je collega toe, maar daar gebruiken we bijvoorbeeld Slack voor. Zo zorgen we ervoor dat je de momenten waarop je onderbroken wordt zelf kunt kiezen. Zo kun je lekker doorwerken en dat is de filosofie van het bedrijf; echt voor de ontwikkelaars.\"],[6,\"br\"],[7],[8],[0,\"\\n    Alles is ingericht op de ontwikkelaars en de rest is daar omheen gebouwd. De supportmedewerkers en de interactiedesigners zijn daar later pas bij gekomen. Tot 5-6 man zijn we gewoon gegroeid met alleen ontwikkelaars.\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"img-container\"],[7],[0,\"\\n    \"],[6,\"img\"],[9,\"class\",\"img-inline-full\"],[9,\"src\",\"../images/moneybird2.jpg\"],[9,\"alt\",\"Flexwerken vanuit het buitenland\"],[7],[8],[0,\"\\n    \"],[6,\"small\"],[9,\"class\",\"img-caption\"],[7],[0,\"Werken kan overal, zolang er maar internet is. Bijvoorbeeld in Finland, waar deze Moneybird werknemer aan de slag gaat.\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"helpen-jullie-als-ontwikkelaars-ook-mee-in-het-support-\"],[7],[0,\"\\n    Helpen jullie als ontwikkelaars ook mee in het support?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Ja, we hebben daar een brug tussen geslagen, tussen support en ontwikkelaars. Wat je vaak ziet is dat sommige vragen niet goed beantwoord kunnen worden door de supportmedewerkers. Daar zitten soms bugs of fouten in die voor een klant specifiek zijn en die heel lastig te achterhalen zijn. Dus is het wel handig als een ontwikkelaar mee kijkt. We rouleren dan met twee ontwikkelaars per week die meewerken met het support. Dus alle lastige technische vragen beantwoorden zij, en als er dan een fout uit komt proberen ze die meteen op te lossen, soms zelfs binnen een uur. Dat is wel een kracht die we hebben, want je voorkomt dan dat honderden klanten tegen hetzelfde probleem aanlopen.\"],[6,\"br\"],[7],[8],[0,\"\\n    Het is ook heel goed als je software ontwikkeld om een beetje klantcontact te hebben, want op die manier zie je gewoon waar klanten tegenaan lopen. Een supportmedewerker denkt misschien dat we daar een help artikeltje voor moeten schrijven, maar als ontwikkelaar denk je: \\\"Waarom stelt die klant überhaupt die vraag? En waarom zouden we er een help artikel voor schrijven als ik het probleem bij de bron kan aanpakken.\\\" Dus je krijgt veel beter inzicht in wat er speelt en hoe je het product zou moeten uitwerken, en uiteindelijk levert dat een beter product op.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"hoe-hebben-jullie-de-werkvloer-georganiseerd-gaat-elke-werknemer-gewoon-lekker-zijn-gang-\"],[7],[0,\"\\n    Hoe hebben jullie de werkvloer georganiseerd, gaat elke werknemer gewoon lekker zijn gang?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Dat is inderdaad interessant. We werken niet met een systeem als scrum bijvoorbeeld, we werken wel Agile. Dus we draaien projecten, en die draaien we vaak 6 weken lang. Daar werken dan 2 of 3 ontwikkelaars aan en dat is dan het grote langetermijndoel waaraan gewerkt wordt. En in de tussentijd ben je gewoon vrij om zelf taken op te pakken. Dat gaat natuurlijk naar inzicht en met een klein beetje sturing, maar ik denk dat eigenlijk alle ontwikkelaars hier wel een goede inschatting kunnen maken wat ze zouden moeten oppakken zonder dat erop gestuurd wordt. Dat is eigenlijk iets heel magisch want er is een hele grote lijst met honderden taken die gedaan moeten worden. En als ontwikkelaar heb je daar eigenlijk de vrije hand in wat je gaat oppakken. Het is natuurlijk vanzelfsprekend dat als je iets leuks gaat oppakken wat eigenlijk niet noodzakelijk is op het moment dat we het heel druk hebben, we elkaar daarop aanspreken, en dan is het opgelost. Maar het is niet zo dat er een manager zit die de taken uitdeelt, het is allemaal heel vrij.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[9,\"id\",\"de-opleiding-van-de-werknemers\"],[7],[0,\"\\n    De opleiding van de werknemers\"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"welke-opleidingsachtergrond-heeft-het-personeel-hier-\"],[7],[0,\"Welke opleidingsachtergrond heeft het personeel hier?\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"Heel divers, we hebben voornamelijk Hbo’ers zitten en een aantal met een universitaire opleiding en een enkeling heef alles zelf aangeleerd. Wat dat betreft is opleiding niet heel belangrijk, we kijken niet persé naar de opleiding maar het is wel een eerste inschatting. Het gaat uiteindelijk om wat je kunt, sommige mensen bewijzen zich in een paar weken, dat ze laten zien dat ze weten hoe het in de praktijk zit. Het is niet zo dat een universitair opgeleid iemand hier beter betaald krijgt dan iemand van het hbo, daar wordt niet naar gekeken. Je rol en toegevoegde waarde zijn veel belangrijker.\"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"img-container\"],[7],[0,\"\\n    \"],[6,\"img\"],[9,\"class\",\"img-inline-full\"],[9,\"src\",\"../images/moneybird3.jpg\"],[9,\"alt\",\"Een lunchlecture van Moneybird\"],[7],[8],[0,\"\\n    \"],[6,\"small\"],[9,\"class\",\"img-caption\"],[7],[0,\"Een lunchlecture voor HBO-ICT studenten van Saxion gegeven door een werknemer van Moneybird\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"welke-opleiding-heb-je-zelf-gedaan-\"],[7],[0,\"\\n    Welke opleiding heb je zelf gedaan?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    HBO-ICT, ik ben met het afstuderen hierbinnen komen rollen. Ik deed voor het afstuderen nog een minor ondernemen, dat was een verbredende minor, en daar was ik met mijn eigen bedrijfje bezig. Toen zei een docent van mij dat ik een ondernemer moest vinden waar ik me aan kon spiegelen en waar je mee kunt sparren. Op dat moment zag ik op Tweakers een filmpje voorbijkomen van Moneybird in de beginfase. Toen heb ik ze gewoon eens aangesproken met de vraag of we eens konden praten. Na dat gesprek boden ze me meteen een afstudeerplek aan en van het een kwam het ander. Na het afstuderen heb ik eerst deeltijd gewerkt en daarnaast ben ik bezig geweest met mijn eigen bedrijf. Maar op een gegeven moment kwam ik erachter dat combineren heel lastig was en dat ik hier zoveel voldoening uit het werk kon halen dat ik liever hier aan de slag ging dan dat ik verder ging met mijn bedrijfje. En dat is me tot nu toe goed bevallen.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[9,\"id\",\"de-studie-hbo-ict\"],[7],[0,\"\\n    De studie HBO-ICT\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"heb-je-nog-tips-voor-studenten-die-erover-nadenken-in-dit-werkveld-aan-de-slag-te-gaan-\"],[7],[0,\"\\n    Heb je nog tips voor studenten die erover nadenken in dit werkveld aan de slag te gaan?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Ik denk dat het heel belangrijk is dat je vooral naast je studie bezig bent. Dus niet alleen kijken naar welke vakken je aangeboden krijgt, maar kijk naar de dingen die je echt prikkelen en leuk vindt om te doen. Ga zelf dingen leren en ga verder dan school je aanbiedt. Ik denk dat daar vooral de kracht ligt van een goede student. En als je het leuk vindt om te ondernemen en je bent een beetje charismatisch, je kunt je product verkopen, probeer dan gewoon eens te starten tijdens je studie. En als je aan het werk gaat ga dan vooral shoppen en ga niet bij de eerste-de-beste zitten. Bij een stage ook, schrijf minimaal 2 bedrijven aan en ga ze eens vergelijken. Praat met ze en kijk hoe het bedrijf werkt. Wat ik zelf vak deed was mijn oud klasgenoten vragen wat ze verdienden en wat ze deden bij hun bedrijf. Zo krijg je een heel goed beeld van wat er in de markt speelt. En dat kun je dan ook weer gebruiken om te onderhandelen, je maakt elkaar daarmee sterker.\\n  \"],[8],[0,\"\\n  \"],[6,\"em\"],[7],[0,\"\\\"Een vak zoals concurrency, daar heb ik iedere dag nog profijt van.\\\"\"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"zijn-er-dingen-in-je-studie-waar-je-echt-wat-aan-gehad-hebt-\"],[7],[0,\"\\n    Zijn er dingen in je studie waar je echt wat aan gehad hebt?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Je krijgt een heel brede basis set aan kennis mee, en die is altijd handig. Een vak zoals concurrency, daar heb ik iedere dag nog profijt van. In het begin dacht ik: \\\"Wat is dit?\\\". Maar elke dag nog gebruik je de filosofie en de denkwijzen de je hebt aangeleerd. Die is heel waardevol.\"],[6,\"br\"],[7],[8],[0,\"\\n    Van de minor ondernemen vond ik zelf heel leuk dat het een verbredende minor was. Vooral omdat je op een compleet ander vlak aan het werk bent. Opeens moet je nadenken over hoe marketing in elkaar zit, hoe je jezelf verkoopt als persoon. Dat is best wel leuk want dat kom je altijd wel weer tegen. Als je een functioneringsgesprek hebt of als je gaat onderhandelen over je salaris, dan heb je dat nodig. Je kunt wel wachten tot iemand je geld geeft, maar je kunt er ook zelf achteraangaan.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[9,\"id\",\"de-toekomst\"],[7],[0,\"\\n    De toekomst\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"hoe-denk-je-dat-het-werkveld-er-over-10-jaar-uit-zal-zien-waar-zullen-we-dan-mee-bezig-zijn-\"],[7],[0,\"\\n    Hoe denk je dat het werkveld er over 10 jaar uit zal zien, waar zullen we dan mee bezig zijn?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Ik denk dat het nog veel gekker wordt dan dat het nu is. Er wordt veel geautomatiseerd en daar hebben we nu al te weinig mensen voor. Alles wat geautomatiseerd wordt moet ook onderhouden worden en ik denk dat er daarom echt een verdubbeling nodig is in mensen die software ontwikkelen en onderhouden. De maatschappij wordt er steeds afhankelijker van, zelfs de belastingdienst is volledig geautomatiseerd. Ook al die systemen moeten onderhouden worden, als dat plat gaat gaan heel veel dingen stuk. Dus de afhankelijkheid van ICT-systemen wordt steeds groter.\"],[6,\"br\"],[7],[8],[0,\"\\n    Ik denk ook dat programmeur steeds meer een beroep wordt zoals dokter en advocaat worden gezien, omdat het steeds meer een beroep is dat de maatschappij draaiende houdt. Je verandert de wereld ook echt, met het werk dat ik hier de afgelopen 4 jaar heb gedaan heb ik misschien wel honderden boekhouders werkloos gemaakt, gewoon omdat ik het makkelijker heb gemaakt voor de ondernemer om het zelf te doen. Is dat erg, misschien. Maar je verandert de maatschappij wel, en de ondernemers zijn er heel blij mee. Voor hun is de drempel tot ondernemen een stuk lager, want boekhouden kun je zelf.\"],[6,\"br\"],[7],[8],[0,\"\\n    ICT verandert de wereld. Neem Airbnb bijvoorbeeld, heel Amsterdam staat op zijn kop, en de wereld weet even niet wat ze er mee aan moeten. Pokémon Go, een simpel appje waar kinderen een beetje mee spelen, maar het veroorzaakt wel echte problemen in de echte wereld. Zo zie je dat software een enorme impact heeft op de wereld.\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/werkveld/moneybird.hbs" } });
});
define("infosite/templates/werkveld/switch", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2I8f0hbS", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"image\"],[\"Switch\",\"../images/switchLogo.png\"]],{\"statements\":[[0,\"  \"],[6,\"p\"],[9,\"class\",\"card-text text-intro\"],[7],[0,\"\\n    \"],[6,\"img\"],[9,\"class\",\"img-inline\"],[9,\"src\",\"../images/switchStock.png\"],[9,\"alt\",\"switch\"],[7],[8],[0,\"\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a condimentum urna. Curabitur convallis, tortor eget gravida tempor, dolor tortor ullamcorper felis, et consequat urna ante eget sem. Morbi molestie augue ut augue placerat dignissim. Phasellus in orci vel turpis elementum congue id vel turpis. Cras ac ultrices ligula. Donec sagittis libero id leo tincidunt, in viverra urna tincidunt. Nullam malesuada tempus metus consectetur dignissim. Sed non eros vel lorem elementum congue.\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Proin viverra luctus justo, in rhoncus odio aliquam eget. Nunc vehicula aliquam sagittis. Maecenas rutrum at nibh eget sollicitudin. Donec facilisis dignissim lacus, quis mollis mauris finibus in. Etiam sit amet leo eu augue dapibus aliquet in eu tortor. Vestibulum mattis congue nibh, non consequat mauris feugiat nec. Maecenas ac aliquam dui.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"Vehicula aliquam\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    In hac habitasse platea dictumst. Pellentesque ut massa porta, maximus mauris in, iaculis leo. Duis hendrerit urna eget arcu aliquam, a suscipit turpis congue. Nulla varius volutpat rutrum. Sed eget interdum lacus. Praesent suscipit, risus quis imperdiet consectetur, quam sem elementum velit, sed lacinia magna neque in quam. Maecenas vitae ultrices dui. Pellentesque ultricies eleifend condimentum. Vestibulum fermentum neque quis mauris auctor venenatis. Sed semper orci at faucibus facilisis.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Nisl et maximus\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Maecenas sit amet ornare tortor. Quisque feugiat sit amet lorem ac lobortis. Proin quis enim id urna cursus hendrerit vel nec sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eu gravida neque. Mauris scelerisque sit amet neque nec sodales. Aenean placerat tortor vel aliquet gravida. Aenean ut odio gravida, pellentesque purus id, varius mi. Nunc non ex ac mauris vehicula ornare at nec felis. Sed varius augue sed feugiat mattis. Sed sit amet metus sapien. Morbi tristique eget nisl et maximus. Proin porttitor rhoncus euismod.\\n  \"],[8],[0,\"\\n  \"],[6,\"em\"],[7],[0,\"Cras egestas congue libero, vitae tempus magna.\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Sed vestibulum lacus non mollis porta. Quisque efficitur pretium nisl, non dapibus lacus commodo ac. Ut mattis urna quis libero pharetra, vitae consequat leo euismod. Fusce vel dui nibh. Maecenas blandit, leo in consequat interdum, tortor purus gravida sapien, ut feugiat urna nisl imperdiet ante. In et pulvinar lorem. Sed vel eros ipsum.\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/werkveld/switch.hbs" } });
});
define("infosite/templates/werkveld/thales", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wf2iTFMe", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"image\"],[\"Thales\",\"../images/moneybirdLogo.png\"]],{\"statements\":[[0,\"  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[6,\"img\"],[9,\"class\",\"img-inline-right\"],[9,\"src\",\"../images/moneybirdElianKrosse.jpg\"],[9,\"alt\",\"Elian Krosse\"],[7],[8],[6,\"strong\"],[7],[0,\"Marcel Brummelaar\"],[8],[0,\" is Project Portfolio Manager bij Thales. Thales is een wereldwijde onderneming die zich bezig houdt met elektronica, luchtvaart, defensie en informatietechnologie. Hij is hier begonnen na dat hij de opleiding HT meetkunde heeft afgerond en de opleiding informatica had afgerond op de Universiteit van Twente. Na een aantal baantjes al te hebben gehad besloot hij niet meer zo ver te willen reizen en is daarom aan de slag gegaan bij Thales.\"],[8],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"Thales als bedrijf\"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Wat doet Thales als bedrijf?\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"Thales houdt zich bezig met elektronica, luchtvaart, defensie en informatietechnologie. Hier ontwikkelen ze de apparatuur voor, maar ook de programmatuur.\"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Waaruit bestaan de afdelingen bij Thales\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"Je hebt twee verschillende zijdes binnen Thales, Hengelo. De eerste zijde focust zich op het ontwikkelen en onderhouden van de radarsystemen en bestaat uit zo’n 400 man.\\n        De tweede zijde van Thales is gericht op zijn gebruikers en de gebruikersprocessen. Op de tweede zijde van Thales werken zo’n 70 man. Die 70 man zijn weer onder te verdelen in verschillende teams.\\n        Er zijn 4 a 5 teams bezig de systemen te onderhouden en de applicaties goed te laten runnen. Er is ook 1 apart team dat zich bezig houdt met de architectuur, de security en de projecten binnen Thales. Dit team dat zich hier mee bezig houdt is ook overkoepelend voor de andere teams en communiceert dus ook met deze gebruikers wat de eisen en wensen zijn of de aanpassingen die er nodig zijn.\\n        Er is ook nog 1 apart team dat zich bezig houdt met de deliveries (bezorgen en vervangen van de oudere/ beschadigde apparatuur) en de service en afgesloten contracten.\\n\\n        De 4 a 5 teams zijn ook nog weer onderverdeeld in afdelingen. Deze vallen onder de volgende afdelingen: Business Management Applicaties, Applicaties mensen werkplekken, Applicaties Engineering, harde IT( Werken aan de servers,netwerk of andere systemen.)\"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Welke functies zijn er binnen Thales?\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"1: Productowner: Deze rol bepaalt wat voor een werk er moet gebeuren en wat belangrijk is.\\n2: De engineers en de specialisten: Deze mensen zorgen ervoor dat alles werkt en goed blijft werken       of in sommige gevallen zorgen voor het aanpassen van de applicatie.\\n3: Solution Manager: Deze mensen kijken naar wat is waar nodig en welke applicaties kunnen hiervoor gebruikt worden.\"],[8],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"Marcel Brummelaar\"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\" Welke afdeling bent u zelf werkzaam?\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"Marcel is zelf werkzaam op de afdeling Architectuur, dit is dus ook de afdeling die zich bezig houdt met de vernieuwing of aanpassingen maken op de bestaande systemen/netwerk. \"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Wat is uw functie binnen het bedrijf:\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"De functie die ik heb heet: Project Portfolio Manager. De Project Portfolio Manager bepaalt het budget voor de projecten gezamenlijk met de werknemers. Dit wordt dan ook het gehele jaar bijgehouden. Dit is het proces waar de Project Portfolio Manager zich voornamelijk mee bezig houdt.\"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Hoe bent u terecht gekomen bij Thales en welke opleidingen heeft u gevolgd?\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"  Hij is zelf begonnen met de opleiding HT meetkunde in Utrecht en daarna heeft hij op de Universiteit Twente Informatica gevolgd. Na de opleiding is hij gaan werken in de vastgoed registratie als informatie analist bij CMG Utrecht. Hij is daar na een aantal jaar mee gestopt, omdat hij het reizen zat was. Daarna heeft hij werk gevonden als informatiemanager bij Kadaster. Dit hield in dat hij een brug vormde tussen de gebruikers en de IT afdeling om er zo voor te zorgen dat ze de juiste apparatuur en applicaties gebruiken om een bedrijf goed te laten lopen. In deze functie werd hij het na een aantal jaar ook weer zat om veel heen en weer te reizen. Toen hoorde hij dat er een vacature beschikbaar was bij Thales en is toen daar aangenomen en daar begonnen. Hij heeft hier gewerkt als architect, consultant en projectleider. Toen hij hoorde dat er een functie vrijkwam als projectmanager heeft hij zich hier voor aangemeld en is zo op deze functie als Project Portfolio Manager terecht gekomen.\"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Wat zijn de dingen waar de IT zich volgens u mee bezig houdt?\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"1: het leveren van IT services en vragen beantwoordden of problemen oplossen van de helpdesk.\\n    2: Run en operate, dit houdt in het onderhouden van de systemen, maar deze ook monitoren.\\n    3: Het vernieuwen van de bestaande systemen of applicaties.\\n    4: de IT helpt ook met ondersteuning van alle werkprocessen en automatisering zodat alles zo goed en efficiënt mogelijk verloopt.\"],[8],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"Vernieuwing\"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Welke vernieuwingen zijn heeft u de afgelopen jaren gezien en meegemaakt?\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"De security is binnen Thales een nieuw onderdeel sinds een jaar of 3 a 4. Dit was een grote verandering, omdat door deze verandering er een compleet nieuwe beveiligde omgeving opgezet moest gaan worden. Dit kwam dan ook omdat er allemaal nieuwe verbindingen naar het bedrijf toe liepen en omdat het bedrijf met overheidsgevoelige informatie werkt dit natuurlijk niet naar buiten mag komen. Het systeem is dan ook dus op meerdere manieren beveiligd. Ze hebben hier aan gedacht  om de buitenste laag af te dekken met firewalls, maar ook dingen als poorten dicht gooien dat ze niet zomaar naar binnen kunnen komen. Er is ook aan gedacht dat als ze wel kunnen komen dat ze nog niet veel kunnen en ook dat degene die binnen is gedrongen achterhaald kan worden.\\n\\n    Nog een grote verandering is het gebruik van de cloud. Ze hosten vanuit Thales een soort Private Cloud waar hun werknemers mee kunnen verbinden. Dit wordt gehost vanaf een server die ze daar hebben staan en zorgt ervoor dat de werknemers die daar verbinding mee maken gebruik kunnen maken van de applicaties die ze nodig hebben. De omgeving waar ze in werken is verder ook compleet gevirtualiseerd en runt op Citrix.\\n\\n    Nog een grote verandering is de werkwijze. De werkwijze van Thales is tot een aantal jaren voorheen altijd zo geweest dat er veel specialisten aan het werk waren binnen het bedrijf die zich bezig hielden met één enkele applicatie die dan vaak ook zelf nog verder geprogrammeerd of ingesteld moet worden. Echter is dit in de laatste aantal jaren volledig omgedraaid. Daarmee bedoel ik dat er niet veel geprogrammeerd meer hoeft te worden, omdat er zoveel verschillende softwarepakketten al beschikbaar zijn. Dit zorgt er voor dat er dan ook bijna niks meer geprogrammeerd hoeft te worden.\\n    De meeste pakketten hoeven daarom ook alleen maar geïmplementeerd te worden. Daarnaast kiest Thales ervoor de softwarepakketten uit te besteden aan andere bedrijven. Deze mensen nemen die applicaties dan ook in beheer of zullen deze aanpassen waar nodig. Het is echter niet zo dat er helemaal geen specialistische mensen meer nodig zijn. Dit komt omdat er bedrijfs specifieke apparatuur nodig kan zijn zoals: specifieke chips. Als dat het geval is moet dit nog wel zelf geprogrammeerd worden.\\n\\n    Er is ook een nieuw systeem geïmplementeerd dat heet de T-shape. Dit houdt in dat ze er voor willen zorgen dat de mensen zich niet meer zo gaan specialiseren op één bepaald onderdeel van de organisatie, maar dat ze zich juist meer gaan richten op meerdere gebieden waardoor ze breder inzetbaar worden.\"],[8],[0,\"\\n    \"],[6,\"h5\"],[7],[0,\"Hoe wordt er bepaald of er vernieuwing moet komen en zo ja hoe wordt dit uitgevoerd?\"],[8],[0,\"\\n      \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"Ze hebben een ISMP ( Important Service Master Plan) minstens één keer in het jaar. In deze overleggen wordt ook het budget voor vernieuwing/ projecten vastgelegd. Deze vergadering wordt gehouden met alle vestigingen ook uit verschillende landen. Aan hand van deze gesprekken en het budget kan bepaald worden welke projecten ze kunnen en willen gaan doen. Als er een project uitkomt dat ze willen gaan uitvoeren. Dan wordt dit eerst besproken met de gebruikers en welke eisen ze aan hieraan willen stellen. Er wordt ook gekeken waar het systeem aan moet gaan voldoen gezien vanuit de business eisen/doelstellingen. Als het project is vastgesteld wordt dit ook nog doorgesproken met de Architectuur Engineer en de Enterprise Engineer. Deze twee mensen bekijken ook of dat het nieuwe/aangepaste systeem voldoet aan de eisen en richtlijnen van het bedrijf of dat het alleen op een bepaalde vestiging geïmplementeerd moet worden of door alle vestigingen moet worden aangenomen. Als het project wordt aangenomen dan bestaat het project uit verschillende gates. De eerste gate is het vaststellen van het project en kijken waaruit het bestaat. De tweede gate is het uitzoeken of de oplossing die ze hebben wel daadwerkelijk de beste oplossing is. De derde gate is pas het uitvoeren van het project.\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/werkveld/thales.hbs" } });
});


define('infosite/config/environment', ['ember'], function(Ember) {
  var prefix = 'infosite';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("infosite/app")["default"].create({"name":"infosite","version":"0.0.0+040ec522"});
}
//# sourceMappingURL=infosite.map
