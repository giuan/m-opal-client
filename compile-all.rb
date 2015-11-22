require 'opal'

['rbox', 'rxhr', 'm-opal-jquery'].each do |fn|
  puts "Compiling #{fn} ..."
  File.open("./jslib/#{fn}.js", 'wt') { |file|
    file.puts(Opal.compile(File.read(fn+'.rb'),{inline_operators: true}))
  }
end
