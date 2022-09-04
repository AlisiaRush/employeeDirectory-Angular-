# employeeDirectory

Angular application using custom pipe, filter and service call to API to retrieve and manipulate data

1.  Initialize application:
    a. git clone https://github.com/AlisiaRush/employeeDirectory.git
    b. ng n ED
2.  cd into ED and use git command npm start
3.  Create an Angular project with a custom prefix - this can be anything you want other than the
    default.
    - Set the prefix by going to the angular.json file and search for prefix. You will be able to change the value from the default "app" to your prefix name.. In this case, it will be "ed". Now whenever you create a component using the angular CLI command ng g c, it will prefix the application selectors with "ed". For example"
    * ed-your-component
4.  Create a proxy configuration to handle API requests from localhost to https://209.217.95.19:18100/

        a. Create a file named "proxy.config.json"
        - You will need to setup as follows:

        {

    "/api/\*": {
    "target": "https://209.217.95.19:18100",
    "secure": false,
    "logLevel": "debug"
    }
    }

5.  Create a service that will handle retrieve employee and department data from the back end:
    • GET /api/v2/employees
    • GET /api/v2/departments

6.  Based on the data provided, define a typescript interface that accurately represents the response
    payload

7.  create a folder name images under the assests folder. This is where the mockup for the project will be located.

8.  Following the provided mockup, implement a user interface for viewing the employees.
9.  Installing Angular Material
    a. ng add @angular/material

10. Installing Bootstrap
    a. npm i bootstrap
    b. npm i jquery
    c. Set up the angular.json file like so:

    "styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    ]
