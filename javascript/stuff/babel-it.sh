echo "transpiling "$1-es6.js to ../$1.js 
babel --presets=es2015 $1-es6.js > ../$1.js
