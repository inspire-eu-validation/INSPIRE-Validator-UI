# Before running test with Selenium:
- Make sure base URL present in the file (now http://loaclhost:8080/INSPIRE-Validator-UI) is correct. Substitute with the correct one if it isn't the URL you want to test
- Substitute the <path> string (present twice in the test file: rows 92 and 195) with the correct path where is the folder 'metadata' (now it is under 'selenium-test')
- Make sure captcha verification is disabled (you can make this action from config.js)