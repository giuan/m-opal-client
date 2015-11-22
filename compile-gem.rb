require 'opal'

['opal', 'opal-parser','benchmark', 'native'].each do |fn|
  puts "Compiling #{fn} ..."
  File.open("./jslib/#{fn}.js", 'wt') { |file|
    file.puts(Opal::Builder.build(fn+'.rb',{inline_operators: true}))
  }
end
