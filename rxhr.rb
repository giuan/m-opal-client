require_relative 'rbox'

class RXhr < RBox
  proxy_method :open
  proxy_method :send
  # events load, progress, error, abort, timeout, loadend
  proxy_method :on, :addEventListener
  def initialize
    super `new XMLHttpRequest()`
  end

  # to implement
  def get(url, params, handler=nil)
    open('GET',url)
    on('load', handler) if handler
  end
  def post(url, handler=nil)
    open('POST',url)
    on('load', handler) if handler
  end
  def _send(params)
  end

end
