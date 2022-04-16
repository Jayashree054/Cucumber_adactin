Feature: Adactin Practice




Scenario Outline: Login Functionality

Given user is launcing the application
When user is enter the username "<username>" in username field
And user is enter the password "<password>" in password field
Then user is click on login button
 
 Examples:
 
 |username|password|
 |jayashree|Jaya@12345|
 |jayashree054|Jaya@12345|
 |jayashree054|Jaya@123|
 
 
 
 
 Scenario: Search Hotel Page
When User Select The Hotel Location
And User Select The "Hotel Sunshine"in Hotel
And User Select The Room Type
And User Select The Number of Rooms
And User Select The Check In Date
And User Select The Check Out Date
And User Select The Adults Per Room
And User Select The Children Per Room
Then User Click on The Search Button And It Navigate To The Select Hotel Page
 
 
 
 Scenario: Select Hotel Page
When User Click on The Radio Button
Then User Click on The Continue Button And It Navigate To The Book A Hotel Page



Scenario: Book A Hotel Page
When User Enter The First Name in First Name Field
And User Enter The Last Name in Last Name Field
And User Enter The Billing Address in Billing Address Field
And User Enter The Credit Card No in Credit Card No Field
And User Select The Credit Card Type
And User Select The Expiry Month
And User Select The Expiry Year
And User Enter The CVV Number in CVV Number Field
Then User Click on The Book Now Button And It Navigate To The Booking Confirmation Page
