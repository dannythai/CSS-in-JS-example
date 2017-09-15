WEBPACK=./node_modules/.bin/webpack-dev-server

jdate:
	$(WEBPACK) --config jdate.config.js --progress --color

cm:
	$(WEBPACK) --config cm.config.js --progress --color