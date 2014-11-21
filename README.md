protractordemo
==============
## To Get Start:

Install Nodejs
```
http://nodejs.org/download/
```

Clone the github repository:
```
git clone https://github.com/aieng09/protractordemo.git
cd protractor
npm install
```
Update Webdriver Manager.
```
node Node_module/protractor/bin/webdriver-manager update
```
Start up a selenium server. 
```
node Node_module/protractor/bin/webdriver-manager start
```
By default, the tests expect the selenium server to be running at http://localhost:4444/wd/hub.

Protractor's test suite runs against the included test application. Start that up with
```
npm start
```
Then run the tests with
```
npm test
```
