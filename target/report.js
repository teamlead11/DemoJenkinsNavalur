$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/AddtariffPlan.feature");
formatter.feature({
  "name": "To test add tariff plan",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@addtariff"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sprint1"
    },
    {
      "name": "@us1234"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To test add tariif plan with valid details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us4"
    }
  ]
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user fill in the plan details \"\u003cMonthrent\u003e\",\"\u003cFreeLoc\u003e\",\"\u003cFreeInt\u003e\",\"\u003cFreeSMS\u003e\",\"\u003cLocCharges\u003e\",\"\u003cIntCharges\u003e\",\"\u003csmsCharges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user clicks the submit button in add tariff plan",
  "keyword": "When "
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Monthrent",
        "FreeLoc",
        "FreeInt",
        "FreeSMS",
        "LocCharges",
        "IntCharges",
        "smsCharges"
      ]
    },
    {
      "cells": [
        "500",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "700",
        "800",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "800",
        "700",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test add tariif plan with valid details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addtariff"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sprint1"
    },
    {
      "name": "@us1234"
    },
    {
      "name": "@us4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the plan details \"500\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.the_user_fill_in_the_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button in add tariff plan",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.the_user_clicks_the_submit_button_in_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test add tariif plan with valid details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addtariff"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sprint1"
    },
    {
      "name": "@us1234"
    },
    {
      "name": "@us4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the plan details \"700\",\"800\",\"300\",\"400\",\"500\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.the_user_fill_in_the_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button in add tariff plan",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.the_user_clicks_the_submit_button_in_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test add tariif plan with valid details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addtariff"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sprint1"
    },
    {
      "name": "@us1234"
    },
    {
      "name": "@us4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the plan details \"800\",\"700\",\"300\",\"400\",\"500\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.the_user_fill_in_the_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button in add tariff plan",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.the_user_clicks_the_submit_button_in_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To test add tariif plan with valid details negative",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user fill in the plan details \"\u003cMonthrent\u003e\",\"\u003cFreeLoc\u003e\",\"\u003cFreeInt\u003e\",\"\u003cFreeSMS\u003e\",\"\u003cLocCharges\u003e\",\"\u003cIntCharges\u003e\",\"\u003csmsCharges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user clicks the submit button in add tariff plan",
  "keyword": "When "
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Monthrent",
        "FreeLoc",
        "FreeInt",
        "FreeSMS",
        "LocCharges",
        "IntCharges",
        "smsCharges"
      ]
    },
    {
      "cells": [
        "ABC",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test add tariif plan with valid details negative",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addtariff"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sprint1"
    },
    {
      "name": "@us1234"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the plan details \"ABC\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.the_user_fill_in_the_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button in add tariff plan",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.the_user_clicks_the_submit_button_in_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.the_user_should_see_the_success_message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : please fill all fields Correct Value}\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2SONJG7\u0027, ip: \u0027192.168.1.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:56599}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 7c7f28378c1cc6c44d5817ad5fe40852\n*** Element info: {Using\u003dtag name, value\u003dh2}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:172)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByTagName(RemoteWebDriver.java:396)\r\n\tat org.openqa.selenium.By$ByTagName.findElement(By.java:320)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinition.Steps.the_user_should_see_the_success_message(Steps.java:92)\r\n\tat ✽.The user should see the success message(src/test/resources/features/AddtariffPlan.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});