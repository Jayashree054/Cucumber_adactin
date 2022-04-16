package com.stepdefinition;

import org.junit.After;
import org.junit.Before;
import cucumber.api.*;
import org.openqa.selenium.WebDriver;

import com.Adactin_Helper_File.FileReaderManager1;
import com.BaseClass.Base_Class;
import com.PojoAdactin.PageObjectManager_1;
import com.RunnerFile.RunnerFile_Adactin;

import cucumber.api.Scenario;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition_Adactin extends Base_Class{
	

	public static WebDriver driver = RunnerFile_Adactin.driver;
	public static PageObjectManager_1 pom = new PageObjectManager_1(driver);
	
	
	
	@Before
	public void beforeHooks(Scenario s) {
		
            String name = s.getName();
            
            System.out.println("Before Hooks :"+name);
	}
	
	@After
	public void afterHooks(Scenario s1) {
		
            String status = s1.getStatus();
            
            System.out.println("After Hooks :"+status);
	}
	
	
	
	@Given("^user is launcing the application$")
	public void user_is_launcing_the_application() throws Throwable {
		
		getUrl(FileReaderManager1.getInstance_FRM1().getInstance_CR1().getUrl());
		clickButton(pom.getInstance_l().getLogin());
	    
	}

	
	@When("^user is enter the username \"([^\"]*)\" in username field$")
	public void user_is_enter_the_username_in_username_field(String username) throws Throwable {
	    
		
		inputText(pom.getInstance_l().getUsername(), username);
	}

			   	

	@And("^user is enter the password \"([^\"]*)\" in password field$")
	public void user_is_enter_the_password_in_password_field(String password) throws Throwable {
	   
		inputText(pom.getInstance_l().getPassword(), password);
		
	}

	@Then("^user is click on login button$")
	public void user_is_click_on_login_button() throws Throwable {
		
		clickButton(pom.getInstance_l().getLogin());
	   
	}


	// search hotel
	
	
	@When("^User Select The Hotel Location$")
	public void user_Select_The_Hotel_Location() throws Throwable {
		
		 dropDown(pom.getInstance_sh().getLocation(), "ByValue",particularCellData("C:\\Users\\DELL\\eclipse-workspace\\Cucumber_Project\\Adactin_Testcases.xlsx", 6,6));
	    
	}

	@When("^User Select The \"([^\"]*)\"in Hotel$")
	public void user_Select_The_in_Hotel(String arg1) throws Throwable {
	    
		dropDown(pom.getInstance_sh().getHotel(), "ByValue", particularCellData("C:\\Users\\DELL\\eclipse-workspace\\Cucumber_Project\\Adactin_Testcases.xlsx", 7, 6));
	}

	@When("^User Select The Room Type$")
	public void user_Select_The_Room_Type() throws Throwable {
		
		dropDown(pom.getInstance_sh().getRoom(), "VisibleText", particularCellData("C:\\Users\\DELL\\eclipse-workspace\\Cucumber_Project\\Adactin_Testcases.xlsx", 8, 6));
	    
	}

	@When("^User Select The Number of Rooms$")
	public void user_Select_The_Number_of_Rooms() throws Throwable {
		
		dropDown(pom.getInstance_sh().getNum(), "ByValue",particularCellData("C:\\Users\\DELL\\eclipse-workspace\\Cucumber_Project\\Adactin_Testcases.xlsx", 9, 6));
	    
	}

	@When("^User Select The Check In Date$")
	public void user_Select_The_Check_In_Date() throws Throwable {
		
         clear(pom.getInstance_sh().getFdate());
		
		inputText(pom.getInstance_sh().getFdate(),FileReaderManager1.getInstance_FRM1().getInstance_CR1().getFdate());
	    
	}

	@When("^User Select The Check Out Date$")
	public void user_Select_The_Check_Out_Date() throws Throwable {
		
		 clear(pom.getInstance_sh().getEdate());
			
			inputText(pom.getInstance_sh().getEdate(), FileReaderManager1.getInstance_FRM1().getInstance_CR1().getEdate());
	    
	}

	@When("^User Select The Adults Per Room$")
	public void user_Select_The_Adults_Per_Room() throws Throwable {
	   
		dropDown(pom.getInstance_sh().getAdult(), "ByValue",particularCellData("C:\\Users\\DELL\\eclipse-workspace\\Cucumber_Project\\Adactin_Testcases.xlsx", 12, 6));
	}

	@When("^User Select The Children Per Room$")
	public void user_Select_The_Children_Per_Room() throws Throwable {
		
		 dropDown(pom.getInstance_sh().getChild(), "ByValue",particularCellData("C:\\Users\\DELL\\eclipse-workspace\\Cucumber_Project\\Adactin_Testcases.xlsx", 13, 6));
	   
	}

	@Then("^User Click on The Search Button And It Navigate To The Select Hotel Page$")
	public void user_Click_on_The_Search_Button_And_It_Navigate_To_The_Select_Hotel_Page() throws Throwable {
	    
		
		clickButton(pom.getInstance_sh().getSearch());
	}


 // select button
	
	
	@When("^User Click on The Radio Button$")
	public void user_Click_on_The_Radio_Button() throws Throwable {
		
		clickButton(pom.getInstance_sb().getRadio());
	   
	}

	@Then("^User Click on The Continue Button And It Navigate To The Book A Hotel Page$")
	public void user_Click_on_The_Continue_Button_And_It_Navigate_To_The_Book_A_Hotel_Page() throws Throwable {
	   
		clickButton(pom.getInstance_sb().getCon());
	}


	// book hotel
	
	
	@When("^User Enter The First Name in First Name Field$")
	public void user_Enter_The_First_Name_in_First_Name_Field() throws Throwable {
	   
		inputText(pom.getInstance_bh().getFname(), particularCellData("C:\\Users\\DELL\\eclipse-workspace\\Cucumber_Project\\Adactin_Testcases.xlsx", 19, 6));
		
	}

	@When("^User Enter The Last Name in Last Name Field$")
	public void user_Enter_The_Last_Name_in_Last_Name_Field() throws Throwable {
		
		inputText(pom.getInstance_bh().getLname(), particularCellData("C:\\Users\\DELL\\eclipse-workspace\\Cucumber_Project\\Adactin_Testcases.xlsx", 20, 6));
	    
	}

	@When("^User Enter The Billing Address in Billing Address Field$")
	public void user_Enter_The_Billing_Address_in_Billing_Address_Field() throws Throwable {
		
		inputText(pom.getInstance_bh().getAdd(), particularCellData("C:\\Users\\DELL\\eclipse-workspace\\Cucumber_Project\\Adactin_Testcases.xlsx", 21, 6));

	}

	@When("^User Enter The Credit Card No in Credit Card No Field$")
	public void user_Enter_The_Credit_Card_No_in_Credit_Card_No_Field() throws Throwable {
		
		inputText(pom.getInstance_bh().getCard(), FileReaderManager1.getInstance_FRM1().getInstance_CR1().getCard());
	   
	}

	@When("^User Select The Credit Card Type$")
	public void user_Select_The_Credit_Card_Type() throws Throwable {
		
		dropDown(pom.getInstance_bh().getCardtype(), "ByValue", particularCellData("C:\\Users\\DELL\\eclipse-workspace\\Cucumber_Project\\Adactin_Testcases.xlsx", 24,6));
	    
	}


	@When("^User Select The Expiry Month$")
	public void user_Select_The_Expiry_Month() throws Throwable {
		
		dropDown(pom.getInstance_bh().getExpmonth(), "ByValue", particularCellData("C:\\Users\\DELL\\eclipse-workspace\\Cucumber_Project\\Adactin_Testcases.xlsx", 25,6));
    }

	@When("^User Select The Expiry Year$")
	public void user_Select_The_Expiry_Year() throws Throwable {
	   
		dropDown(pom.getInstance_bh().getExpyear(), "ByValue", particularCellData("C:\\Users\\DELL\\eclipse-workspace\\Cucumber_Project\\Adactin_Testcases.xlsx", 26, 6));
		
	}

	@When("^User Enter The CVV Number in CVV Number Field$")
	public void user_Enter_The_CVV_Number_in_CVV_Number_Field() throws Throwable {
		
		inputText(pom.getInstance_bh().getCcv(), particularCellData("C:\\Users\\DELL\\eclipse-workspace\\Cucumber_Project\\Adactin_Testcases.xlsx", 27, 6));
	   
	}
	
	@Then("^User Click on The Book Now Button And It Navigate To The Booking Confirmation Page$")
	public void user_Click_on_The_Book_Now_Button_And_It_Navigate_To_The_Booking_Confirmation_Page() throws Throwable {
	    
		clickButton(pom.getInstance_bh().getBook());
	}



	
}
