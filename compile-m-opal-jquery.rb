require 'opal'

File.open('m-opal-jquery.js', 'wt') { |file| file.puts(Opal.compile(File.read('m-opal-jquery.rb'),{inline_operators: true})) }

system("cp m-opal-jquery.rb /Users/giuan/.rbenv/versions/2.2.1/lib/ruby/gems/2.2.0/gems/opal-0.9.0.beta1/stdlib")
