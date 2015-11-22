/* Generated by Opal 0.9.0.beta2 */
(function(Opal) {
  Opal.dynamic_require_severity = "error";
  var OPAL_CONFIG = { method_missing: true, arity_check: false, freezing: true, tainting: true };
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $klass = Opal.klass, $gvars = Opal.gvars;

  Opal.add_stubs(['$sync', '$sync=', '$+', '$empty?', '$print', '$*', '$new', '$===', '$each', '$ljust', '$shift', '$label', '$format', '$grep', '$list', '$nil?', '$benchmark', '$to_proc', '$width', '$puts', '$length', '$inject', '$measure', '$rjust', '$map', '$start', '$tap', '$times', '$clock_gettime', '$-', '$utime', '$stime', '$cutime', '$cstime', '$module_function', '$raise', '$to_s', '$<', '$<<', '$attr_reader', '$real', '$memberwise', '$gsub', '$%', '$total', '$dup', '$protected', '$__send__']);
  return (function($base) {
    var self = $module($base, 'Benchmark');

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_3, TMP_4, $a, TMP_8, TMP_9;

    Opal.cdecl($scope, 'BENCHMARK_VERSION', "2002-04-25");

    Opal.defn(self, '$benchmark', TMP_1 = function(caption, label_width, format) {
      var $a, $b, $c, TMP_2, self = this, $iter = TMP_1.$$p, $yield = $iter || nil, sync = nil, report = nil, results = nil;

      var array_size = arguments.length - 3;
      if(array_size < 0) array_size = 0;
      var labels = new Array(array_size);
      for(var arg_index = 0; arg_index < array_size; arg_index++) {
        labels[arg_index] = arguments[arg_index + 3];
      }
      if (caption == null) {
        caption = ""
      }
      if (label_width == null) {
        label_width = nil
      }
      if (format == null) {
        format = nil
      }
      TMP_1.$$p = null;
      try {
      sync = $scope.get('STDOUT').$sync();
      (($a = [true]), $b = $scope.get('STDOUT'), $b['$sync='].apply($b, $a), $a[$a.length-1]);
      ((($a = label_width) !== false && $a !== nil) ? $a : label_width = 0);
      label_width = $rb_plus(label_width, 1);
      ((($a = format) !== false && $a !== nil) ? $a : format = $scope.get('FORMAT'));
      if ((($a = caption['$empty?']()) !== nil && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.$print($rb_plus($rb_times(" ", label_width), caption))
      };
      report = $scope.get('Report').$new(label_width, format);
      results = ((($a = Opal.yield1($yield, report)) === $breaker) ? $breaker.$v : $a);
      ($a = $scope.get('Array')['$==='](results), $a !== false && $a !== nil ?($b = ($c = results.$grep($scope.get('Tms'))).$each, $b.$$p = (TMP_2 = function(t){var self = TMP_2.$$s || this, $a, $b;
if (t == null) t = nil;
      return self.$print((((($a = ((($b = labels.$shift()) !== false && $b !== nil) ? $b : t.$label())) !== false && $a !== nil) ? $a : "")).$ljust(label_width), t.$format(format))}, TMP_2.$$s = self, TMP_2), $b).call($c) : $a);
      return report.$list();
      } finally {
      if ((($a = sync['$nil?']()) !== nil && (!$a.$$is_boolean || $a == true))) {
        } else {
        (($a = [sync]), $b = $scope.get('STDOUT'), $b['$sync='].apply($b, $a), $a[$a.length-1])
      }
      };
    });

    Opal.defn(self, '$bm', TMP_3 = function(label_width) {
      var $a, $b, self = this, $iter = TMP_3.$$p, blk = $iter || nil;

      var array_size = arguments.length - 1;
      if(array_size < 0) array_size = 0;
      var labels = new Array(array_size);
      for(var arg_index = 0; arg_index < array_size; arg_index++) {
        labels[arg_index] = arguments[arg_index + 1];
      }
      if (label_width == null) {
        label_width = 0
      }
      TMP_3.$$p = null;
      return ($a = ($b = self).$benchmark, $a.$$p = blk.$to_proc(), $a).apply($b, [$scope.get('CAPTION'), label_width, $scope.get('FORMAT')].concat(Opal.to_a(labels)));
    });

    Opal.defn(self, '$bmbm', TMP_4 = function(width) {
      var $a, $b, TMP_5, $d, TMP_6, $e, self = this, $iter = TMP_4.$$p, $yield = $iter || nil, job = nil, sync = nil, ets = nil;

      if (width == null) {
        width = 0
      }
      TMP_4.$$p = null;
      try {
      job = $scope.get('Job').$new(width);
      if (Opal.yield1($yield, job) === $breaker) return $breaker.$v;
      width = $rb_plus(job.$width(), 1);
      sync = $scope.get('STDOUT').$sync();
      (($a = [true]), $b = $scope.get('STDOUT'), $b['$sync='].apply($b, $a), $a[$a.length-1]);
      self.$puts("Rehearsal ".$ljust($rb_plus(width, $scope.get('CAPTION').$length()), "-"));
      ets = ($a = ($b = job.$list()).$inject, $a.$$p = (TMP_5 = function(sum, $c){var self = TMP_5.$$s || this, $a, $b, res = nil;
if (sum == null) sum = nil;var label = $c[0], item = $c[1];
      self.$print(label.$ljust(width));
        res = ($a = ($b = $scope.get('Benchmark')).$measure, $a.$$p = item.$to_proc(), $a).call($b);
        self.$print(res.$format());
        return $rb_plus(sum, res);}, TMP_5.$$s = self, TMP_5), $a).call($b, $scope.get('Tms').$new()).$format("total: %tsec");
      self.$print((((" ") + (ets)) + "\n\n").$rjust($rb_plus($rb_plus(width, $scope.get('CAPTION').$length()), 2), "-"));
      self.$print($rb_plus($rb_times(" ", width), $scope.get('CAPTION')));
      return ($a = ($d = job.$list()).$map, $a.$$p = (TMP_6 = function(label, item){var self = TMP_6.$$s || this, $a, $b, TMP_7, $c, $d;
if (label == null) label = nil;if (item == null) item = nil;
      $scope.get('GC').$start();
        self.$print(label.$ljust(width));
        return ($a = ($b = ($c = ($d = $scope.get('Benchmark')).$measure, $c.$$p = item.$to_proc(), $c).call($d, label)).$tap, $a.$$p = (TMP_7 = function(res){var self = TMP_7.$$s || this;
if (res == null) res = nil;
        return self.$print(res)}, TMP_7.$$s = self, TMP_7), $a).call($b);}, TMP_6.$$s = self, TMP_6), $a).call($d);
      } finally {
      if ((($a = sync['$nil?']()) !== nil && (!$a.$$is_boolean || $a == true))) {
        } else {
        (($a = [sync]), $e = $scope.get('STDOUT'), $e['$sync='].apply($e, $a), $a[$a.length-1])
      }
      };
    });

    if ((($a = (function(){ try { return (((($scope.get('Process')).$$scope.get('CLOCK_MONOTONIC'))) != null ? 'constant' : nil); } catch (err) { if (err.$$class === Opal.NameError) { return nil; } else { throw(err); }}; })()) !== nil && (!$a.$$is_boolean || $a == true))) {Opal.cdecl($scope, 'BENCHMARK_CLOCK', (($scope.get('Process')).$$scope.get('CLOCK_MONOTONIC')))}else {Opal.cdecl($scope, 'BENCHMARK_CLOCK', (($scope.get('Process')).$$scope.get('CLOCK_REALTIME')))};

    Opal.defn(self, '$measure', TMP_8 = function(label) {
      var $a, self = this, $iter = TMP_8.$$p, $yield = $iter || nil, t0 = nil, r0 = nil, t1 = nil, r1 = nil;

      if (label == null) {
        label = ""
      }
      TMP_8.$$p = null;
      $a = [$scope.get('Process').$times(), $scope.get('Process').$clock_gettime($scope.get('BENCHMARK_CLOCK'))], t0 = $a[0], r0 = $a[1];
      if (Opal.yieldX($yield, []) === $breaker) return $breaker.$v;
      $a = [$scope.get('Process').$times(), $scope.get('Process').$clock_gettime($scope.get('BENCHMARK_CLOCK'))], t1 = $a[0], r1 = $a[1];
      return (($scope.get('Benchmark')).$$scope.get('Tms')).$new($rb_minus(t1.$utime(), t0.$utime()), $rb_minus(t1.$stime(), t0.$stime()), $rb_minus(t1.$cutime(), t0.$cutime()), $rb_minus(t1.$cstime(), t0.$cstime()), $rb_minus(r1, r0), label);
    });

    Opal.defn(self, '$realtime', TMP_9 = function() {
      var self = this, $iter = TMP_9.$$p, $yield = $iter || nil, r0 = nil;

      TMP_9.$$p = null;
      r0 = $scope.get('Process').$clock_gettime($scope.get('BENCHMARK_CLOCK'));
      if (Opal.yieldX($yield, []) === $breaker) return $breaker.$v;
      return $rb_minus($scope.get('Process').$clock_gettime($scope.get('BENCHMARK_CLOCK')), r0);
    });

    self.$module_function("benchmark", "measure", "realtime", "bm", "bmbm");

    (function($base, $super) {
      function $Job(){};
      var self = $Job = $klass($base, $super, 'Job', $Job);

      var def = self.$$proto, $scope = self.$$scope, TMP_10;

      def.width = def.list = nil;
      Opal.defn(self, '$initialize', function(width) {
        var self = this;

        self.width = width;
        return self.list = [];
      });

      Opal.defn(self, '$item', TMP_10 = function(label) {
        var self = this, $iter = TMP_10.$$p, blk = $iter || nil, w = nil;

        if (label == null) {
          label = ""
        }
        TMP_10.$$p = null;
        if ((blk !== nil)) {
          } else {
          self.$raise($scope.get('ArgumentError'), "no block")
        };
        label = label.$to_s();
        w = label.$length();
        if ($rb_lt(self.width, w)) {
          self.width = w};
        self.list['$<<']([label, blk]);
        return self;
      });

      Opal.alias(self, 'report', 'item');

      self.$attr_reader("list");

      return self.$attr_reader("width");
    })($scope.base, null);

    (function($base, $super) {
      function $Report(){};
      var self = $Report = $klass($base, $super, 'Report', $Report);

      var def = self.$$proto, $scope = self.$$scope, TMP_11;

      def.width = def.list = def.format = nil;
      Opal.defn(self, '$initialize', function(width, format) {
        var $a, self = this;

        if (width == null) {
          width = 0
        }
        if (format == null) {
          format = nil
        }
        return $a = [width, format, []], self.width = $a[0], self.format = $a[1], self.list = $a[2];
      });

      Opal.defn(self, '$item', TMP_11 = function(label) {
        var $a, $b, self = this, $iter = TMP_11.$$p, blk = $iter || nil, res = nil;

        var array_size = arguments.length - 1;
        if(array_size < 0) array_size = 0;
        var format = new Array(array_size);
        for(var arg_index = 0; arg_index < array_size; arg_index++) {
          format[arg_index] = arguments[arg_index + 1];
        }
        if (label == null) {
          label = ""
        }
        TMP_11.$$p = null;
        self.$print(label.$to_s().$ljust(self.width));
        self.list['$<<'](res = ($a = ($b = $scope.get('Benchmark')).$measure, $a.$$p = blk.$to_proc(), $a).call($b, label));
        self.$print(($a = res).$format.apply($a, [self.format].concat(Opal.to_a(format))));
        return res;
      });

      Opal.alias(self, 'report', 'item');

      return self.$attr_reader("list");
    })($scope.base, null);

    (function($base, $super) {
      function $Tms(){};
      var self = $Tms = $klass($base, $super, 'Tms', $Tms);

      var def = self.$$proto, $scope = self.$$scope, TMP_12, TMP_13;

      def.utime = def.stime = def.cutime = def.cstime = def.label = def.real = nil;
      Opal.cdecl($scope, 'CAPTION', "      user     system      total        real\n");

      Opal.cdecl($scope, 'FORMAT', "%10.6u %10.6y %10.6t %10.6r\n");

      self.$attr_reader("utime");

      self.$attr_reader("stime");

      self.$attr_reader("cutime");

      self.$attr_reader("cstime");

      self.$attr_reader("real");

      self.$attr_reader("total");

      self.$attr_reader("label");

      Opal.defn(self, '$initialize', function(utime, stime, cutime, cstime, real, label) {
        var $a, self = this;

        if (utime == null) {
          utime = 0.0
        }
        if (stime == null) {
          stime = 0.0
        }
        if (cutime == null) {
          cutime = 0.0
        }
        if (cstime == null) {
          cstime = 0.0
        }
        if (real == null) {
          real = 0.0
        }
        if (label == null) {
          label = nil
        }
        $a = [utime, stime, cutime, cstime, real, label.$to_s()], self.utime = $a[0], self.stime = $a[1], self.cutime = $a[2], self.cstime = $a[3], self.real = $a[4], self.label = $a[5];
        return self.total = $rb_plus($rb_plus($rb_plus(self.utime, self.stime), self.cutime), self.cstime);
      });

      Opal.defn(self, '$add', TMP_12 = function() {
        var $a, $b, self = this, $iter = TMP_12.$$p, blk = $iter || nil;

        TMP_12.$$p = null;
        return $rb_plus(self, ($a = ($b = $scope.get('Benchmark')).$measure, $a.$$p = blk.$to_proc(), $a).call($b));
      });

      Opal.defn(self, '$add!', TMP_13 = function() {
        var $a, $b, self = this, $iter = TMP_13.$$p, blk = $iter || nil, t = nil;

        TMP_13.$$p = null;
        t = ($a = ($b = $scope.get('Benchmark')).$measure, $a.$$p = blk.$to_proc(), $a).call($b);
        self.utime = $rb_plus(self.$utime(), t.$utime());
        self.stime = $rb_plus(self.$stime(), t.$stime());
        self.cutime = $rb_plus(self.$cutime(), t.$cutime());
        self.cstime = $rb_plus(self.$cstime(), t.$cstime());
        self.real = $rb_plus(self.$real(), t.$real());
        return self;
      });

      Opal.defn(self, '$+', function(other) {
        var self = this;

        return self.$memberwise("+", other);
      });

      Opal.defn(self, '$-', function(other) {
        var self = this;

        return self.$memberwise("-", other);
      });

      Opal.defn(self, '$*', function(x) {
        var self = this;

        return self.$memberwise("*", x);
      });

      Opal.defn(self, '$/', function(x) {
        var self = this;

        return self.$memberwise("/", x);
      });

      Opal.defn(self, '$format', function(format) {
        var $a, $b, TMP_14, $c, $d, TMP_15, $e, $f, TMP_16, $g, $h, TMP_17, $i, $j, TMP_18, $k, $l, TMP_19, $m, $n, TMP_20, $o, self = this, str = nil;

        var array_size = arguments.length - 1;
        if(array_size < 0) array_size = 0;
        var args = new Array(array_size);
        for(var arg_index = 0; arg_index < array_size; arg_index++) {
          args[arg_index] = arguments[arg_index + 1];
        }
        if (format == null) {
          format = nil
        }
        str = ($a = ($b = ($c = ($d = ($e = ($f = ($g = ($h = ($i = ($j = ($k = ($l = ($m = ($n = (((($o = format) !== false && $o !== nil) ? $o : $scope.get('FORMAT'))).$dup()).$gsub, $m.$$p = (TMP_20 = function(){var self = TMP_20.$$s || this, $a;

        return ((("") + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)))) + "s")['$%'](self.$label())}, TMP_20.$$s = self, TMP_20), $m).call($n, /(%[-+.\d]*)n/)).$gsub, $k.$$p = (TMP_19 = function(){var self = TMP_19.$$s || this, $a;

        return ((("") + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)))) + "f")['$%'](self.$utime())}, TMP_19.$$s = self, TMP_19), $k).call($l, /(%[-+.\d]*)u/)).$gsub, $i.$$p = (TMP_18 = function(){var self = TMP_18.$$s || this, $a;

        return ((("") + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)))) + "f")['$%'](self.$stime())}, TMP_18.$$s = self, TMP_18), $i).call($j, /(%[-+.\d]*)y/)).$gsub, $g.$$p = (TMP_17 = function(){var self = TMP_17.$$s || this, $a;

        return ((("") + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)))) + "f")['$%'](self.$cutime())}, TMP_17.$$s = self, TMP_17), $g).call($h, /(%[-+.\d]*)U/)).$gsub, $e.$$p = (TMP_16 = function(){var self = TMP_16.$$s || this, $a;

        return ((("") + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)))) + "f")['$%'](self.$cstime())}, TMP_16.$$s = self, TMP_16), $e).call($f, /(%[-+.\d]*)Y/)).$gsub, $c.$$p = (TMP_15 = function(){var self = TMP_15.$$s || this, $a;

        return ((("") + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)))) + "f")['$%'](self.$total())}, TMP_15.$$s = self, TMP_15), $c).call($d, /(%[-+.\d]*)t/)).$gsub, $a.$$p = (TMP_14 = function(){var self = TMP_14.$$s || this, $a;

        return ((("(") + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)))) + "f)")['$%'](self.$real())}, TMP_14.$$s = self, TMP_14), $a).call($b, /(%[-+.\d]*)r/);
        if (format !== false && format !== nil) {
          return str['$%'](args)
          } else {
          return str
        };
      });

      Opal.defn(self, '$to_s', function() {
        var self = this;

        return self.$format();
      });

      Opal.defn(self, '$to_a', function() {
        var self = this;

        return [self.label, self.utime, self.stime, self.cutime, self.cstime, self.real];
      });

      self.$protected();

      return (Opal.defn(self, '$memberwise', function(op, x) {
        var self = this, $case = nil;

        return (function() {$case = x;if ((($scope.get('Benchmark')).$$scope.get('Tms'))['$===']($case)) {return (($scope.get('Benchmark')).$$scope.get('Tms')).$new(self.$utime().$__send__(op, x.$utime()), self.$stime().$__send__(op, x.$stime()), self.$cutime().$__send__(op, x.$cutime()), self.$cstime().$__send__(op, x.$cstime()), self.$real().$__send__(op, x.$real()))}else {return (($scope.get('Benchmark')).$$scope.get('Tms')).$new(self.$utime().$__send__(op, x), self.$stime().$__send__(op, x), self.$cutime().$__send__(op, x), self.$cstime().$__send__(op, x), self.$real().$__send__(op, x))}})();
      }), nil) && 'memberwise';
    })($scope.base, null);

    Opal.cdecl($scope, 'CAPTION', (((($scope.get('Benchmark')).$$scope.get('Tms'))).$$scope.get('CAPTION')));

    Opal.cdecl($scope, 'FORMAT', (((($scope.get('Benchmark')).$$scope.get('Tms'))).$$scope.get('FORMAT')));
  })($scope.base)
})(Opal);
