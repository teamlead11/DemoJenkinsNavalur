#Author: your.email@your.domain.com
@addtariff @smoke @sprint1 @us1234
Feature: To test add tariff plan

  @us4
  Scenario Outline: To test add tariif plan with valid details
    Given The user is in add tariff plan page
    When The user fill in the plan details "<Monthrent>","<FreeLoc>","<FreeInt>","<FreeSMS>","<LocCharges>","<IntCharges>","<smsCharges>"
    When The user clicks the submit button in add tariff plan
    Then The user should see the success message

    Examples: 
      | Monthrent | FreeLoc | FreeInt | FreeSMS | LocCharges | IntCharges | smsCharges |
      |       500 |     200 |     300 |     400 |        500 |        600 |        700 |
      |       700 |     800 |     300 |     400 |        500 |        600 |        700 |
      |       800 |     700 |     300 |     400 |        500 |        600 |        700 |

  Scenario Outline: To test add tariif plan with valid details negative
    Given The user is in add tariff plan page
    When The user fill in the plan details "<Monthrent>","<FreeLoc>","<FreeInt>","<FreeSMS>","<LocCharges>","<IntCharges>","<smsCharges>"
    When The user clicks the submit button in add tariff plan
    Then The user should see the success message

    Examples: 
      | Monthrent | FreeLoc | FreeInt | FreeSMS | LocCharges | IntCharges | smsCharges |
      | ABC       |     200 |     300 |     400 |        500 |        600 |        700 |
