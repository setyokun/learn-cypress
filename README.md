# learn-cypress
in here include cucumber config and html reporters with mochawesome

how to run 
1. run with open window and choose feature to run test 
> " npx cypress open " 

2. run with headless mode, run all feature - (created video, and reports)
> " npx cypress run " 

3. run with open browser, run all feature - (created video and reports)
> " npx cypress run --browser chrome " 

4. run with open browser, run spesific feature - (created video and reports)
> " npx cypress-tags run -e TAGS='@elon' --browser chrome "

5. open reports 
> " google-chrome ./cypress/reports/mochareports/report.html"