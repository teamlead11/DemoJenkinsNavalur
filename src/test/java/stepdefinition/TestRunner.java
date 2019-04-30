package stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/AddtariffPlan.feature", 
tags = {}, strict = true, glue = "stepdefinition", plugin = {"html:target","json:src/main/resources/JsonReport.json"},
dryRun = false, monochrome = true)
public class TestRunner {

}
