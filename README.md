# sin-validator-takehome
A SIN Validator that validates interactively. Valid SINs, based on the requirements, will colour the input box green, marking a valid SIN. If the requirements are not met, the input box will be coloured red, marking an invalid SIN. The input box will not be coloured red or green if the input box does not contain at least 9 digits.

## Getting Started

1. Clone the repo locally.

2. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Assumptions:
- The user can input as many digits as they want. If the length of the digits is more than 9, the web page will default to an invalid SIN. If it is less than 9, the web page still assumes the user is working on inputting all digits.

- Below the input box has a span that tells the user if the SIN is valid or invalid, in conjunction of the coloured indicators. That is included in case a user may be colourblind.

## Approach:
- I created a reusable component to validate the SIN (named SinValidator) to contain all the necessary logic for this task.

- Next, I wrote a very basic HTML template that contains all necessary tags for the task with minimal styling to display it to the page.

- Implemented an onChange handler and attached it to the input tag to access the user input, and placing it in a state variable named `sin`.

- I included a useEffect hook with `sin` in its dependency arrayy to enable interactive validation. The hook runs every time `sin` is modified.

- Inside the useEffect, I included a conditional that only validates the `sin` variable once it reaches a length of 9. Since all SINs are 9 digits, it doesn't make sense to validate inputs shorter or longer than 9 digits.

- The validateSin function was initially written using a for-loop, converting each character to an integer, check it's index to see if it needs to get doubled, and add it to a sum variable. After the first iteration, I noticed that this logic could be improved and made more concise. I refactored the code to use array higher order functions (`map` and `reduce`) to simplify and clean up the validation logic. I opted to use anonymous functions aligning with the spirit of JavaScript/TypeScript. However, I did consider extracting these anonymous functions in their own separate functions to improve readability. 

For example:

```
.map(digit => (digit / 10 >= 1) ? digit % 10 + Math.floor(digit / 10) : digit)
```

Could have been rewritten as:
```
.map(sumDoubleDigits)
```

where sumDoubleDigits() uses the same logic as the anonymous function

- Based on the return value of the validateSin function, it sets another state called `validSin`, which is a boolean that lets us know if the provided SIN is valid or invalid. 


- Leveraging the `validSin` boolean state, I wrote some conditional stylings in the HTML, leveraging tailwind. If `sin` is length 9, check if validSin is true or false and render, green, red or default borders (and the span values) conditionally.

- Lastly, included some input validation to ensure that the input box can only accept numerical values using a regex pattern.



