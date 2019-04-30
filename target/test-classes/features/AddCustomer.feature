#Sample Feature Definition Template
@regression @addcust @sprint2
Feature: To test add customer functionality

  Background: 
    Given The user is in add customer page

  @us1 @us3 @us2
  Scenario: To verify the customer ID generated 1
    When The user fill in the valid customer details
      | fname   | arul           |
      | lname   | selenium       |
      | email   | test@gmail.com |
      | address | chennai        |
      | phNum   |          12345 |
    And The user clicks the submit button
    Then The user should see the customer ID generated

Scenario: To verify the customer ID generated 1
    When The user fill in the valid customer details
      | fname   | arul           |
      | lname   | selenium       |
      | email   | test@gmail.com |
      | address | chennai        |
      | phNum   |          12345 |
    And The user clicks the submit button
    Then The user should see the customer ID generated


  @us2 @regression
  Scenario: To verify the customer ID generated 2
    When The user fill in the valid customer details
      | fname   | arul           |
      | lname   | selenium       |
      | email   | test@gmail.com |
      | address | chennai        |
      | phNum   |          12345 |
    When The user clicks the submit button
    Then The user should see the customer ID generated

  @us3
  Scenario: To verify the customer ID generated 3
    When The user fill in the valid customer details
      | fname   | arul           |
      | lname   | selenium       |
      | email   | test@gmail.com |
      | address | chennai        |
      | phNum   |          12345 |
    When The user clicks the submit button
    Then The user should see the customer ID generated
