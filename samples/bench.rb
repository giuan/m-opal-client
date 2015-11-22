# require 'opal'
# require 'benchmark'
# require 'js'
# require 'rbox'
# require 'native'

class Element < RBox
  proxy_attr_accessor :innerHTML
  proxy_attr_accessor :value
end

class Event < RBox
  proxy_attr_reader_rbox :target
end

ready = ->() do
   _msg = `document`.JS.getElementById('message')
   _btn = `document`.JS.getElementById('button')
   msg = Element.new(_msg)
   msg.innerHTML = "Hello from rbox"
   button = `document`.JS.getElementById('button')
   button.JS.addEventListener :click, ->(e) do
     bench
   end
   def bench
     _msg = `document`.JS.getElementById('message')
     _btn = `document`.JS.getElementById('button')
     n = 100000
     puts "RBox"
     puts Benchmark.measure {
       msg = Element.new(_msg)
       btn = Element.new(_btn)
       n.times {
         msg.innerHTML = "<br>" + btn.value
       }
     }
     puts "Native"
     puts Benchmark.measure {
       msg = Native(_msg)
       btn = Native(_btn)
       n.times {
         msg.innerHTML = "<br>" + btn.value
       }
     }
     puts ".JS."
     puts Benchmark.measure {
       n.times {_msg.JS['innerHTML'] = "<br>" + _btn.JS['value']}
     }
     puts "Javascript"
     puts Benchmark.measure {
       %x{
         for (var i=0; i <= n; i++) {
           _msg.innerHTML = "<br>" + _btn.value
         }
       }
     }
     puts "Opal n.times"
     puts Benchmark.measure {
       n.times {
       }
     }
     puts "Javascript for"
     puts Benchmark.measure {
       %x{
         for (var i=0; i <= n; i++) {
         }
       }
     }
  end

end
`document.body`.JS['onload'] = ready
