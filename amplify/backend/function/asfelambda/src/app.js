/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	
Amplify Params - DO NOT EDIT */

var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/**********************
 * Example get method *
 **********************/

app.get("/fleet", async function(req, res) {
  // Add your code here
  const headers = {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin":
      "http://as-loadbalancer-521356964.us-east-2.elb.amazonaws.com",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    accept: "application/json",
  };
  const fleet = [
    {
      id: 12345678,
      name: "Executive car 1",
      vin: "ASD423E3D3RF5",
      make: "Mazda",
      model: "CX-5",
      year: "2019",
      fuelType: "petrol",
      type: "SUV",
      Position: {
        lat: 3.995,
        lon: 43.2221,
      },
      odometer: 43546,
      fuel: 33.4,
      battery: 12.7,
    },
    {
      id: 12345678,
      name: "Executive car 2",
      vin: "ASD423E3D3RF5",
      make: "Mazda",
      model: "CX-5",
      year: "2019",
      fuelType: "petrol",
      type: "SUV",
      Position: {
        lat: 3.795,
        lon: 43.1221,
      },
      odometer: 43546,
      fuel: 33.4,
      battery: 12.7,
    },
    {
      id: 12345678,
      name: "Executive car 3",
      vin: "ASD423E3D3RF5",
      make: "Mazda",
      model: "CX-5",
      year: "2019",
      fuelType: "petrol",
      type: "SUV",
      Position: {
        lat: 4.095,
        lon: 43.2221,
      },
      odometer: 43546,
      fuel: 33.4,
      battery: 12.7,
    },
    {
      id: 12345678,
      name: "Executive car 4",
      vin: "ASD423E3D3RF5",
      make: "Mazda",
      model: "CX-5",
      year: "2019",
      fuelType: "petrol",
      type: "SUV",
      Position: {
        lat: 4.195,
        lon: 43.2221,
      },
      odometer: 43546,
      fuel: 33.4,
      battery: 12.7,
    },
  ];
  res.json({
    success: "get call succeed!",
    url: req.url,
    fleet: fleet,
  });
});

app.get("/fleet/*", function(req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post("/fleet", function(req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.post("/fleet/*", function(req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put("/fleet", function(req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/fleet/*", function(req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/fleet", function(req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/fleet/*", function(req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function() {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
