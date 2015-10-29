require 'opal'
require 'js'

module JavascriptProxy
  attr_reader :j
  alias_method :unbox, :j
  remove_method :j

  def [](prop)
    @j.JS[prop]
  end

  def []=(prop, value)
    @j.JS[prop] = value
  end

  def jsc(method, *args)
    m = @j.JS[method]
    m.JS.call(@j,*args)
  end

  def to_s
    @j.JS.toString()
  end
end

module JavascriptProxy::Helpers
  def proxy_method method, js_method=nil
    js_method = js_method || method
    define_method method do |*args|
      m = @j.JS[js_method]
      m.JS.call(@j,*args)
    end
  end
  def proxy_attr_reader attr, js_attr=nil
    js_attr = js_attr || attr
    define_method attr do ||
      @j.JS[js_attr]
    end
  end
  def proxy_attr_writer attr, js_attr=nil
    js_attr = js_attr || attr
    attr += "="
    define_method attr do |value|
      @j.JS[js_attr] = value
    end
  end
  def proxy_attr_accessor attr, js_attr=nil
    proxy_attr_reader attr, js_attr
    proxy_attr_writer attr, js_attr
  end

  private :proxy_method, :proxy_attr_reader, :proxy_attr_accessor
end

# Opal Box
class OBx
  include JavascriptProxy
  extend JavascriptProxy::Helpers
  def initialize obj
    @j = obj
  end
end

def OBx(obj)
  OBx.new obj
end

# Opal Box with methods and properties (slow)
class OBxAll < OBx
  def method_missing(meth, *args)
    meth = meth.chop() if meth.end_with?('=')
    m = @j.JS[meth]
    if !m
      super.method_missing(meth, *args)
    elsif `typeof m == 'function'`
      m.JS.call(@j,*args)
    elsif args.length > 0
      @j.JS[meth] = args[0]
    else
      m
    end
  end
end

def OBxAll(obj)
  OBxAll.new obj
end
