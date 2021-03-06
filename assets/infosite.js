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
      this.route('denko-ict');
      this.route('previder');
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
define('infosite/routes/werkveld/previder', ['exports'], function (exports) {
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
  exports.default = Ember.HTMLBars.template({ "id": "bvU7ZHQg", "block": "{\"symbols\":[\"navbar\",\"nav\"],\"statements\":[[4,\"bs-navbar\",null,[[\"class\",\"type\",\"fluid\",\"collapsed\",\"onCollapse\",\"onExpand\"],[\"navbar-fixed-top\",[25,\"if\",[[19,0,[\"inverse\"]],\"inverse\"],null],[19,0,[\"fluid\"]],[19,0,[\"collapsed\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"collapsed\"]]],null],true],null],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"collapsed\"]]],null],false],null]]],{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"navbar-header\"],[7],[0,\"\\n    \"],[1,[19,1,[\"toggle\"]],false],[0,\"\\n    \"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[6,\"img\"],[9,\"src\",\"/images/saxionLogo.png\"],[9,\"alt\",\"Saxion logo\"],[9,\"style\",\"height: 30px; display: inline; margin-top: -4px;\"],[7],[8],[0,\"HBO-ICT\"]],\"parameters\":[]},null],[0,\"\\n  \"],[8],[0,\"\\n\"],[4,\"component\",[[19,1,[\"content\"]]],null,{\"statements\":[[4,\"component\",[[19,1,[\"nav\"]]],null,{\"statements\":[[0,\"      \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"index\"],null,{\"statements\":[[0,\"Home\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"business\"],null,{\"statements\":[[0,\"Business\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"service-management\"],null,{\"statements\":[[0,\"Service Management\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"software\"],null,{\"statements\":[[0,\"Software Engineering\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"component\",[[19,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[19,2,[\"link-to\"]],\"werkveld\"],null,{\"statements\":[[0,\"Werkveld\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null],[6,\"div\"],[9,\"class\",\"container-fluid\"],[7],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"footer container-fluid\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"footer-text col-md-6 col-md-offset-3\"],[7],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"\\n      Saxion HBO-ICT | Project Oriëntatie Studie en Beroep | 2017\"],[6,\"br\"],[7],[8],[0,\"\\n      Nick Schuitema - Niek Herbig - Ruben Smit - Luuk Oolderink\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/application.hbs" } });
});
define("infosite/templates/business", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KXSgJStS", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"video\"],[\"Business\",\"videos/business.mp4\"]],{\"statements\":[[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  De uitstroomrichting Business IT gaat met name over het vaststellen van de wensen van de klant met betrekking tot de IT. Denk hierbij aan het vervangen van het huidige netwerk of de bestaande systemen. Het is dan ook handig dat je goed met mensen overweg kan en goed kan luisteren naar de wensen van de klant. Naast de verkoop van systemen/netwerken kan het ook zo zijn dat er van je wordt gevraagd om de bedrijfsprocessen bloot te leggen. Je moet deze dan op een logische manier rangschikken zodat het systeem weer vlekkeloos kan werken.\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"img-container\"],[7],[0,\"\\n  \"],[6,\"img\"],[9,\"class\",\"img-inline-full\"],[9,\"src\",\"../images/BusinessFoto.jpg\"],[9,\"alt\",\"Klasiek beeld van een 'business-meeting'.\"],[7],[8],[0,\"\\n  \"],[6,\"small\"],[9,\"class\",\"img-caption\"],[7],[0,\"Klasiek beeld van een 'business-meeting'.\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"h3\"],[7],[0,\"Curriculum\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Dit deel van de pagina is gewijd aan het vakkenpakket dat je de laatste twee kwartielen van het eerste jaar bij Business IT krijgt. Deze laatste twee kwartielen bestaan uit de onderstaande vakken:\\n\"],[8],[0,\"\\n\"],[6,\"table\"],[9,\"class\",\"table\"],[7],[0,\"\\n  \"],[6,\"thead\"],[9,\"class\",\"Kwartielen Curriculum\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Vakkenpakket\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Kwartiel 1.3\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Financiën\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Bij deze les leer je hoe de boekhouding doet van een bedrijf en hoe je alle cijfers van de juiste kant bekijkt.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Databases\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Bij dit vak leer je hoe je een database ontwerpt, monitoren en beheren plus alle processen die hierbij betrokken zijn.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Projectmanagement\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Bij dit vak leer je hoe je het beste overzicht kan bewaren binnen een project en ook wat er voor nodig is dit te managen.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Project\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Voor elk kwartiel moet je ook een project maken. Wat dit project gaat inhouden kunnen wij op dit moment nog niet zeggen omdat dit met het kwartiel verandert.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"table\"],[9,\"class\",\"table\"],[7],[0,\"\\n  \"],[6,\"thead\"],[9,\"class\",\"Kwartielen Curriculum\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Vakkenpakket\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Kwartiel 1.4\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Procesmanagement\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Bij dit vak leer je hoe je de processen goed in beeld brengt en dit duidelijk kan maken voor mensen zonder voorkennis.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Webontwikkeling\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Bij dit vak leer je hoe je websites en applicaties moet ontwikkelen en onderhouden.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Business English\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Bij dit vak leer je hoe je in correct en bedrijfsmatig Engels kan spreken.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Project\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Voor elk kwartiel moet je ook een project maken. Wat dit project gaat inhouden kunnen wij op dit moment nog niet zeggen omdat dit met het kwartiel verandert.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/business.hbs" } });
});
define("infosite/templates/components/article-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "k1HLbSZL", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"card article-card\"],[7],[0,\"\\n\"],[4,\"if\",[[19,0,[\"image\"]]],null,{\"statements\":[[0,\"    \"],[6,\"img\"],[9,\"class\",\"card-img-top col-md-12\"],[10,\"src\",[26,[[18,\"image\"]]]],[10,\"alt\",[26,[[18,\"title\"]]]],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[19,0,[\"video\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"card-video-container\"],[7],[0,\"\\n    \"],[6,\"video\"],[9,\"class\",\"card-video-top col-md-12\"],[9,\"loop\",\"\"],[9,\"muted\",\"\"],[9,\"autoplay\",\"\"],[7],[0,\"\\n      \"],[6,\"source\"],[10,\"src\",[26,[[18,\"video\"]]]],[9,\"type\",\"video/mp4\"],[7],[8],[0,\"\\n      Your browser does not support the video tag.\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"gradient-overlay\"],[7],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[6,\"div\"],[9,\"class\",\"card-body col-lg-offset-3 col-sm-offset-2 col-lg-6 col-sm-8\"],[7],[0,\"\\n\"],[4,\"if\",[[19,0,[\"title\"]]],null,{\"statements\":[[0,\"      \"],[6,\"h1\"],[10,\"class\",[26,[\"card-title \",[25,\"if\",[[19,0,[\"video\"]],\"title-video\"],null]]]],[7],[1,[18,\"title\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[11,1],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/components/article-card.hbs" } });
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
  exports.default = Ember.HTMLBars.template({ "id": "B7jHnGPc", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"video\"],[\"HBO-ICT\",\"videos/index.mp4\"]],{\"statements\":[[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Welkom bij de introductiesite van HBO-ICT. Deze site helpt je bij het kennismaken met de studie, bijvoorbeeld doordat je verschillende interviews met personen uit het werkveld kunt lezen, maar ook doordat je hier informatie over de studie zelf en over zijn uitstroomrichtingen kunt vinden.\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Oriënterende deel van de opleiding (het eerste half jaar). Dit gedeelte bestaat uit het verkennen van het ICT vak. Je zal dus aan hand van de informatie die je hier krijgt en projecten die je moet uitvoeren leren hoe breed het ICT vak daadwerkelijk is. Het eerste deel van het jaar zal dan ook voornamelijk bestaan uit theorielessen en de toetsen (tentamens) vinden plaats in een speciale tentamenweek, deze is aan het eind van elk kwartiel. Als je het eerste kwartiel doorstaan hebt kom je in het tweede kwartiel, logisch toch?\\n\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Het tweede kwartiel zal voornamelijk bestaan uit het in de praktijk brengen van wat je in het eerste kwartiel hebt geleerd. Als je beide kwartielen hebt doorstaan kun je een uitstroomrichting kiezen. De uitstroomrichtingen waar je uit kan kiezen zijn:\\n  IT Business, IT Service Management en Software Engineering.\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"img-container\"],[7],[0,\"\\n  \"],[6,\"img\"],[9,\"class\",\"img-inline-full\"],[9,\"src\",\"../images/studieruimte.jpg\"],[9,\"alt\",\"Een van de studieruimtes met HBO-ICT studenten.\"],[7],[8],[0,\"\\n  \"],[6,\"small\"],[9,\"class\",\"img-caption\"],[7],[0,\"Een van de studieruimtes met HBO-ICT studenten.\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"h3\"],[7],[0,\"Wanneer ben je toelaatbaar voor de opleiding?\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Wanneer ben je nou precies toelaatbaar voor de opleiding HBO-ICT op het Saxion. Je kan op verschillende manieren instromen, bijvoorbeeld vanaf Havo, het VWO of vanuit het MBO. Hieronder staan de verschillende instromingsprocdures.\\n\"],[8],[0,\"\\n\"],[6,\"h5\"],[7],[0,\"Algemene aanmeldingsprocedure\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Gebruikelijk is om je uiterlijk voor 1 mei van het aankomend studiejaar aan te melden, dus bijvoorbeeld als je in 2018/2019 (aankomend studiejaar) wil beginnen met studeren, is het gebruikelijk om je voor 1 mei 2018 aan te melden. Je neemt dan automatisch deel aan een studiekeuzecheck, de uitslag hiervan is niet bindend, maar geeft wel een goede studie-indicatie. Vervolgens moet je voldoen aan alle inschrijfvoorwaarden. Deze inschrijfwaarden kom je vanzelf tegen in Studielink. Als je aan alles probleemloos voldoet kunnen je beginnen met de opleiding in september.\\n\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Als je dit termijn niet haalt, kun je je vervolgens alsnog aanmelden in de periode 2 mei t/m 15 augustus. Het verschil met de eerste periode is dat de uitslag van de studiekeuzecheck wel leidend is. Als je in deze periode een\\n    negatief studiekeuzeadvies krijgt, is dit meteen definitief en heeft dit tot gevolg dat je dat jaar \"],[6,\"strong\"],[7],[0,\"niet\"],[8],[0,\" met je opleiding kan beginnen.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Toelating havo/vwo\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\nIn principe ben je met elk profiel toelaatbaar, hieronder een twee handige tabellen:\\n  \"],[8],[0,\"\\n  \"],[6,\"table\"],[9,\"class\",\"table\"],[7],[0,\"\\n    \"],[6,\"thead\"],[9,\"class\",\"SaxionToelatingsTabel\"],[7],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Havo profiel\"],[8],[0,\"\\n        \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Toelaatbaar\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tbody\"],[7],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Natuur en Techniek (N&T)\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"Ja\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Natuur en Gezondheid (N&G)\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"Ja\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Economie en Maatschapij (E&M)\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"Ja\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Cultuur en Maatschappij (C&M)\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"Ja\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"table\"],[9,\"class\",\"table\"],[7],[0,\"\\n    \"],[6,\"thead\"],[9,\"class\",\"SaxionToelatingsTabel\"],[7],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"VWO profiel\"],[8],[0,\"\\n        \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Toelaatbaar\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tbody\"],[7],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Natuur en Techniek (N&T)\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"Ja\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Natuur en Gezondheid (N&G)\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"Ja\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Economie en Maatschapij (E&M)\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"Ja\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Cultuur en Maatschappij (C&M)\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"Ja\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Is het nou het geval dat je je diploma voor 1 augustus 2007 hebt gehaald, dan heb je een oud profiel. Met zo'n oud profiel heb je geen recht meer op rechtstreekse toelating. Er wordt dan getoetst en/of er wordt naar een vergelijking gemaakt met een huidig Havo- of VWO-profiel. Het kan dus voorkomen dat je \\\"\"],[6,\"strong\"],[7],[0,\"deficiënt\"],[8],[0,\"\\\" bent, dit betekent dat je nog 'ontoerijkend' bent voor de opleiding.\"],[6,\"br\"],[7],[8],[0,\"\\n    Er komt dan een speciale toets die test of je voldoende resultaat hebt bereikt en geschikt bent voor de opleiding.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Toelating vanuit het MBO:\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Het is sinds 1 augustus 2015 niet meer mogelijk voor MBO-studenten rechtstreeks in te stromen op het HBO. Er zijn wel verschillende combinaties mogelijk om 'naderende toelatingseisen' te stellen bij zulke instromingen. Een speciale vorm hiervan is 'niet-verwante doorstrominen', waarbij je elders op het HBO gaat studeren dan dat je op het MBO bent opgeleidt.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Andere procedures:\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Anders dan de normale procuderes vanuit VWO, Havo of MBO, zijn er ook bijzondere casussen. Deze zijn hieronder opgesomt.\\n    Voor meer informatie over deze casussen, kun je \"],[6,\"a\"],[9,\"href\",\"https://www.saxion.nl/studeren/kiezen_en_kennismaken/Studiekiezer/act/hbo-ict/hbo-ict/#toelating\"],[9,\"target\",\"_blank\"],[7],[0,\"hier\"],[8],[0,\" meer informatie vinden.\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"img-container\"],[7],[0,\"\\n    \"],[6,\"img\"],[9,\"class\",\"img-inline-full\"],[9,\"src\",\"../images/college.jpg\"],[9,\"alt\",\"Een college op het Saxion.\"],[7],[8],[0,\"\\n    \"],[6,\"small\"],[9,\"class\",\"img-caption\"],[7],[0,\"Een college op het Saxion.\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"Curriculum\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Hieronder kan je lezen welke vakken je krijgt in het eerste halfjaar, deze vakken zijn gezamenlijk, dus dit geldt nog voor alle stromingsrichtingen. Wil je verdere informatie na de eerste twee kwartielen kijk dan bij het desbetreffende uitstromingsprofiel, deze kun je vinden in de navigatiebar bovenaan de webpagina. Deze eerste twee kwartielen bestaan bijvoorbeeld uit de onderstaande vakken:\\n  \"],[8],[0,\"\\n  \"],[6,\"table\"],[9,\"class\",\"table\"],[7],[0,\"\\n  \"],[6,\"thead\"],[9,\"class\",\"Kwartielen Curriculum\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Vakkenpakket\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Kwartiel 1.1\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\" Introductie programmeren\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Bij deze les leer je de basis van het programmeren in Java en werken met de processen.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\" Infrastructuur en service management\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Binnen het vak infrastructuur en service management leer je het ontwerpen, realiseren, analyseren en het adviseren van procesinfrastructuren.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Analyse bedrijfsprocessen\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Deze les gaat over het leren analyseren van de processen die zich afspelen binnen een bedrijf.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Project\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Voor elk kwartiel moet je ook een project maken. Wat dit project gaat inhouden kunnen wij op dit moment nog niet zeggen omdat dit met het kwartiel verandert.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n  \"],[6,\"table\"],[9,\"class\",\"table\"],[7],[0,\"\\n    \"],[6,\"thead\"],[9,\"class\",\"Kwartielen Curriculum\"],[7],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Vakkenpakket\"],[8],[0,\"\\n        \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Kwartiel 1.2\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tbody\"],[7],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\" Projectmatig werken\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"  Bij dit vak leer je op een juiste en overzichtelijke manier in een projectvorm te werken.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\" Object georiënteerd programmeren\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"  Bij dit vak leer je wat preciezer, doelgerichter en aan hand van objecten programmeren in Java.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Architectuur infrastructuur\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"      Bij dit vak leer je hoe je goed de architectuur van de IT kan analyseren en hoe je deze moet ontwerpen.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Gedrag in organisatie\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"Bij dit vak leer je hoe je het gedrag binnen een organisatie goed kan analyseren en hoe dit toegepast kan worden binnen de organisatie.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Project\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"Voor elk kwartiel moet je ook een project maken. Wat dit project gaat inhouden kunnen wij op dit moment nog niet zeggen omdat dit met het kwartiel verandert.\"],[8],[0,\"\\n       \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/index.hbs" } });
});
define("infosite/templates/service-management", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LMKtAfSZ", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"video\"],[\"Service Management\",\"videos/servicemanagement.mp4\"]],{\"statements\":[[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  IT Service Management is de uitstroomrichting die zich vooral focust op het helpen ontwerpen/bouwen van een netwerksysteem.\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Bij het ontwikkelen en het helpen bouwen van systemen gaat het dan ook niet alleen over het opzetten van het systeem, maar ook moet je zorgen dat het systeem overzichtelijk blijft voor de eindgebruiker (de klant) en voor jou, want geen bedrijf wil uit de running zijn omdat jij en je team eerst moeten kijken waar alles staat en daarna pas het probleem kunnen oplossen.\\n\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Met deze reden is klantcontact dan ook meteen een belangrijk onderdeel.\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"img-container\"],[7],[0,\"\\n  \"],[6,\"img\"],[9,\"class\",\"img-inline-full\"],[9,\"src\",\"../images/ITSM-foto1.jpg\"],[9,\"alt\",\"Aansluitingen van een serverkast.\"],[7],[8],[0,\"\\n  \"],[6,\"small\"],[9,\"class\",\"img-caption\"],[7],[0,\"Aansluitingen van een serverkast.\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"h3\"],[7],[0,\"Curriculum\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Dit deel van de pagina is gewijd aan het vakkenpakket dat je de laatste twee kwartielen bij IT Service Management krijgt. Deze laatste twee kwartielen van het jaar bestaan uit de onderstaande vakken:\\n\"],[8],[0,\"\\n\"],[6,\"table\"],[9,\"class\",\"table\"],[7],[0,\"\\n  \"],[6,\"thead\"],[9,\"class\",\"Kwartielen Curriculum\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Vakkenpakket\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Kwartiel 1.3\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Architectuur en infrastructuur\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Bij deze les leer je hoe je de architectuur en infrastructuur goed kunt analyseren en aan hand hiervan leer je ook hoe je ontwerpen voor de IT kunt ontwikkelen.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Technisch beheer\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Bij dit vak leer je hoe je een IT systeem goed in beheer neemt en ga je werken volgens ITIL principes (gestroomlijnde werkprocessen). Wat deze regels precies zijn? Dat hoor je natuurlijk bij dit vak.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Projectmanagement\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Bij dit vak leer je hoe je het beste overzicht kan bewaren binnen een project en welke kwalificaties er voor nodig is om projecten te kunnen managen.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Project\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Voor elk kwartiel moet je ook een project maken. Wat dit project gaat inhouden kunnen wij op dit moment nog niet zeggen omdat dit met het kwartiel verandert.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"table\"],[9,\"class\",\"table\"],[7],[0,\"\\n  \"],[6,\"thead\"],[9,\"class\",\"Kwartielen Curriculum\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Vakkenpakket\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Kwartiel 1.4\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Netwerken\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Bij dit vak leer je hoe een netwerk is opgebouwd, hoe je dit het beste kan onderhouden en hoe je dit zo efficiënt mogelijk kan aanpassen of opbouwen.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Applicatiebeheer\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Bij dit vak leer je een deel programmeren, maar ook leer je de correcte manier van omgaan en gebruik van applicaties.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Professionele communicatie\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Bij dit vak leer je hoe je op een juiste en correcte manier met een klant/collega kan communiceren.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Business English\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Bij dit vak leer je hoe je in correct en bedrijfsmatig Engels kan spreken.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Project\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"\\n        Voor elk kwartiel moet je ook een project maken. Wat dit project gaat inhouden kunnen wij op dit moment nog niet zeggen omdat dit met het kwartiel verandert.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/service-management.hbs" } });
});
define("infosite/templates/software", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+4kIPb3d", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"video\"],[\"Software Engineering\",\"videos/sebanner.mp4\"]],{\"statements\":[[0,\"  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    De uitstroomrichting Software Engineering focust zicht bijna volledig op het ontwikkelen van software, van het idee tot de realisatie. \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Hier leer je verschillende vaardigheden op het programeergebeid en ga je dieper in op vakken zoals programmeren en zal je onder andere programmeertalen leren zoals Java en C++. Tevens moet je goed oog hebben op de onderliggende processen om jouw programma’s goed te laten inspelen op de wensen van de klant.\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"img-container\"],[7],[0,\"\\n    \"],[6,\"img\"],[9,\"class\",\"img-inline-full\"],[9,\"src\",\"../images/student.jpg\"],[9,\"alt\",\"Een student aan het programmeren\"],[7],[8],[0,\"\\n    \"],[6,\"small\"],[9,\"class\",\"img-caption\"],[7],[0,\"Een student bezig met een programmeeropdracht.\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"Curriculum\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Dit deel van de pagina is gewijd aan het vakkenpakket dat je de laatste twee kwartielen bij Software Engineering krijgt.\\n    Deze laatste twee kwartielen van het eerste jaar bestaan uit de onderstaande vakken:\\n  \"],[8],[0,\"\\n  \"],[6,\"table\"],[9,\"class\",\"table\"],[7],[0,\"\\n    \"],[6,\"thead\"],[9,\"class\",\"Kwartielen Curriculum\"],[7],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Vakkenpakket\"],[8],[0,\"\\n        \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Kwartiel 1.3\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tbody\"],[7],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Android Programmeren\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"Bij deze les leer je hoe je applicaties kan programmeren voor Android toestellen.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Algorithmes\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"Bij dit vak leer je hoe je goed algorithmes toepast en hoe deze werken.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Software ontwerp\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"Bij dit vak leer je hoe je software programmeert maar ook de juiste manier om deze te ontwerpen.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Project\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"Voor elk kwartiel moet je ook een project maken. Wat dit project gaat inhouden kunnen wij op dit moment nog niet zeggen omdat dit met het kwartiel verandert.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"table\"],[9,\"class\",\"table\"],[7],[0,\"\\n  \"],[6,\"thead\"],[9,\"class\",\"Kwartielen Curriculum\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Vakkenpakket\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"class\",\"title\"],[7],[0,\"Kwartiel 1.4\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Netwerkservice\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Bij dit vak leer je hoe een netwerk is opgebouwd en hoe je deze kan onderhouden.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Databases\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Bij dit vak leer je hoe je een database ontwerpt, maar ook hoe deze aangepast kunnen worden en de processen die hierbij horen.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Requirements en testen\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Bij dit vak leer je hoe je op een juiste manier de requirements opstelt en de juiste manier voor het testen van je omgeving.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[0,\"Project\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Voor elk kwartiel moet je ook een project maken. Wat dit project gaat inhouden kunnen wij op dit moment nog niet zeggen omdat dit met het kwartiel verandert.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/software.hbs" } });
});
define("infosite/templates/werkveld/denko-ict", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "c2ZNwqkc", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"image\"],[\"Denko-ICT\",\"../images/denkoICTLogo.jpg\"]],{\"statements\":[[0,\"  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[6,\"img\"],[9,\"class\",\"img-inline-right\"],[9,\"src\",\"../images/Stefan_Olde_Hendrikman.jpg\"],[9,\"alt\",\"Stefan Olde Hendrikman\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Stefan Olde Hendrikman\"],[8],[0,\" is Systeembeheerder/VOIP- beheerder bij Denko-ICT. Denko-ICT is een bedrijf dat zich focust op het opzetten en het beheren van de netwerken van andere bedrijven.Dit doet Denko-ICT allemaal lokaal. Ze willen ook wel eens op een wat grotere afstand doen, maar alleen als dit andere vestigingen/zusterbedrijven zijn van het hoofdkantoor. Denko-ICT zelf bestaat ook weer uit verschillende afdelingen. De afdelingen binnen Denko-ICT zijn: verkoop,administratie, domotica,netwerk/service. Stefan is dan ook werkzaam op de afdeling service/netwerk, maar gaat voornamelijk naar de klanten hun bedrijf toe om onderhoud of service te bieden. Hij is begonnen bij Denko-ICT naast zijn studie toen hij hoorde dat er een vacature beschikbaar was.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"Denko-ICT als bedrijf\"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Wat doet Denko-ICT als bedrijf?\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Denko-ICT is een bedrijf dat zich focust op het ontwerpen en beheren van netwerken voor bedrijven. Hierbij hoort dus ook Cloud computing en vernieuwing van bestaande netwerken. Het bedrijf is en 2001 begonnen met het kleinschalig repareren van elektronica en computers. Ze groeiden echter snel uit tor een technisch en krachtig ICT bedrijf. Momenteel bestaat het bedrijf uit een ervaren team van 13 personen. Er word hier hard gewerkt voor oplossingen op het gebied van ICT, telecom en domotica te bieden volgens de laatste trends en ontwikkelingen.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"welke afdelingen zijn er binnen Denko-ICT?\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Denko-ICT bestaat uit de volgende 4 afdelingen: Verkoop, Domotica, Netwerk/Service en Administratie. De Verkoop afdeling houdt zich logischerwijs bezig met de verkoop van de verschillende aangeoden diensten en systemen van Denko-ICT. De afdeling Domotica houd zich bezig met het ontwikkelen en integreren van smart living systemen, bijvoorbeeld het aanzetten van de thermostaat via je smartphone en dat soort oplossingen. De afdeling Netwerk/Service houd zich bezig met het implementeren en onderhouden van de systemen aangeboden door Denko-ICT. De Administratie houd zich bezig met de administratieve taken binnen Denko-ICT, dit is echter niet specifiek ICT-gerelateerd.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"Stefan Olde Hendrikman\"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Op welke afdeling ben je zelf werkzaam en welke functie heb je binnen deze afdeling?\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Stefan is zelf werkzaam op de afdeling service/netwerk. De functie die hij daarbinnen bekleedt is: systeembeheerder/ VOIP beheerder. Voip is een afkorting voor Voice Over IP, het bellen via internet dus in plaats van over een analoge kabel, stefan beheert de voip gerelateerde dingen bij de klanten van Denko-ICT dus.Tevens beheert en onderhoud hij de systemen bij de klanten.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Hoe ben je terecht gekomen bij Denko-ICT, en welke opleidingen heb je hiervoor gevolgd?\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Stefan is zijn studieloopbaan begonnen met de MBO niveau 4 opleiding netwerkbeheerder, tijdens deze studie was Stefan ook al werkzaam bij een klein ICT bedrijfje. Na het succesvol afronden van de opleiding netwerkbeheerder is Stefan de opleiding IT service management op het Saxion gaan volgen, dit is de voorloper op de huidige HBO-ICT opleiding. Tijdens het volgen van deze opleiding hoorde Stefan dat er een vacature vrij was gekomen binnen Denko-ICT en hier heeft hij toen voor gesolliciteerd. naast zijn opleiding heeft Stefan dus gewerkt bij Denko-ICT, en hier werkt hij tot op heden.\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"img-container\"],[7],[0,\"\\n    \"],[6,\"img\"],[9,\"class\",\"img-inline-full\"],[9,\"src\",\"../images/denko1.jpg\"],[9,\"alt\",\"Werknemers in een vergadering bij Denko-ICT\"],[7],[8],[0,\"\\n    \"],[6,\"small\"],[9,\"class\",\"img-caption\"],[7],[0,\"Werknemers in een vergadering bij Denko-ICT\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Welke onderdelen van de IT houdt Denko-ICT zich voornamelijk mee bezig?\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Wat op dit moment een hot item is, is de security. Het beveiligen van de nieuwe netwerken en systemen die er alsmaar bijkomen. Tevens is het virtualiseren van de netwerkomgeving van bedrijven een groot deel van de huidige werkzaamheden. Hiernaast is het onderhouden van bestaande netwerken en systemen altijd een must, Denko-ICT heeft hiervoor ook een storinglijn voor in de avond en een helpdesk voor overdag. De afdeling Domotica is bezig met het installeren van de smart living (applicaties binnen je huis die beheert kunnen worden met smartphone of andere apparaten) en onderhouden van deze systemen.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Wat is het belangrijkste dat je hebt meegenomen en geleerd op het Saxion?\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Stevan vind dat hij op het HBO vooral een denk en werkwijze heeft aangeleerd, heeft leren rapporteren, communiceren en het in beeld brengen van de processen in de bestaande situatie. Als Stefan het HBO moet vergelijken met het de MBO opleiding die hij ervoor heeft afgerond, dan zegt hij dat hij op het MBO op een specifiek gefocust suk bezig was, en dat op het HBO hij de problemen en casussen in een breder perspectief leerde zien. Tevens vind Stefan dat hij op het HBO veel gestructureerder en efficienter heeft leren werken.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"Vernieuwing\"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Zijn er veranderingen die je zelf al bent tegengekomen in de afgelopen aantal jaren?\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Stefan ziet dat er in de afgelopen jaren een grote stijging is in de behoefte voor het beveiligen van de netwerken en systemen.Dit is volgens hem omdat de gebruikersdata volgens de nieuwe privacywetten veel beter beschermd moeten worden. Hiernaast merkt hij op dat veel bedrijven de stap maken naar het werken in de cloud, dit houd volgens Stefan in dat de bestaande netwerken binnen bedrijven steeds minimaler worden en veel virtueel geregeld word.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[7],[0,\"Welke vernieuwingen in de IT zie je voor je in de 10 komende jaren\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Stefan verwacht dat er nog meer cloudcomputing gaat komen en er meer apparatuur gevirtualiseerd gaat worden.\\n    Hij denkt dat er ook nog meer gedaan gaat worden met de beveiliging van de netwerken en dat dit ook wel zo blijft, omdat er altijd nieuwe beveiligingslekken worden gevonden of gemaakt.\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/werkveld/denko-ict.hbs" } });
});
define("infosite/templates/werkveld/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SK2BmQvn", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"video\"],[\"Werkveld\",\"videos/werkveld.mp4\"]],{\"statements\":[[0,\"  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Deze pagina biedt informatie over verschillende bedrijven in het werkveld ICT. Deze bedrijven zijn geselecteerd op basis van de uitstroomprofielen van HBO-ICT op het Saxion, namelijk IT Service Management, Business en Software Engineering.\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    De volgende bedrijven kun je refereren tot het uitstroomprofiel IT Service Management: Thales en Denko-ICT. Het bedrijf Moneybird kun\\n    je refereren tot het uitstroomprofiel Software Engineering en Previder kun je toebedelen aan IT Service Management, omdat ze zich bezig\\n    houden met servers en dergelijke, en tot Business, omdat ze zeer gericht zijn op het binnenhalen van kleinere zaken voor hosting\\n    (business-to-business).\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"div\"],[9,\"class\",\"col-lg-offset-3 col-sm-offset-2 col-lg-6 col-sm-8\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\"],[4,\"compagny-card\",null,[[\"title\",\"image\",\"link\"],[\"Moneybird\",\"images/moneybirdLogo.png\",\"werkveld.moneybird\"]],{\"statements\":[[0,\"      \"],[6,\"strong\"],[7],[0,\"Elian Krosse\"],[8],[0,\" is Software Engineer bij Moneybird, een klein bedrijf dat werkt aan online boekhoudsoftware. Hij is hier tijdens zijn stage voor HBO-ICT begonnen en vertelt over over het bedrijf zelf, zijn ervaringen en hoe zijn studie hier in terug komt.\\n\"]],\"parameters\":[]},null],[4,\"compagny-card\",null,[[\"title\",\"image\",\"link\"],[\"Previder\",\"images/previderLogo.jpg\",\"werkveld.previder\"]],{\"statements\":[[0,\"      \"],[6,\"strong\"],[7],[0,\"Bas Wiggers \"],[8],[0,\"is service delivery manager bij Previder. Previder is een  IT bedrijf onder de Odin groep, en houd zich bezig met het bouwen, beheren van, en adviseren over werkplekken in de Cloud. Tevens levert Previder alle relevante IT technologieën en services volledig gemanaged.\\n\"]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\"],[4,\"compagny-card\",null,[[\"title\",\"image\",\"link\"],[\"Thales\",\"images/thalesLogo.jpg\",\"werkveld.thales\"]],{\"statements\":[[0,\"      \"],[6,\"strong\"],[7],[0,\"Marcel Brummelaar\"],[8],[0,\"  is Project Portfolio Manager bij Thales. Thales is een wereldwijde onderneming die zich bezig houdt met elektronica, luchtvaart, defensie en informatietechnologie. Hij is hier begonnen na dat hij de opleiding HT meetkunde heeft afgerond en de opleiding informatica had afgerond op de Universiteit van Twente. Hier lees je wat thales is, doet en hoe marcel hier terecht is gekomen.\\n\"]],\"parameters\":[]},null],[4,\"compagny-card\",null,[[\"title\",\"image\",\"link\"],[\"Denko-ICT\",\"images/denkoICTLogo.jpg\",\"werkveld.denko-ict\"]],{\"statements\":[[0,\"      \"],[6,\"strong\"],[7],[0,\"Stefan Olde Hendrikman\"],[8],[0,\"  is systeembeheerder/ VOIP- beheerder bij Denko-ICT. Denko-ICT is een bedrijf dat zich focust op het opzetten en het beheren van de netwerken van andere bedrijven.\\n      \"],[6,\"p\"],[7],[0,\"\\n        \"],[6,\"br\"],[7],[8],[6,\"br\"],[7],[8],[6,\"br\"],[7],[8],[6,\"br\"],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/werkveld/index.hbs" } });
});
define("infosite/templates/werkveld/moneybird", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7IDJciEZ", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"image\"],[\"Moneybird\",\"../images/moneybirdLogo.png\"]],{\"statements\":[[0,\"  \"],[6,\"p\"],[9,\"class\",\"card-text text-intro\"],[7],[0,\"\\n    \"],[6,\"img\"],[9,\"class\",\"img-inline-right\"],[9,\"src\",\"../images/moneybirdElianKrosse.jpg\"],[9,\"alt\",\"Elian Krosse\"],[7],[8],[0,\"\\n    \"],[6,\"strong\"],[7],[0,\"Elian Krosse\"],[8],[0,\" is Software Engineer bij Moneybird, een klein bedrijf dat werkt aan online boekhoudsoftware. Hij is hier tijdens zijn stage voor HBO-ICT begonnen en vertelt over over het bedrijf zelf, zijn ervaringen en hoe zijn studie hier in terug komt.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[9,\"id\",\"wat-doet-moneybird\"],[7],[0,\"\\n    Wat doet Moneybird\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"kun-je-vertellen-wat-moneybird-zoal-doet-als-bedrijf-welke-producten-maken-jullie-\"],[7],[0,\"\\n    Kun je vertellen wat Moneybird zoal doet als bedrijf, welke producten maken jullie?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Wij ontwikkelen een online softwarepakket, en daarmee kunnen mensen boekhouden en facturen versturen. Dus alles is online, ze gaan naar moneybird.nl, ze loggen in, en als ZZP’er kun je daarin je volledige boekhouding voeren.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"wat-is-jullie-missie-of-doel-\"],[7],[0,\"\\n    Wat is jullie missie of doel?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Ons doel is om mensen daar plezier in te geven. Als je als ZZP’er begint is het vaak de grootste frustratie, en misschien ook de grootste onwetendheid: Hoe doe je je boekhouding? Je kunt het op papier gaan doen, of in Excel, maar dat gaat toch frictie opleveren. Je hebt toch niet de controle erop, je ziet niet precies of de facturen betaald zijn. Wij proberen zo veel mogelijk slimmigheidjes in te bouwen zodat mensen het veel makkelijker hebben. Je vult gewoon in wat je gedaan hebt voor de klant en wat je geleverd hebt, en dat is eigenlijk alles wat je moet doen. Je klikt op klaar en de factuur gaat automatisch naar de administratie van de klant. Die hoeft maar op de betaalknop te drukken en het is helemaal verwerkt. Het is allemaal via iDeal geregeld, maar incasso's zijn ook mogelijk en we zijn bezig om de betalingen ook direct via de banken te regelen.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"dus-jullie-proberen-het-zo-makkelijk-mogelijk-te-maken-voor-de-klant-\"],[7],[0,\"\\n    Dus jullie proberen het zo makkelijk mogelijk te maken voor de klant.\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Ja, en dan het liefst met zo min mogelijk functionaliteit ingebouwd zodat je een heel simpele interface hebt, zodat de klant meteen denkt: \\\"Hier kan ik mee uit de voeten\\\". Maar onderwater is het zo slim dat alles in een keer werkt. De klant moet niet eens door hebben dat het zo slim is. Ze moeten denken \\\"Dit werkt heel simpel\\\", maar tegelijkertijd nemen we al het werk uit handen.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"is-het-niet-heel-lastig-om-die-balans-te-vinden-tussen-gebruiksvriendelijkheid-en-functionaliteit-\"],[7],[0,\"\\n    Is het niet heel lastig om die balans te vinden tussen gebruiksvriendelijkheid en functionaliteit?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Dat is inderdaad een continu gevecht dat we hebben. Dan denken we dat we ergens een knopje voor kunnen toevoegen, maar dan zijn er meteen drie werknemers die zeggen dat als we daar een knopje voor toevoegen, dan maken we het lastiger, en hoeveel mensen helpen we hier mee. Zijn er 300 op de 3000 mensen die hier gebruik van maken, dan is het waarschijnlijk niet de moeite waard want 10% van de mensen is te weinig. Dat zijn afwegingen die we hier continu maken.\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"img-container\"],[7],[0,\"\\n    \"],[6,\"img\"],[9,\"class\",\"img-inline-full\"],[9,\"src\",\"../images/moneybird1.jpg\"],[9,\"alt\",\"Werknemers aan het werk bij Moneybird\"],[7],[8],[0,\"\\n    \"],[6,\"small\"],[9,\"class\",\"img-caption\"],[7],[0,\"Werknemers aan het werk bij Moneybird\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"wat-is-jullie-doelgroep-\"],[7],[0,\"\\n    Wat is jullie doelgroep?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    We richten ons voornamelijk ZZP’ers en kleine ondernemers, maar we hebben wel een aantal klanten die langzaam groot zijn geworden. Dat is leuk want dat geeft nieuwe inzichten, maar dat is tegelijkertijd ook waar we de klanten gaan verliezen. Op het moment dat het bedrijf groeit, dan hebben ze andere wensen aan het pakket dan mensen die een kleiner bedrijf hebben. Tot op zekere hoogte is het zinvol om hierin mee te gaan, maar op een gegeven moment moet je niet functionaliteiten in gaan bouwen voor iemand die groter is geworden, want het gros van onze klanten is een klein bedrijf, en die hebben niets aan die functionaliteit. Dat maakt het pakket alleen maar lastiger.\"],[6,\"br\"],[7],[8],[0,\"\\n    We zeggen wel echt heel hard: \\\"Als je te groot bent voor ons helpen we je met alle plezier overstappen, we zijn blij om je als klant te zien gaan\\\". Het gaat ons er om dat ze gelukkig zijn en een goede tijd hebben gehad met de administratie in Moneybird. Dan laten we ze met plezier gaan en gaan we niet moeilijk zitten doen om ze binnen te houden.\"],[6,\"br\"],[7],[8],[0,\"\\n    Dat is ook het voordeel van ons businessmodel. Onze klanten betalen €10 €17,50 of €25 per maand en daar zit verder geen onderscheid in, en we hebben veel gebruikers. Eentje meer of minder maakt niet veel uit, maar we hebben het liefst dat iedereen tevreden is. Als je niet tevreden bent kun je beter naar een ander pakket toe gaan. Die luxe die hebben we.\\n  \"],[8],[0,\"\\n  \"],[6,\"em\"],[7],[0,\"\\\"Het gaat er om dat de klanten gelukkig zijn\\\"\"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"jullie-zijn-een-innovatief-bedrijf-waaruit-zich-dat-in-\"],[7],[0,\"\\n    Jullie zijn een innovatief bedrijf, waaruit zich dat in?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    In het feit dat wij niet kijken naar de cijfertjes, dat doen we wel maar niet als hoofdmoot. Dus als wij in een maand iets slechter of beter draaien dan blijven we nog steeds kijken naar onze eigen kracht, waar zouden we in kunnen verbeteren in functionaliteit. We kijken niet naar hoe we meer kunnen verdienen aan onze klanten, maar hoe we onze klanten nog beter kunnen helpen. Ik denk dat het als innovatief bedrijf heel belangrijk is dat je niet gaat kijken naar waar je winst op kunt maken en welke slagen je kunt maken om meer geld te verdienen, maar dat je je product zo sterk maakt dat je concurrenten niet eens in de buurt kunnen komen. Je bent dus continu bezig met je eigen kracht, en maakt je product nog beter en nog sterker.\"],[6,\"br\"],[7],[8],[0,\"\\n    Pas heeft een bedrijf een concurrent gelanceerd voor ons product. Wat je meteen zag was dat een aantal van onze gebruikers, maar ook andere mensen in de markt, dat gingen gebruiken om het te testen. En iedere keer lazen wij berichten waarin stond: \\\"Waarom gebruiken mensen geen Moneybird? Dit programma werkt helemaal niet fijn\\\". Voor hun is dat iets ongrijpbaars, waarom Moneybird beter is dat het product dat zij gebouwd hebben. Maar wij weten gewoon dat we zo veel tijd hebben gestoken in het perfectioneren van ons product. Over elk knopje is nagedacht waarom het op die plek staat en waarom het zo werkt. Voor hun is dat iets wat bijna niet na te bouwen is. Zij denken geld te gaan verdienen aan een boekhoudpakket, maar wij gaan uit van onze eigen kracht en willen niet imiteren en zetten een eigen sterk product neer. En altijd vanuit de filosofie: hoe kunnen we het product prettiger maken voor onze klanten.\"],[6,\"br\"],[7],[8],[0,\"\\n    Het is heel verfrissend, want financieel gezien zijn we niet afhankelijk van één klant. Sommige bedrijven moeten klanten binnen houden en grote projecten draaien, en dat is heel anders dan hoe wij dat doen. Als ons project drie maanden uitloopt dan kijken we waarom dat uitgelopen is en als dat een goede reden heeft wordt niemand er boos om. Het product is er beter op geworden en daar draait het om. Een ander bedrijf zal misschien zien dat de budgetten overschreden zijn dus dat het niet goed gaat. Dat is een luxe die we hebben.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[9,\"id\",\"werken-bij-moneybird\"],[7],[0,\"\\n    Werken bij Moneybird\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"hoeveel-medewerkers-telt-het-bedrijf-\"],[7],[0,\"\\n    Hoeveel medewerkers telt het bedrijf?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Twee mensen zijn hier continu bezig met de gebruiksvriendelijkheid en er zijn ongeveer 12 ontwikkelaars. Daarnaast hebben we 6 supportmedewerkers, iemand voor de marketing en een voor data-analyse. Ook hebben we 2 office en HR-medewerkers. Dus totaal 25 tot 30 man. De kern van het bedrijf zijn de ontwikkelaars. We zijn ooit opgericht door 3 ontwikkelaars, inmiddels zijn er daar nog 2 van over.\"],[6,\"br\"],[7],[8],[0,\"\\n    Het bedrijf is echt vanuit het ontwikkelen opgezet. Dat is ook de manier waarop hier gewerkt wordt, we hebben een grote rustige werkplek waar niet veel gesproken wordt, behalve in de vergaderruimtes. Het is echt de bedoeling dat je daar gefocust kunt werken zonder afleiding. Als je een vraag hebt loop je dus niet naar je collega toe, maar daar gebruiken we bijvoorbeeld Slack voor. Zo zorgen we ervoor dat je de momenten waarop je onderbroken wordt zelf kunt kiezen. Zo kun je lekker doorwerken en dat is de filosofie van het bedrijf; echt voor de ontwikkelaars.\"],[6,\"br\"],[7],[8],[0,\"\\n    Alles is ingericht op de ontwikkelaars en de rest is daar omheen gebouwd. De supportmedewerkers en de interactiedesigners zijn daar later pas bij gekomen. Tot 5-6 man zijn we gewoon gegroeid met alleen ontwikkelaars.\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"img-container\"],[7],[0,\"\\n    \"],[6,\"img\"],[9,\"class\",\"img-inline-full\"],[9,\"src\",\"../images/moneybird2.jpg\"],[9,\"alt\",\"Flexwerken vanuit het buitenland\"],[7],[8],[0,\"\\n    \"],[6,\"small\"],[9,\"class\",\"img-caption\"],[7],[0,\"Werken kan overal, zolang er maar internet is. Bijvoorbeeld in Finland, waar deze Moneybird werknemer aan de slag gaat.\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"helpen-jullie-als-ontwikkelaars-ook-mee-in-het-support-\"],[7],[0,\"\\n    Helpen jullie als ontwikkelaars ook mee in het support?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Ja, we hebben daar een brug tussen geslagen, tussen support en ontwikkelaars. Wat je vaak ziet is dat sommige vragen niet goed beantwoord kunnen worden door de supportmedewerkers. Daar zitten soms bugs of fouten in die voor een klant specifiek zijn en die heel lastig te achterhalen zijn. Dus is het wel handig als een ontwikkelaar mee kijkt. We rouleren dan met twee ontwikkelaars per week die meewerken met het support. Dus alle lastige technische vragen beantwoorden zij, en als er dan een fout uit komt proberen ze die meteen op te lossen, soms zelfs binnen een uur. Dat is wel een kracht die we hebben, want je voorkomt dan dat honderden klanten tegen hetzelfde probleem aanlopen.\"],[6,\"br\"],[7],[8],[0,\"\\n    Het is ook heel goed als je software ontwikkeld om een beetje klantcontact te hebben, want op die manier zie je gewoon waar klanten tegenaan lopen. Een supportmedewerker denkt misschien dat we daar een help artikeltje voor moeten schrijven, maar als ontwikkelaar denk je: \\\"Waarom stelt die klant überhaupt die vraag? En waarom zouden we er een help artikel voor schrijven als ik het probleem bij de bron kan aanpakken.\\\" Dus je krijgt veel beter inzicht in wat er speelt en hoe je het product zou moeten uitwerken, en uiteindelijk levert dat een beter product op.\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"hoe-hebben-jullie-de-werkvloer-georganiseerd-gaat-elke-werknemer-gewoon-lekker-zijn-gang-\"],[7],[0,\"\\n    Hoe hebben jullie de werkvloer georganiseerd, gaat elke werknemer gewoon lekker zijn gang?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Dat is inderdaad interessant. We werken niet met een systeem als scrum bijvoorbeeld, we werken wel Agile. Dus we draaien projecten, en die draaien we vaak 6 weken lang. Daar werken dan 2 of 3 ontwikkelaars aan en dat is dan het grote langetermijndoel waaraan gewerkt wordt. En in de tussentijd ben je gewoon vrij om zelf taken op te pakken. Dat gaat natuurlijk naar inzicht en met een klein beetje sturing, maar ik denk dat eigenlijk alle ontwikkelaars hier wel een goede inschatting kunnen maken wat ze zouden moeten oppakken zonder dat erop gestuurd wordt. Dat is eigenlijk iets heel magisch want er is een hele grote lijst met honderden taken die gedaan moeten worden. En als ontwikkelaar heb je daar eigenlijk de vrije hand in wat je gaat oppakken. Het is natuurlijk vanzelfsprekend dat als je iets leuks gaat oppakken wat eigenlijk niet noodzakelijk is op het moment dat we het heel druk hebben, we elkaar daarop aanspreken, en dan is het opgelost. Maar het is niet zo dat er een manager zit die de taken uitdeelt, het is allemaal heel vrij.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[9,\"id\",\"de-opleiding-van-de-werknemers\"],[7],[0,\"\\n    De opleiding van de werknemers\"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"welke-opleidingsachtergrond-heeft-het-personeel-hier-\"],[7],[0,\"Welke opleidingsachtergrond heeft het personeel hier?\"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"Heel divers, we hebben voornamelijk Hbo’ers zitten en een aantal met een universitaire opleiding en een enkeling heef alles zelf aangeleerd. Wat dat betreft is opleiding niet heel belangrijk, we kijken niet persé naar de opleiding maar het is wel een eerste inschatting. Het gaat uiteindelijk om wat je kunt, sommige mensen bewijzen zich in een paar weken, dat ze laten zien dat ze weten hoe het in de praktijk zit. Het is niet zo dat een universitair opgeleid iemand hier beter betaald krijgt dan iemand van het hbo, daar wordt niet naar gekeken. Je rol en toegevoegde waarde zijn veel belangrijker.\"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"img-container\"],[7],[0,\"\\n    \"],[6,\"img\"],[9,\"class\",\"img-inline-full\"],[9,\"src\",\"../images/moneybird3.jpg\"],[9,\"alt\",\"Een lunchlecture van Moneybird\"],[7],[8],[0,\"\\n    \"],[6,\"small\"],[9,\"class\",\"img-caption\"],[7],[0,\"Een lunchlecture voor HBO-ICT studenten van Saxion gegeven door een werknemer van Moneybird\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"welke-opleiding-heb-je-zelf-gedaan-\"],[7],[0,\"\\n    Welke opleiding heb je zelf gedaan?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    HBO-ICT, ik ben met het afstuderen hierbinnen komen rollen. Ik deed voor het afstuderen nog een minor ondernemen, dat was een verbredende minor, en daar was ik met mijn eigen bedrijfje bezig. Toen zei een docent van mij dat ik een ondernemer moest vinden waar ik me aan kon spiegelen en waar je mee kunt sparren. Op dat moment zag ik op Tweakers een filmpje voorbijkomen van Moneybird in de beginfase. Toen heb ik ze gewoon eens aangesproken met de vraag of we eens konden praten. Na dat gesprek boden ze me meteen een afstudeerplek aan en van het een kwam het ander. Na het afstuderen heb ik eerst deeltijd gewerkt en daarnaast ben ik bezig geweest met mijn eigen bedrijf. Maar op een gegeven moment kwam ik erachter dat combineren heel lastig was en dat ik hier zoveel voldoening uit het werk kon halen dat ik liever hier aan de slag ging dan dat ik verder ging met mijn bedrijfje. En dat is me tot nu toe goed bevallen.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[9,\"id\",\"de-studie-hbo-ict\"],[7],[0,\"\\n    De studie HBO-ICT\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"heb-je-nog-tips-voor-studenten-die-erover-nadenken-in-dit-werkveld-aan-de-slag-te-gaan-\"],[7],[0,\"\\n    Heb je nog tips voor studenten die erover nadenken in dit werkveld aan de slag te gaan?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Ik denk dat het heel belangrijk is dat je vooral naast je studie bezig bent. Dus niet alleen kijken naar welke vakken je aangeboden krijgt, maar kijk naar de dingen die je echt prikkelen en leuk vindt om te doen. Ga zelf dingen leren en ga verder dan school je aanbiedt. Ik denk dat daar vooral de kracht ligt van een goede student. En als je het leuk vindt om te ondernemen en je bent een beetje charismatisch, je kunt je product verkopen, probeer dan gewoon eens te starten tijdens je studie. En als je aan het werk gaat ga dan vooral shoppen en ga niet bij de eerste-de-beste zitten. Bij een stage ook, schrijf minimaal 2 bedrijven aan en ga ze eens vergelijken. Praat met ze en kijk hoe het bedrijf werkt. Wat ik zelf vak deed was mijn oud klasgenoten vragen wat ze verdienden en wat ze deden bij hun bedrijf. Zo krijg je een heel goed beeld van wat er in de markt speelt. En dat kun je dan ook weer gebruiken om te onderhandelen, je maakt elkaar daarmee sterker.\\n  \"],[8],[0,\"\\n  \"],[6,\"em\"],[7],[0,\"\\\"Een vak zoals concurrency, daar heb ik iedere dag nog profijt van.\\\"\"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"zijn-er-dingen-in-je-studie-waar-je-echt-wat-aan-gehad-hebt-\"],[7],[0,\"\\n    Zijn er dingen in je studie waar je echt wat aan gehad hebt?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Je krijgt een heel brede basis set aan kennis mee, en die is altijd handig. Een vak zoals concurrency, daar heb ik iedere dag nog profijt van. In het begin dacht ik: \\\"Wat is dit?\\\". Maar elke dag nog gebruik je de filosofie en de denkwijzen de je hebt aangeleerd. Die is heel waardevol.\"],[6,\"br\"],[7],[8],[0,\"\\n    Van de minor ondernemen vond ik zelf heel leuk dat het een verbredende minor was. Vooral omdat je op een compleet ander vlak aan het werk bent. Opeens moet je nadenken over hoe marketing in elkaar zit, hoe je jezelf verkoopt als persoon. Dat is best wel leuk want dat kom je altijd wel weer tegen. Als je een functioneringsgesprek hebt of als je gaat onderhandelen over je salaris, dan heb je dat nodig. Je kunt wel wachten tot iemand je geld geeft, maar je kunt er ook zelf achteraangaan.\\n  \"],[8],[0,\"\\n  \"],[6,\"h3\"],[9,\"id\",\"de-toekomst\"],[7],[0,\"\\n    De toekomst\\n  \"],[8],[0,\"\\n  \"],[6,\"h5\"],[9,\"id\",\"hoe-denk-je-dat-het-werkveld-er-over-10-jaar-uit-zal-zien-waar-zullen-we-dan-mee-bezig-zijn-\"],[7],[0,\"\\n    Hoe denk je dat het werkveld er over 10 jaar uit zal zien, waar zullen we dan mee bezig zijn?\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n    Ik denk dat het nog veel gekker wordt dan dat het nu is. Er wordt veel geautomatiseerd en daar hebben we nu al te weinig mensen voor. Alles wat geautomatiseerd wordt moet ook onderhouden worden en ik denk dat er daarom echt een verdubbeling nodig is in mensen die software ontwikkelen en onderhouden. De maatschappij wordt er steeds afhankelijker van, zelfs de belastingdienst is volledig geautomatiseerd. Ook al die systemen moeten onderhouden worden, als dat plat gaat gaan heel veel dingen stuk. Dus de afhankelijkheid van ICT-systemen wordt steeds groter.\"],[6,\"br\"],[7],[8],[0,\"\\n    Ik denk ook dat programmeur steeds meer een beroep wordt zoals dokter en advocaat worden gezien, omdat het steeds meer een beroep is dat de maatschappij draaiende houdt. Je verandert de wereld ook echt, met het werk dat ik hier de afgelopen 4 jaar heb gedaan heb ik misschien wel honderden boekhouders werkloos gemaakt, gewoon omdat ik het makkelijker heb gemaakt voor de ondernemer om het zelf te doen. Is dat erg, misschien. Maar je verandert de maatschappij wel, en de ondernemers zijn er heel blij mee. Voor hun is de drempel tot ondernemen een stuk lager, want boekhouden kun je zelf.\"],[6,\"br\"],[7],[8],[0,\"\\n    ICT verandert de wereld. Neem Airbnb bijvoorbeeld, heel Amsterdam staat op zijn kop, en de wereld weet even niet wat ze er mee aan moeten. Pokémon Go, een simpel appje waar kinderen een beetje mee spelen, maar het veroorzaakt wel echte problemen in de echte wereld. Zo zie je dat software een enorme impact heeft op de wereld.\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/werkveld/moneybird.hbs" } });
});
define("infosite/templates/werkveld/previder", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ECUzxxK6", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"image\"],[\"Previder\",\"../images/previderLogo.jpg\"]],{\"statements\":[[6,\"p\"],[9,\"class\",\"card-text text-intro\"],[7],[0,\"\\n  \"],[6,\"img\"],[9,\"class\",\"img-inline-right\"],[9,\"src\",\"../images/BasWiggers.jpg\"],[9,\"alt\",\"Bas Wiggers\"],[7],[8],[0,\"\\n  \"],[6,\"strong\"],[7],[0,\"Bas Wiggers\"],[8],[0,\" is service delivery manager bij Previder. Previder is een IT bedrijf onder de Odin groep, en houd zich bezig met het bouwen, beheren van, en adviseren over werkplekken in de Cloud. Tevens levert Previder alle relevante IT technologieën en services volledig gemanaged.\\n\"],[8],[0,\"\\n\"],[6,\"h3\"],[7],[0,\"Previder als bedrijf.\"],[8],[0,\"\\n\"],[6,\"h5\"],[7],[0,\"Wat doet Previder als bedrijf?\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Previder is een bedrijf binnen de Odin groep, dat servers host en beheert om werkplekken in de cloud aan te kunnen bieden. Om deze werkplekken zo soepel mogelijk te laten verlopen bied Previder ook de mogelijkheid om directe verbindingen te leggen. Hiernaast bouwt Previder IT systemen ter plekke bij bedrijven als hier vraag naar is.\\n\"],[8],[0,\"\\n\"],[6,\"h5\"],[7],[0,\"Wat is de Odin groep?\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Odin groep is een groep bedrijven met een sterke focus op managed services, cloud- en datacenter oplossingen die samen zijn gaan werken om zo elkaar direct te ondersteunen. Hierdoor zijn de bedrijven zich beter kunnen focussen op hun klanten. De drie bedrijven waar Odin groep uit bestaat zijn : Previder, heutink.ict en web2work.\\n\"],[8],[0,\"\\n\"],[6,\"h5\"],[7],[0,\"Wat doen heutink.ict en web2work binnen Odin groep?\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Heutink ICT ontwikkelt, realiseert en beheert innovatieve en effectieve oplossingen voor het primair-, voortgezet- en beroepsonderwijs en de dagopvang. Ondersteund door 100 jaar ervaring ontwikkelt Heutink ICT oplossingen waarmee het onderwijs verder komt. Vernieuwend, altijd gericht op de dagelijkse praktijk en met inhoudelijke ondersteuning op een ongekend hoog niveau. In de beginjaren was Heutink ICT vooral actief op het gebied van ICT-infrastructuren en onderwijsinhoudelijke ondersteuning. Maar door de opkomst van social media, cloud computing, glasvezel en de behoefte aan 'anytime, anywhere learning' zijn ze zich ook gaan richten op de ontwikkeling van online platformen. Web2work is een ambitieus softwarebedrijf dat met een hecht team webbased platformen en applicaties ontwikkelt, zowel gestandaardiseerd als op maat. Ze kiezen voor webbased oplossingen omdat ze platformonafhankelijk zijn, degelijk te beveiligen, goed te integreren, centraal te beheren, overal te benaderen en tegen aantrekkelijke kosten te realiseren. Dat alles met volop flexibiliteit voor toekomstige aanpassingen en aanvullingen. Klanten van web2work profiteren maximaal van de vele mogelijkheden die het web biedt. Daarbij vinden de collega's van web2work niet telkens het wiel opnieuw uit, maar werken ze vanuit een solide basis die vervolgens naar de wens van de klant wordt op- en uitgebouwd.\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/werkveld/previder.hbs" } });
});
define("infosite/templates/werkveld/thales", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4Gemsycq", "block": "{\"symbols\":[],\"statements\":[[4,\"article-card\",null,[[\"title\",\"image\"],[\"Thales\",\"../images/thalesLogo.jpg\"]],{\"statements\":[[6,\"p\"],[9,\"class\",\"card-text\"],[7],[6,\"img\"],[9,\"class\",\"img-inline-right\"],[9,\"src\",\"../images/marcel.jpg\"],[9,\"alt\",\"Elian Krosse\"],[7],[8],[0,\"\\n  \"],[6,\"strong\"],[7],[0,\"Marcel Brummelaar\"],[8],[0,\" is Project Portfolio Manager bij Thales. Thales is een wereldwijde onderneming die zich bezig houdt met elektronica, luchtvaart, defensie en informatietechnologie. Hij is hier begonnen na dat hij de opleiding HT meetkunde heeft afgerond en de opleiding informatica had afgerond op de Universiteit van Twente. Hier lees je wat thales is, doet, en hoe marcel hier terecht is gekomen.\\n\"],[8],[0,\"\\n\"],[6,\"h3\"],[7],[0,\"Thales als bedrijf\"],[8],[0,\"\\n\"],[6,\"h5\"],[7],[0,\"Wat doet Thales als bedrijf?\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Thales is een wereldwijd elektronicabedrijf dat zich bezighoudt met luchtvaart, defensie en informatietechnologie. Thales ontwikkeld de software én de hardware binnen het bedrijf. De vestiging in Hengelo houd zich voornamelijk bezig met de ontwikkeling van radarinstallaties en andere militaire technologie zoals nabijheidsverdedigingssystemen.\\n\"],[8],[0,\"\\n\"],[6,\"h5\"],[7],[0,\"Waaruit bestaan de afdelingen bij Thales\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Thales Hengelo is onder te verdelen in twee delen, het eerste deel houdt zich bezig met het ontwikkelen van technologie zoals radarinstallaties, en het tweede deel focust zich voornamelijk op het ondersteunen van de gebruikersprocessen en gebruikers. In het kort dus, wat wij begrijpen als ITSM. Het eerste deel bestaat uit ruim 400 werknemers en het tweede deel slechts 70. Deze 70 werknemers zijn weer onder te verdelen in verschillende domeinen. Van deze domeinen zijn er 4 verantwoordelijk voor het onderhouden van de systemen en applicaties. Dit houdt in dat er een team is dat zich bezighoudt met het onderhoud van business gerelateerde systemen en applicaties, een team dat de ondersteunende systemen en applicaties voor de engineering processen onderhoud, een domein dat de ondersteunende werkplek applicaties onderhoudt en ten slotte een domein dat de onderliggende hardware zoals de servers onderhoudt. Hiernaast zijn er nog twee overige domeinen, een domein dat zich ontfermd over architectuur, security en projectbeheer. En een deliveries domein dat zich bezig houdt met de levering en het vervangen van de verouderde of beschadigde apparatuur.\\n\"],[8],[0,\"\\n\"],[6,\"h5\"],[7],[0,\"Welke functies zijn er binnen Thales?\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  1: Productowner: Deze rol bepaalt wat voor een werk er moet gebeuren en wat belangrijk is. 2: De engineers en de specialisten: Deze mensen zorgen ervoor dat alles werkt en goed blijft werken of in sommige gevallen zorgen voor het aanpassen van de applicatie. 3: Solution Manager: Deze mensen kijken naar wat is waar nodig en welke applicaties kunnen hiervoor gebruikt worden.\\n\"],[8],[0,\"\\n\"],[6,\"h3\"],[7],[0,\"Marcel Brummelaar\"],[8],[0,\"\\n\"],[6,\"h5\"],[7],[0,\" Welke afdeling bent u zelf werkzaam?\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Marcel is zelf werkzaam op de afdeling Architectuur, dit is dus ook de afdeling die zich bezig houdt met de vernieuwing of aanpassingen maken op de bestaande systemen/netwerk.\\n\"],[8],[0,\"\\n\"],[6,\"h5\"],[7],[0,\"Wat is uw functie binnen het bedrijf?\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  De functie die ik heb heet: Project Portfolio Manager. De Project Portfolio Manager bepaalt het budget voor de projecten gezamenlijk met de werknemers. Dit wordt dan ook het gehele jaar bijgehouden. Dit is het proces waar de Project Portfolio Manager zich voornamelijk mee bezig houdt.\\n\"],[8],[0,\"\\n\"],[6,\"h5\"],[7],[0,\"Hoe bent u terecht gekomen bij Thales en welke opleidingen heeft u gevolgd?\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Hij is zelf begonnen met de opleiding HT meetkunde in Utrecht en daarna heeft hij op de Universiteit Twente Informatica gevolgd. Na de opleiding is hij gaan werken in de vastgoed registratie als informatie analist bij CMG Utrecht. Hij is daar na een aantal jaar mee gestopt, omdat hij het reizen zat was. Daarna heeft hij werk gevonden als informatiemanager bij Kadaster. Dit hield in dat hij een brug vormde tussen de gebruikers en de IT afdeling om er zo voor te zorgen dat ze de juiste apparatuur en applicaties gebruiken om een bedrijf goed te laten lopen. In deze functie werd hij het na een aantal jaar ook weer zat om veel heen en weer te reizen. Toen hoorde hij dat er een vacature beschikbaar was bij Thales en is toen daar aangenomen en daar begonnen. Hij heeft hier gewerkt als architect, consultant en projectleider. Toen hij hoorde dat er een functie vrijkwam als projectmanager heeft hij zich hier voor aangemeld en is zo op deze functie als Project Portfolio Manager terecht gekomen.\\n\"],[8],[0,\"\\n\"],[6,\"h5\"],[7],[0,\"Wat zijn de dingen waar de IT zich volgens u mee bezig houdt?\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  1: het leveren van IT services en vragen beantwoordden of problemen oplossen van de helpdesk. 2: Run en operate, dit houdt in het onderhoud van en het monitoren van de systemen. 3: Het vernieuwen van de bestaande systemen of applicaties. 4: de IT helpt ook met ondersteuning van alle werkprocessen en automatisering zodat alles zo goed en efficiënt mogelijk verloopt.\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"img-container\"],[7],[0,\"\\n  \"],[6,\"img\"],[9,\"class\",\"img-inline-full\"],[9,\"src\",\"../images/thales1.jpg\"],[9,\"alt\",\"Het nieuwe kantoorpand van Thales\"],[7],[8],[0,\"\\n  \"],[6,\"small\"],[9,\"class\",\"img-caption\"],[7],[0,\"Het nieuwe kantoorpand van Thales\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"h3\"],[7],[0,\"Vernieuwing\"],[8],[0,\"\\n\"],[6,\"h5\"],[7],[0,\"Welke vernieuwingen zijn heeft u de afgelopen jaren gezien en meegemaakt?\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Het meest recente onderdeel binnen Tales is de security, dit is een ondereel sinds 3 jaar. Omdat er een compleet nieuwe beveiligde omgeving opgezet moest worden, was dit een vrij grote verandering. Dit was echter een zeer belangrijke vernieuwing aangezien de nieuwe verbindingen van en naar Thales, overheidsgvoelige informatie bevatten en dit niet naar buiten mag komen. Het systeem is dan ook dus op meerdere manieren beveiligd. Ze hebben de buitnste laag van de systemen afgedekt met firewalls om als eerste verdedegingslinie, hiernaast is er ook de mogeljikheid om specifieke poorten dicht te gooien om ongewenste toegang te blokkeren. Tevens is er voor gezorgd dat als er iemand toch binnen weet te dringen, zijn gegevens makkelijk te achterhalen zijn.\\n\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Een andere grote verandering binnen Thales is het grootschalig gebruik van de cloud. Vanuit Thales word een soort Private Cloud gehost waar de werknemers overal mee kunnen verbinden. Deze cloud wordt gehost op een server binnen Thales. De omgeving waar de werknemers in werken is verder ook compleet gevirtualiseerd en runt op Citrix. In het kort houdt dit in dat de werknemers alle benodigde applicaties kunnen runnen op hun eigen pc's, waar ze ook zijn.\\n\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Een andere grote verandering binnen Thales is de werkwijze. De werkwijze van thales heeft er tot een aantal jaren voorheen altijd zo uitgezien: De specialisten binnen het bedrijf hielden zich bezig met een specifieke applicatie of systeem, en als er iets nodig was dan bouwden ze zelf een nieuwe functie doormiddel van programmeren omdat deze functie nog niet bestond. In de laaste jaren is dit echter compleet omgedraaid, de benodigde software is al beschikbaar in de vorm van paketten, en de specialisten moeten nu in plaats van de applicatie aanpassen aan de werkprocessen, de werkprocessen aanpassen aan de software. Deze ontwikkeling heeft als uitkomst dat er nauwelijks meer nieuwe dingen geprogrammeerd hoeven worden, de meeste software bestaat nu al, het is meer een kwestie van implementeren van pakketten.\\n\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Tevens heeft Thales ervoor gekozen om bepaalde softwarepakketten en de onderhoud hiervan uit te besteden aan andere gespecialiseerde bedrijven. Deze bedrijven beheren deze applicaties dan ook en ontfermen zich compleet over de hele applicatie. Specialisten zijn echter altijd nodig, er is altijd bedrijfsspecifieke apparatuur die ontwikkeld en onderhouden moet worden. Een voorbeeld hiervan zijn computerchips voor radarsystemen, deze chips zijn dermate specialistich dat chips op de normale markt de benodigde specificaties niet kunnen halen, en deze dus zelf gemaakt moeten worden.\\n\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Thales werkt sinds kort ook via een nieuw systeem, genaamd: T-shape. Dit systeem houd het volgede in: Werknemers worden breder opgeleid zodat ze flexibeler binnen de organisatie werkzaam kunnen zijn en zo dus breder inzetbaar zijn.\\n\"],[8],[0,\"\\n\"],[6,\"h5\"],[7],[0,\"Hoe wordt er bepaald of er vernieuwing moet komen en zo ja hoe wordt dit uitgevoerd?\"],[8],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"\\n  Thales voert jaarlijks een ISMP uit, een Important Service Master Plan. Binnen een ISMP worden de prioriteiten van verschillende projecten besproken en worden de budgetten vastgelegd.Deze vergadering wordt gehouden met alle vestigingen ook uit verschillende landen. Aan hand van deze gesprekken en het budget kan bepaald worden welke projecten ze kunnen en willen gaan doen.Als er een project uitkomt dat ze willen gaan uitvoeren. Dan wordt dit eerst besproken met de gebruikers en welke eisen ze aan hieraan willen stellen. Er wordt ook gekeken waar het systeem aan moet gaan voldoen gezien vanuit de business eisen/doelstellingen. Als het project is vastgesteld wordt dit ook nog doorgesproken met de Architectuur Engineer en de Enterprise Engineer. Deze twee mensen bekijken ook of dat het nieuwe/aangepaste systeem voldoet aan de eisen en richtlijnen van het bedrijf of dat het alleen op een bepaalde vestiging geïmplementeerd moet worden of door alle vestigingen moet worden aangenomen. Als het project wordt aangenomen dan bestaat het project uit verschillende gates. De eerste gate is het vaststellen van het project en kijken waaruit het bestaat. De tweede gate is het uitzoeken of de oplossing die ze hebben wel daadwerkelijk de beste oplossing is. De derde gate is pas het uitvoeren van het project.\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "infosite/templates/werkveld/thales.hbs" } });
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
  require("infosite/app")["default"].create({"name":"infosite","version":"0.0.0+cbd4dcff"});
}
//# sourceMappingURL=infosite.map
