require 'opal'
require 'racc/parser'


File.open("javascriptproxy.js", 'wt') { |file| file.write(Opal::Builder.build('./javascriptproxy.rb')) }
File.open("m-opal-jquery.js", 'wt') { |file| file.write(Opal::Builder.build('./m-opal-jquery.rb')) }
