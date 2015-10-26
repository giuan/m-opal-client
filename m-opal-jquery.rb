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

class JQ
  include JavascriptProxy
  extend JavascriptProxy::Helpers

  def initialize(selector)
    if opal?(selector) && selector.class ==  String
      selector = jquery(selector)
    else
      selector = jquery(selector) unless `selector instanceof $`
    end
    @j = selector
  end
  # most used instance methods
  proxy_method :html
  proxy_method :html=, :html
  proxy_method :val
  proxy_method :val=, :val
  proxy_method :attr
  proxy_method :on
  proxy_method :ready

  # class methods
  def self.now
    `$.now()`
  end
end

def JQ element
  JQ.new element
end
