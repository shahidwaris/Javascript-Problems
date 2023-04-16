describe("Weather API", () => {
    it("displays current weather for London", () => {
      cy.intercept(
        "GET",
        "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e467712b257e418838be97cc881a71de"
      ).as("getCurrentWeather");
  
      cy.visit("http://127.0.0.1:5500/sample.html");
  
      cy.contains("Get Current Weather").click();
  
      cy.wait("@getCurrentWeather").then((interception) => {
        const response = interception.response.body;
  
        cy.get("#weatherData").should(
          "have.text",
          `Current weather in London: ${response.weather[0].main}`
        );
      });
    });
  });
  
