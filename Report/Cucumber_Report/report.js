$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/FeatureFile/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Adactin Practice",
  "description": "",
  "id": "adactin-practice",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login Functionality",
  "description": "",
  "id": "adactin-practice;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user is launcing the application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user is enter the username \"\u003cusername\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user is enter the password \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is click on login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "adactin-practice;login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "adactin-practice;login-functionality;;1"
    },
    {
      "cells": [
        "jayashree",
        "Jaya@12345"
      ],
      "line": 16,
      "id": "adactin-practice;login-functionality;;2"
    },
    {
      "cells": [
        "jayashree054",
        "Jaya@12345"
      ],
      "line": 17,
      "id": "adactin-practice;login-functionality;;3"
    },
    {
      "cells": [
        "jayashree054",
        "Jaya@123"
      ],
      "line": 18,
      "id": "adactin-practice;login-functionality;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Login Functionality",
  "description": "",
  "id": "adactin-practice;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user is launcing the application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user is enter the username \"jayashree\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user is enter the password \"Jaya@12345\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Adactin.user_is_launcing_the_application()"
});
formatter.result({
  "duration": 3640138900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jayashree",
      "offset": 28
    }
  ],
  "location": "StepDefinition_Adactin.user_is_enter_the_username_in_username_field(String)"
});
formatter.result({
  "duration": 144814900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaya@12345",
      "offset": 28
    }
  ],
  "location": "StepDefinition_Adactin.user_is_enter_the_password_in_password_field(String)"
});
formatter.result({
  "duration": 206888500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_is_click_on_login_button()"
});
formatter.result({
  "duration": 759259500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login Functionality",
  "description": "",
  "id": "adactin-practice;login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user is launcing the application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user is enter the username \"jayashree054\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user is enter the password \"Jaya@12345\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Adactin.user_is_launcing_the_application()"
});
formatter.result({
  "duration": 507130300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jayashree054",
      "offset": 28
    }
  ],
  "location": "StepDefinition_Adactin.user_is_enter_the_username_in_username_field(String)"
});
formatter.result({
  "duration": 177296600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaya@12345",
      "offset": 28
    }
  ],
  "location": "StepDefinition_Adactin.user_is_enter_the_password_in_password_field(String)"
});
formatter.result({
  "duration": 131013000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_is_click_on_login_button()"
});
formatter.result({
  "duration": 502561500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login Functionality",
  "description": "",
  "id": "adactin-practice;login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user is launcing the application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user is enter the username \"jayashree054\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user is enter the password \"Jaya@123\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Adactin.user_is_launcing_the_application()"
});
formatter.result({
  "duration": 584568800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jayashree054",
      "offset": 28
    }
  ],
  "location": "StepDefinition_Adactin.user_is_enter_the_username_in_username_field(String)"
});
formatter.result({
  "duration": 230112900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaya@123",
      "offset": 28
    }
  ],
  "location": "StepDefinition_Adactin.user_is_enter_the_password_in_password_field(String)"
});
formatter.result({
  "duration": 102030100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_is_click_on_login_button()"
});
formatter.result({
  "duration": 3389687800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search Hotel Page",
  "description": "",
  "id": "adactin-practice;search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User Select The Hotel Location",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User Select The \"Hotel Sunshine\"in Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User Select The Number of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User Select The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User Select The Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User Select The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User Select The Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User Click on The Search Button And It Navigate To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Select_The_Hotel_Location()"
});
formatter.result({
  "duration": 1174951400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Sunshine",
      "offset": 17
    }
  ],
  "location": "StepDefinition_Adactin.user_Select_The_in_Hotel(String)"
});
formatter.result({
  "duration": 282338900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 236692600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Select_The_Number_of_Rooms()"
});
formatter.result({
  "duration": 192821600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Select_The_Check_In_Date()"
});
formatter.result({
  "duration": 242238800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Select_The_Check_Out_Date()"
});
formatter.result({
  "duration": 360152600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Select_The_Adults_Per_Room()"
});
formatter.result({
  "duration": 256852700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Select_The_Children_Per_Room()"
});
formatter.result({
  "duration": 284971200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Click_on_The_Search_Button_And_It_Navigate_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 904240800,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Select Hotel Page",
  "description": "",
  "id": "adactin-practice;select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "User Click on The Radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User Click on The Continue Button And It Navigate To The Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Click_on_The_Radio_Button()"
});
formatter.result({
  "duration": 101602300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Click_on_The_Continue_Button_And_It_Navigate_To_The_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 778244700,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Book A Hotel Page",
  "description": "",
  "id": "adactin-practice;book-a-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "User Enter The First Name in First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User Enter The Last Name in Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User Enter The Billing Address in Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User Enter The Credit Card No in Credit Card No Field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User Select The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User Select The Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User Select The Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User Enter The CVV Number in CVV Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User Click on The Book Now Button And It Navigate To The Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Enter_The_First_Name_in_First_Name_Field()"
});
formatter.result({
  "duration": 157485900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Enter_The_Last_Name_in_Last_Name_Field()"
});
formatter.result({
  "duration": 379986500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Enter_The_Billing_Address_in_Billing_Address_Field()"
});
formatter.result({
  "duration": 147498900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Enter_The_Credit_Card_No_in_Credit_Card_No_Field()"
});
formatter.result({
  "duration": 95245500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Select_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 184620100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Select_The_Expiry_Month()"
});
formatter.result({
  "duration": 184932600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Select_The_Expiry_Year()"
});
formatter.result({
  "duration": 171685500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Enter_The_CVV_Number_in_CVV_Number_Field()"
});
formatter.result({
  "duration": 141473600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Adactin.user_Click_on_The_Book_Now_Button_And_It_Navigate_To_The_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 70558600,
  "status": "passed"
});
});