require 'opal'

['bench'].each do |fn|
  puts "Compiling #{fn} ..."
  File.open("./#{fn}.js", 'wt') { |file|
    file.puts(Opal.compile(File.read(fn+'.rb'),{inline_operators: true}))
  }
end
