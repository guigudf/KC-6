# Debug observations

I ran the login test using npm run test:debug and observed the Playwright debug logs showing the exact locators being searched before each action.  
The logs helped me understand that the test was staying on the login page because the expected redirect did not happen after submitting the credentials.