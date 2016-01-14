require 'opal'

def js?(value)
    `value == null || !value.$$class`
end

def opal?(value)
  !js?(value)
end

class JQ < RBox
  def initialize(selector)
    if opal?(selector) && selector.class ==  String
      selector = JQ.jquery(selector)
    else
      selector = JQ.jquery(selector) unless `selector instanceof $`
    end
    super(selector)
  end

  # method that return a JQ object
  def find(selector)
    JQ(@j.JS.find(selector))
  end
  def filter(selector)
    JQ(@j.JS.filter(selector))
  end

  # most used instance methods
  proxy_method :html
  proxy_method :html=, :html
  proxy_method :val
  proxy_method :val=, :val
  proxy_method :text
  proxy_method :text=, :text
  proxy_method :attr
  proxy_method :prop
  proxy_method :css
  proxy_method :each
  def [](i)
    @j.JS[i]
  end

  # events
  proxy_method :on
  proxy_method :ready

  # form
  proxy_method :serialize
  proxy_method :serialize_array, :serializeArray

  # properties
  proxy_attr_reader :length

  # class methods
  def self.unbox
    `$`
  end
  def self.jquery(selector)
    `$(selector)`
  end
  def self.each collection, fn
    `$.each(collection, fn)`
  end
  # Ajax
  def self.ajax(settings=nil)
    JqXHR.new(`$`.JS.ajax(settings))
  end
  def self.get(url, data=nil, success=nil, datatype=nil)
    JqXHR.new(`$`.JS.get(url, data, success, datatype))
  end
  def self.getJSON(url, data=nil, success=nil)
    JqXHR.new(`$`.JS.getJSON(url, data, success))
  end
  def self.getScript(url, success=nil)
    JqXHR.new(`$`.JS.getScript(url, success))
  end
  def self.post(url, data=nil, success=nil, datatype=nil)
    JqXHR.new(`$`.JS.post(url, data, success, datatype))
  end



  def self.now
    `$.now()`
  end
end

def JQ selector
  JQ.new selector
end

class JqXHR < RBox
  proxy_method :done
  proxy_method :fail
  proxy_method :always
end

class Event < RBox
  proxy_attr_reader :meta_key, :metaKey
  proxy_attr_reader :page_x, :pageX
  proxy_attr_reader :page_y, :pageY
  proxy_method :prevent_default, :preventDefault
  proxy_method :stop_propagation, :stopPropagation
  proxy_attr_reader :target
  proxy_attr_reader :which
end

class Element < RBox
end
