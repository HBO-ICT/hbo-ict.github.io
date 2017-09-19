'use strict';

define('infosite/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/article-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/article-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/compagny-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/compagny-card.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/business.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/business.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/service-management.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/service-management.js should pass ESLint\n\n');
  });

  QUnit.test('routes/software.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/software.js should pass ESLint\n\n');
  });

  QUnit.test('routes/werkveld/denko-ict.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/werkveld/denko-ict.js should pass ESLint\n\n');
  });

  QUnit.test('routes/werkveld/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/werkveld/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/werkveld/moneybird.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/werkveld/moneybird.js should pass ESLint\n\n');
  });

  QUnit.test('routes/werkveld/switch.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/werkveld/switch.js should pass ESLint\n\n');
  });

  QUnit.test('routes/werkveld/thales.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/werkveld/thales.js should pass ESLint\n\n');
  });
});
define('infosite/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('infosite/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'infosite/tests/helpers/start-app', 'infosite/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('infosite/tests/helpers/resolver', ['exports', 'infosite/resolver', 'infosite/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('infosite/tests/helpers/start-app', ['exports', 'infosite/app', 'infosite/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('infosite/tests/integration/components/article-card-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('article-card', 'Integration | Component | article card', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "dnRSa95E",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"article-card\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "kU87yJSr",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"article-card\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('infosite/tests/integration/components/compagny-card-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('compagny-card', 'Integration | Component | compagny card', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "EbAatIAV",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"compagny-card\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "vMq3hVzg",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"compagny-card\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('infosite/tests/test-helper', ['infosite/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('infosite/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/article-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/article-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/compagny-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/compagny-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/business-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/business-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/service-management-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/service-management-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/software-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/software-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/werkveld/denko-ict-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/werkveld/denko-ict-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/werkveld/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/werkveld/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/werkveld/moneybird-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/werkveld/moneybird-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/werkveld/switch-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/werkveld/switch-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/werkveld/thales-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/werkveld/thales-test.js should pass ESLint\n\n');
  });
});
define('infosite/tests/unit/routes/business-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:business', 'Unit | Route | business', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('infosite/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('infosite/tests/unit/routes/service-management-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:service-management', 'Unit | Route | service management', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('infosite/tests/unit/routes/software-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:software', 'Unit | Route | software', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('infosite/tests/unit/routes/werkveld/denko-ict-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:werkveld/denko-ict', 'Unit | Route | werkveld/denko ict', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('infosite/tests/unit/routes/werkveld/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:werkveld/index', 'Unit | Route | werkveld/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('infosite/tests/unit/routes/werkveld/moneybird-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:werkveld/moneybird', 'Unit | Route | werkveld/moneybird', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('infosite/tests/unit/routes/werkveld/switch-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:werkveld/switch', 'Unit | Route | werkveld/switch', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('infosite/tests/unit/routes/werkveld/thales-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:werkveld/thales', 'Unit | Route | werkveld/thales', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('infosite/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
