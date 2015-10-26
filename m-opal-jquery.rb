require 'opal'

$jquery = `$`

def jquery(selector)
  `$(selector)`
end

def js?(value)
    `value == null || !value.$$class`
end

def opal?(value)
  !js?(value)
end

class JQ < Ox
  def initialize(selector)
    if opal?(selector) && selector.class ==  String
      selector = jquery(selector)
    else
      selector = jquery(selector) unless `selector instanceof $`
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
  def self.now
    `$.now()`
  end
end

def JQ selector
  JQ.new selector
end
