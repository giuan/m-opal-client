/* Generated by Opal 0.9.0 */
(function(Opal) {
  Opal.dynamic_require_severity = "error";
  var OPAL_CONFIG = { method_missing: true, arity_check: false, freezing: true, tainting: true };
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $klass = Opal.klass;

  Opal.add_stubs(['$require', '$attr_reader', '$alias_method', '$remove_method', '$define_method', '$+', '$proxy_attr_reader', '$proxy_attr_writer', '$is_a?', '$new', '$private', '$include', '$extend', '$end_with?', '$chop', '$!', '$method_missing', '$>', '$length', '$[]']);
  self.$require("opal");
  self.$require("js");
  (function($base) {
    var $JavascriptProxy, self = $JavascriptProxy = $module($base, 'JavascriptProxy');

    var def = self.$$proto, $scope = self.$$scope;

    self.$attr_reader("j");

    self.$alias_method("unbox", "j");

    self.$remove_method("j");

    Opal.defn(self, '$[]', function(prop) {
      var self = this;
      if (self.j == null) self.j = nil;

      return self.j[prop];
    });

    Opal.defn(self, '$[]=', function(prop, value) {
      var self = this;
      if (self.j == null) self.j = nil;

      return self.j[prop]=value;
    });

    Opal.defn(self, '$jsc', function(method) {
      var $a, self = this, m = nil, $splat_index = nil;
      if (self.j == null) self.j = nil;

      var array_size = arguments.length - 1;
      if(array_size < 0) array_size = 0;
      var args = new Array(array_size);
      for($splat_index = 0; $splat_index < array_size; $splat_index++) {
        args[$splat_index] = arguments[$splat_index + 1];
      }
      m = self.j[method];
      return ($a = m).call.apply($a, [self.j].concat(Opal.to_a(args)));
    });

    Opal.defn(self, '$to_s', function() {
      var self = this;
      if (self.j == null) self.j = nil;

      return self.j.toString();
    });
  })($scope.base);
  (function($base) {
    var $Helpers, self = $Helpers = $module($base, 'Helpers');

    var def = self.$$proto, $scope = self.$$scope;

    Opal.defn(self, '$proxy_method', function(method, js_method) {
      var $a, $b, TMP_1, self = this;

      if (js_method == null) {
        js_method = nil
      }
      js_method = ((($a = js_method) !== false && $a !== nil) ? $a : method);
      return ($a = ($b = self).$define_method, $a.$$p = (TMP_1 = function(args){var self = TMP_1.$$s || this, $a, m = nil;
        if (self.j == null) self.j = nil;
args = $slice.call(arguments, 0);
      m = self.j[js_method];
        return ($a = m).call.apply($a, [self.j].concat(Opal.to_a(args)));}, TMP_1.$$s = self, TMP_1), $a).call($b, method);
    });

    Opal.defn(self, '$proxy_attr_reader', function(attr, js_attr) {
      var $a, $b, TMP_2, self = this;

      if (js_attr == null) {
        js_attr = nil
      }
      js_attr = ((($a = js_attr) !== false && $a !== nil) ? $a : attr);
      return ($a = ($b = self).$define_method, $a.$$p = (TMP_2 = function(){var self = TMP_2.$$s || this;
        if (self.j == null) self.j = nil;

      return self.j[js_attr]}, TMP_2.$$s = self, TMP_2), $a).call($b, attr);
    });

    Opal.defn(self, '$proxy_attr_writer', function(attr, js_attr) {
      var $a, $b, TMP_3, self = this;

      if (js_attr == null) {
        js_attr = nil
      }
      js_attr = ((($a = js_attr) !== false && $a !== nil) ? $a : attr);
      attr = $rb_plus(attr, "=");
      return ($a = ($b = self).$define_method, $a.$$p = (TMP_3 = function(value){var self = TMP_3.$$s || this;
        if (self.j == null) self.j = nil;
if (value == null) value = nil;
      return self.j[js_attr]=value}, TMP_3.$$s = self, TMP_3), $a).call($b, attr);
    });

    Opal.defn(self, '$proxy_attr_accessor', function(attr, js_attr) {
      var self = this;

      if (js_attr == null) {
        js_attr = nil
      }
      self.$proxy_attr_reader(attr, js_attr);
      return self.$proxy_attr_writer(attr, js_attr);
    });

    Opal.defn(self, '$proxy_method_rbox', function(method, js_method, box_class) {
      var $a, $b, TMP_4, self = this;

      if (js_method == null) {
        js_method = nil
      }
      if (box_class == null) {
        box_class = $scope.get('RBox')
      }
      if ((($a = (($b = js_method !== false && js_method !== nil) ? js_method['$is_a?']($scope.get('Proc')) : js_method)) !== nil && (!$a.$$is_boolean || $a == true))) {
        box_class = js_method;
        js_method = nil;};
      js_method = ((($a = js_method) !== false && $a !== nil) ? $a : method);
      return ($a = ($b = self).$define_method, $a.$$p = (TMP_4 = function(args){var self = TMP_4.$$s || this, $a, m = nil;
        if (self.j == null) self.j = nil;
args = $slice.call(arguments, 0);
      m = self.j[js_method];
        return box_class.$new(($a = m).call.apply($a, [self.j].concat(Opal.to_a(args))));}, TMP_4.$$s = self, TMP_4), $a).call($b, method);
    });

    Opal.defn(self, '$proxy_attr_reader_rbox', function(attr, js_attr, box_class) {
      var $a, $b, TMP_5, self = this;

      if (js_attr == null) {
        js_attr = nil
      }
      if (box_class == null) {
        box_class = $scope.get('RBox')
      }
      if ((($a = (($b = js_attr !== false && js_attr !== nil) ? js_attr['$is_a?']($scope.get('Proc')) : js_attr)) !== nil && (!$a.$$is_boolean || $a == true))) {
        box_class = js_attr;
        js_attr = nil;};
      js_attr = ((($a = js_attr) !== false && $a !== nil) ? $a : attr);
      return ($a = ($b = self).$define_method, $a.$$p = (TMP_5 = function(){var self = TMP_5.$$s || this;
        if (self.j == null) self.j = nil;

      return box_class.$new(self.j[js_attr])}, TMP_5.$$s = self, TMP_5), $a).call($b, attr);
    });

    self.$private("proxy_method", "proxy_attr_reader", "proxy_attr_writer", "proxy_attr_accessor");

    self.$private("proxy_method_rbox", "proxy_attr_reader_rbox");
  })($scope.get('JavascriptProxy'));
  (function($base, $super) {
    function $RBox(){};
    var self = $RBox = $klass($base, $super, 'RBox', $RBox);

    var def = self.$$proto, $scope = self.$$scope;

    self.$include($scope.get('JavascriptProxy'));

    self.$extend((($scope.get('JavascriptProxy')).$$scope.get('Helpers')));

    return (Opal.defn(self, '$initialize', function(obj) {
      var self = this;

      return self.j = obj;
    }), nil) && 'initialize';
  })($scope.base, null);
  Opal.defn(Opal.Object, '$RBox', function(obj) {
    var self = this;

    return $scope.get('RBox').$new(obj);
  });
  return (function($base) {
    var $ProxyMethodMissing, self = $ProxyMethodMissing = $module($base, 'ProxyMethodMissing');

    var def = self.$$proto, $scope = self.$$scope, TMP_6;

    Opal.defn(self, '$method_missing', TMP_6 = function(meth) {
      var $a, $b, self = this, $iter = TMP_6.$$p, $yield = $iter || nil, m = nil, $splat_index = nil, $zuper = nil, $zuper_index = nil;
      if (self.j == null) self.j = nil;

      var array_size = arguments.length - 1;
      if(array_size < 0) array_size = 0;
      var args = new Array(array_size);
      for($splat_index = 0; $splat_index < array_size; $splat_index++) {
        args[$splat_index] = arguments[$splat_index + 1];
      }
      TMP_6.$$p = null;
      $zuper = [];
      for($zuper_index = 0; $zuper_index < arguments.length; $zuper_index++) {
        $zuper[$zuper_index] = arguments[$zuper_index];
      }
      if ((($a = meth['$end_with?']("=")) !== nil && (!$a.$$is_boolean || $a == true))) {
        meth = meth.$chop()};
      m = self.j[meth];
      if ((($a = m['$!']()) !== nil && (!$a.$$is_boolean || $a == true))) {
        return ($a = Opal.find_super_dispatcher(self, 'method_missing', TMP_6, $iter).apply(self, $zuper)).$method_missing.apply($a, [meth].concat(Opal.to_a(args)))
      } else if ((($b = typeof m == 'function') !== nil && (!$b.$$is_boolean || $b == true))) {
        return ($b = m).call.apply($b, [self.j].concat(Opal.to_a(args)))
      } else if ($rb_gt(args.$length(), 0)) {
        return self.j[meth]=args['$[]'](0)
        } else {
        return m
      };
    })
  })($scope.base);
})(Opal);
