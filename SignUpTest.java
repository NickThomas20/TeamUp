import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SignUpTest {
    static WebDriver driver;
    static String pathChromeDriver = "chromedriver.exe";
    static String pathFile = "http://localhost:63343/teamup/SignUp.html?_ijt=dlvpc41rftlbqupj3qgk15ftpf";

    @BeforeClass
    public static void openBrowser() {
        System.setProperty("webdriver.chrome.driver", pathChromeDriver);
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    @AfterClass
    public static void closeBrowser() {
        driver.quit();
    }

    @Test
    public void successTest() throws InterruptedException {
        driver.get(pathFile);
        driver.manage().window().maximize();

        Thread.sleep(2000);
        driver.findElement(By.id("first")).sendKeys("Bob");
        Thread.sleep(1000);
        driver.findElement(By.id("last")).sendKeys("Smith");
        Thread.sleep(1000);
        driver.findElement(By.id("email")).sendKeys("bobsmith@gmail.com");
        Thread.sleep(1000);
        driver.findElement(By.id("phone")).sendKeys("1111111111");
        Thread.sleep(1000);
        driver.findElement(By.id("pass")).sendKeys("password1!");
        Thread.sleep(1000);
        driver.findElement(By.id("confirm")).sendKeys("password1!");
        Thread.sleep(1000);
        driver.findElement(By.id("continue")).click();
        Thread.sleep(1000);

        assertTrue(driver.getCurrentUrl().contains("Login.html"));

        Thread.sleep(2000);
    }
    @Test
    public void failTest() throws InterruptedException {
        driver.get(pathFile);
        driver.manage().window().maximize();

        Thread.sleep(2000);
        driver.findElement(By.id("first")).sendKeys("Bob");
        Thread.sleep(1000);
        driver.findElement(By.id("last")).sendKeys("Smith");
        Thread.sleep(1000);
        driver.findElement(By.id("email")).sendKeys("bobsmithgmail.com");
        Thread.sleep(1000);
        driver.findElement(By.id("phone")).sendKeys("1111111111");
        Thread.sleep(1000);
        driver.findElement(By.id("pass")).sendKeys("password1!");
        Thread.sleep(1000);
        driver.findElement(By.id("confirm")).sendKeys("pass");
        Thread.sleep(1000);
        driver.findElement(By.id("continue")).click();
        Thread.sleep(1000);

        assertTrue(driver.getCurrentUrl().contains("SignUp.html"));

        Thread.sleep(2000);
    }
}
