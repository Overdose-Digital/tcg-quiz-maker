### Install uglify js
npm install uglify-js -g

### Apply uglify js
uglifyjs src/quiz.js --output dist/quizV1.4.4.min.js -c -m

### Install uglify css
npm install -g uglifycss

### Apply uglify css
uglifycss src/sleepMaker.css --output dist/sleepMakerV1.0.0.min.css
uglifycss src/sleepyHead.css --output dist/sleepyHeadV1.0.0.min.css

## Don't forget change versions