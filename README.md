# Calculator

A simple and elegant web-based calculator built with vanilla HTML, CSS, and JavaScript. This calculator handles basic arithmetic operations with a clean, modern interface.

## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Percentage Calculations**: Calculate percentages easily
- **Decimal Support**: Work with decimal numbers
- **Expression Display**: View your full expression with the "Exp" button
- **Delete Function**: Remove the last entered operator or number
- **Clear Function**: Reset the calculator to start fresh
- **Responsive Design**: Clean UI with hover effects and smooth animations

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yugantshewale/Calculator.git
```

2. Navigate to the project directory:
```bash
cd Calculator
```

3. Open `index.html` in your web browser:
```bash
# On Windows
start index.html

# On Mac
open index.html

# On Linux
xdg-open index.html
```

Or simply double-click the `index.html` file.

## Usage

1. Click on number buttons (0-9) to input numbers
2. Use operator buttons (+, -, x, ÷, %) for calculations
3. Press `=` to evaluate the expression
4. Press `C` to clear the display
5. Press `Del` to delete the last entered value
6. Press `Exp` to view the full expression
7. Use `.` for decimal numbers

## Project Structure

```
Calculator/
├── index.html      # Main HTML file
├── style.css       # Styling and layout
├── script.js       # Calculator logic and functionality
└── README.md       # Project documentation
```

## Key Features Explained

### Custom Expression Evaluator
This calculator uses a custom tokenizer and evaluator instead of JavaScript's `eval()` function for better security and control.

### Decimal Validation
The calculator prevents multiple decimal points in a single number, ensuring valid numeric input.

### Error Handling
- Alerts for invalid expressions
- Prevents evaluation of incomplete expressions
- Validates decimal input

## Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Yugant Shewale**
- GitHub: [@yugantshewale](https://github.com/yugantshewale)

## Acknowledgments

- Built as a practice project for learning vanilla JavaScript
- Inspired by standard calculator applications
