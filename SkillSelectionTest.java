import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SkillSelectionTest {
    static WebDriver driver;
    static String pathChromeDriver = "chromedriver.exe";
    static String pathFile = "http://localhost:63343/teamup/SkillSelection.html?_ijt=b6a21991omb8qhu8s9g0la193a";

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
        driver.findElement(By.id("choose_type")).sendKeys("Frontend");
        Thread.sleep(1000);
        driver.findElement(By.id("frontend_lang")).sendKeys("CSS");
        Thread.sleep(1000);
        driver.findElement(By.id("frontend_lang")).sendKeys("HTML");
        Thread.sleep(1000);

        driver.navigate().refresh();

        Thread.sleep(2000);
        driver.findElement(By.id("choose_type")).sendKeys("Backend");
        Thread.sleep(1000);
        driver.findElement(By.id("backend_lang")).sendKeys("Java");
        Thread.sleep(1000);
        driver.findElement(By.id("backend_lang")).sendKeys("C#");
        Thread.sleep(1000);
    }
}
