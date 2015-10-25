require 'js'


module JavascriptProxy
  attr_reader :j
end

module JavascriptProxy::Helpers
  def proxy_method new, old=nil
    old = old || new
    define_method new do |*args|
      m = @j.JS[old]
      m.JS.call(@j,*args)
    end
  end
  private :proxy_method
end
