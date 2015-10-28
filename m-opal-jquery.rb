require 'opal'

def js?(value)
    `value == null || !value.$$class`
end

def opal?(value)
  !js?(value)
end

class JQ < OBx
  def initialize(selector)
    if opal?(selector) && selector.class ==  String
      selector = JQ.jquery(selector)
    else
      selector = JQ.jquery(selector) unless `selector instanceof $`
    end
    super(selector)
  end

  # most used instance methods
  proxy_method :html
  proxy_method :html=, :html
  proxy_method :val
  proxy_method :val=, :val
  proxy_method :attr
  proxy_method :css
  # events
  proxy_method :on
  proxy_method :ready
  # class methods
  def self.unbox
    `$`
  end
  def self.jquery(selector)
    `$(selector)`
  end
def self.now
    `$.now()`
  end
end

def JQ selector
  JQ.new selector
end
