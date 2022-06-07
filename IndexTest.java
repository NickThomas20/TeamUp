import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class IndexTest {
    static WebDriver driver;
    static String pathChromeDriver = "chromedriver.exe";
    static String pathFile = "http://localhost:63343/teamup/index.html?_ijt=dlvpc41rftlbqupj3qgk15ftpf";

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
    public void scrollTest() throws InterruptedException {
        driver.get(pathFile);
        driver.manage().window().maximize();
        driver.navigate().refresh();

        Thread.sleep(2000);
        driver.findElement(By.id("arrow3")).click();
        Thread.sleep(1000);
        driver.findElement(By.id("arrow2")).click();
        Thread.sleep(1000);
        driver.findElement(By.id("arrow1")).click();
        Thread.sleep(2000);
    }

    @Test
    public void startTest() throws InterruptedException {
        driver.get(pathFile);
        driver.manage().window().maximize();
        driver.navigate().refresh();

        Thread.sleep(2000);
        driver.findElement(By.id("arrow3")).click();
        Thread.sleep(1000);
        driver.findElement(By.id("arrow2")).click();
        Thread.sleep(1000);
        driver.findElement(By.id("startlink")).click();
        Thread.sleep(2000);

        assertTrue(driver.getCurrentUrl().contains("Login.html"));
    }
}
