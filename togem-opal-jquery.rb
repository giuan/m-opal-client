require 'fileutils'
path = `gem path opal`.chop + '/stdlib'
FileUtils.cp 'm-opal-jquery.rb', path
