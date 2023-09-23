# Calculator project-5
**Project Title:** Simple Calculator

**Description:**
The Simple Calculator project is a web-based calculator application that allows users to perform basic mathematical operations. It provides a user-friendly interface with buttons for numbers, operators, and special functions like clearing the input or deleting the last character. Users can input calculations using the buttons and see the result displayed in an input field.

**HTML Structure:**
- `<!DOCTYPE html>`: Defines the document type and version.
- `<html lang="en">`: The root element of the HTML document, specifying the language as English.
- `<head>`: Contains metadata and links to external resources.
  - `<title>Document</title>`: Sets the title of the webpage.
  - Internal CSS styles are defined within `<style>` tags in the `<head>` section.

**CSS Styles:**
- Styles are defined for centering elements, including text alignment, margin, font size, and background color.
- Custom fonts are imported from Google Fonts.
- Background image is set using `background-image`.
- Styles for buttons, rows, and input fields are defined for a clean and visually appealing layout.

**JavaScript:**
- JavaScript code is embedded within `<script>` tags at the end of the `<body>` section.
- It handles the functionality of the calculator:
  - Click event listeners are added to all buttons with the class `button`.
  - The `string` variable stores the user's input as a string.
  - Special buttons like "=" (equals), "C" (clear), "DE" (delete), "π" (pi), and "²" (square) are implemented.
  - Numerical and operator buttons update the `string` variable and display the input in the input field.
  - When the "=" button is clicked, the `eval` function is used to evaluate the mathematical expression, and the result is displayed.
  - The "C" button clears the input, and "DE" deletes the last character.
  - "π" inserts the value of pi, and "²" calculates the square of the input.

**User Interaction:**
- Users can perform basic mathematical calculations by clicking on buttons.
- Numerical and operator buttons update the input field.
- Special buttons provide additional functionality, including clearing, deleting, using pi, and calculating squares.

**Overall Functionality:**
- The project serves as a basic web-based calculator, allowing users to perform calculations conveniently and view the results in real-time.