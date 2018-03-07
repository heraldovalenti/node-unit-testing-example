# Summary
Example project to show how unit testing can be done in NodeJS

# Instructions
* First install required dependencies with `npm install`
* Execute unit tests with `npm test`
* Run the application with `npm start`

# API methods
* `curl -X GET http://localhost:5000/tags` lists all tags
* `curl -X POST -H "Content-Type: application/json" -d '{ "tag": "Home" }' http://localhost:5000/tags` to create a tag named "Home"
* `curl -X DELETE -H "Content-Type: application/json" -d '{ "tag": "Home" }' http://localhost:5000/tags` to delete the tag named "Home"

# References
https://blog.risingstack.com/node-js-project-structure-tutorial-node-js-at-scale/  
https://blog.risingstack.com/node-hero-node-js-unit-testing-tutorial/  
https://blog.risingstack.com/node-hero-node-js-project-structure-tutorial/  
http://chaijs.com/api/assert/  
https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4