package stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class Steps {

	@Given("The user is in add customer page")
	public void xxxx() {

		Hooks.driver.get("http://demo.guru99.com/telecom/addcustomer.php");
	}

	/*
	 * @When("The user fill in the valid customer details") public void
	 * the_user_fill_in_the_valid_customer_details() {
	 * Hooks.driver.findElement(By.xpath("//label[text()='Done']")).click();
	 * Hooks.driver.findElement(By.id("fname")).sendKeys("Arul");
	 * Hooks.driver.findElement(By.id("lname")).sendKeys("selenium");
	 * Hooks.driver.findElement(By.id("email")).sendKeys("test@gmail.com");
	 * Hooks.driver.findElement(By.name("addr")).sendKeys("chennai");
	 * Hooks.driver.findElement(By.name("telephoneno")).sendKeys("11122"); }
	 */

	@When("The user fill in the valid customer details")
	public void the_user_fill_in_the_valid_customer_details(DataTable customerDetails) {
		/*
		 * List<String> customerDetailsList = customerDetails.asList(String.class);
		 * Hooks.driver.findElement(By.xpath("//label[text()='Done']")).click();
		 * Hooks.driver.findElement(By.id("fname")).sendKeys(customerDetailsList.get(0))
		 * ;
		 * Hooks.driver.findElement(By.id("lname")).sendKeys(customerDetailsList.get(1))
		 * ;
		 * Hooks.driver.findElement(By.id("email")).sendKeys(customerDetailsList.get(2))
		 * ;
		 * Hooks.driver.findElement(By.name("addr")).sendKeys(customerDetailsList.get(3)
		 * );
		 * Hooks.driver.findElement(By.name("telephoneno")).sendKeys(customerDetailsList
		 * .get(4 ));
		 */

		Map<String, String> customerDetailsMap = customerDetails.asMap(String.class, String.class);
		Hooks.driver.findElement(By.xpath("//label[text()='Done']")).click();
		Hooks.driver.findElement(By.id("fname")).sendKeys(customerDetailsMap.get("fname"));
		Hooks.driver.findElement(By.id("lname")).sendKeys(customerDetailsMap.get("lname"));
		Hooks.driver.findElement(By.id("email")).sendKeys(customerDetailsMap.get("email"));
		Hooks.driver.findElement(By.name("addr")).sendKeys(customerDetailsMap.get("address"));
		Hooks.driver.findElement(By.name("telephoneno")).sendKeys(customerDetailsMap.get("phNum"));
		System.out.println("original changes");
	}

	@When("The user clicks the submit button")
	public void the_user_clicks_the_submit_button() {
		Hooks.driver.findElement(By.name("submit")).click();
	}

	@Then("The user should see the customer ID generated")
	public void the_user_should_see_the_customer_ID_generated() {
		Assert.assertTrue(Hooks.driver.findElement(By.tagName("h3")).isDisplayed());
	}

	@Given("The user is in add tariff plan page")
	public void the_user_is_in_add_tariff_plan_page() {

		Hooks.driver.get("http://demo.guru99.com/telecom/addtariffplans.php");
	}

	@When("The user fill in the plan details {string},{string},{string},{string},{string},{string},{string}")
	public void the_user_fill_in_the_plan_details(String monthRent, String FreeLoc, String FreeInt, String FreeSMS,
			String LocCharges, String IntCharges, String test) {

		Hooks.driver.findElement(By.id("rental1")).sendKeys(monthRent);
		Hooks.driver.findElement(By.id("local_minutes")).sendKeys(FreeLoc);
		Hooks.driver.findElement(By.id("inter_minutes")).sendKeys(FreeInt);
		Hooks.driver.findElement(By.id("sms_pack")).sendKeys(FreeSMS);
		Hooks.driver.findElement(By.id("minutes_charges")).sendKeys(LocCharges);
		Hooks.driver.findElement(By.id("inter_charges")).sendKeys(IntCharges);
		Hooks.driver.findElement(By.id("sms_charges")).sendKeys(test);
	}

	@When("The user clicks the submit button in add tariff plan")
	public void the_user_clicks_the_submit_button_in_add_tariff_plan() {
		Hooks.driver.findElement(By.name("submit")).click();
	}

	@Then("The user should see the success message")
	public void the_user_should_see_the_success_message() {
		Assert.assertTrue(Hooks.driver.findElement(By.tagName("h2")).isDisplayed());
	}

}
