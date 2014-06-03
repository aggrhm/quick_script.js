require "logger"
require "fileutils"
require "pathname"
require "sprockets"
require "sprockets-sass"

ROOT        = Pathname(File.dirname(__FILE__))
LOGGER      = Logger.new(STDOUT)
BUNDLES     = %w( quick_script.js )
BUILD_DIR   = ROOT.join("dist")
SOURCE_DIR  = ROOT.join("src")

desc 'Compile assets.'
task :compile do
  sprockets = Sprockets::Environment.new(ROOT) do |env|
    env.logger = LOGGER
  end

  # init directories
  ['js'].each do |dir|
    path = File.join(BUILD_DIR, dir)
    FileUtils.remove_dir(path) if File.exists?(path)
    FileUtils.mkdir_p path
  end

  sprockets.append_path(SOURCE_DIR.join('javascripts').to_s)

	# javascript
	full_js = sprockets.find_asset('quick_script.js').to_s
	#compressed_js = Uglifier.compile(full_js)
	File.open(BUILD_DIR.join('js', 'quick_script.js'), 'w') do |f|
		f.write(full_js)
	end
	
end

