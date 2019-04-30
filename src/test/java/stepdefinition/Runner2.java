package stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@target/failed.txt", 
tags = {}, strict = true, glue = "stepdefinition", plugin = {"html:target"}, dryRun = false, monochrome = true)
public class Runner2 {

}
