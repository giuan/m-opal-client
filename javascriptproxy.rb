require 'opal'

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

  def js(method, *args)
    m = @j.JS[method]
    m.JS.call(@j,*args)
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

class Ox
  include JavascriptProxy
  extend JavascriptProxy::Helpers
  def initialize obj
    @j = obj
  end
end

def Ox(obj)
  Ox.new obj
end
