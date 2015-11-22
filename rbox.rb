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

  def proxy_method_rbox method, js_method=nil, box_class=RBox
    if js_method && js_method.is_a?(Proc)
      box_class = js_method; js_method = nil
    end
    js_method = js_method || method
    define_method method do |*args|
      m = @j.JS[js_method]
      box_class.new(m.JS.call(@j,*args))
    end
  end

  def proxy_attr_reader_rbox attr, js_attr=nil, box_class=RBox
    if js_attr && js_attr.is_a?(Proc)
      box_class = js_attr; js_attr = nil
    end
    js_attr = js_attr || attr
    define_method attr do ||
      box_class.new(@j.JS[js_attr])
    end
  end

  private :proxy_method, :proxy_attr_reader, :proxy_attr_writer, :proxy_attr_accessor
  private :proxy_method_rbox, :proxy_attr_reader_rbox
end

# Opal Ruby Box
class RBox
  include JavascriptProxy
  extend JavascriptProxy::Helpers
  def initialize obj
    @j = obj
  end
end

def RBox(obj)
  RBox.new obj
end

# Opal Ruby Box with methods and properties (slow)
module ProxyMethodMissing
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
