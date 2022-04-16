package com.RunnerFile;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.BaseClass.Base_Class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\FeatureFile\\Login.feature" ,
                      glue ="com.stepdefinition" ,
                      monochrome = true ,
                      dryRun = false ,
                      strict = true ,
                    //  tags = {"~@run","@regression_run"}
                      plugin = { "html:Report/Cucumber_Report" ,
                    		     "pretty" ,
                    		     "json:Report/Cucumber.json" ,
                                 "com.cucumber.listener.ExtentCucumberFormatter:Report/extent_cucumber.html"                                                       		  
                    		  
                                }
                    		  
                      )



public class RunnerFile_Adactin {
	
	public static WebDriver driver ;  // null driver
	
	
	@BeforeClass
	public static void setUp() {
		
		driver = Base_Class.getBrowser("Chrome");
		

	}
	
	
	@AfterClass
	public static void tearDown() {
		
		driver.close();

	}

}
