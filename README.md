
# Online Calculator

## Purpose

The Online Calculator application is a web-based calculator designed to perform basic arithmetic operations and provide additional functionalities like memory management and history tracking. This lightweight tool is ideal for quick calculations with an intuitive user interface.

## Major Functions

### 1. **Basic Arithmetic Operations**

- Addition (`+`), Subtraction (`-`), Multiplication (`×`), and Division (`÷`).

### 2. **Memory Management**

- **MC**: Clear memory.
- **MR**: Recall memory.
- **M−**: Subtract the current value from memory.
- **M+**: Add the current value to memory.

### 3. **Advanced Functionalities**

- **C**: Clear all inputs.
- **CE**: Clear the current entry.
- **←**: Backspace to remove the last digit.
- **±**: Toggle between positive and negative values.
- **History**: View the history of calculations.
- **Navigation**: Navigate through the history using the up (`↑`) and down (`↓`) buttons.

### 4. **Display**

- A clean and responsive display to show the current input or result.

## Dependencies

- **HTML5**: The structural foundation of the application.
- **CSS3**: For styling and enhancing the user interface.
- **JavaScript**: The core logic for arithmetic operations, memory management, and user interactions.

## Build Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/kevinhsu3/online-calculator.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd online-calculator
   ```

3. **Open the Application**:

   - Open `index.html` in a web browser to launch the calculator.

## Deploy Instructions

### Deploy Locally
- Use any HTTP server (e.g., Python's built-in HTTP server) to serve the application locally:
  ```bash
  python3 -m http.server
  ```
- Access the application at `http://localhost:8000/`.

### Deploy on GitHub Pages
1. Push the repository to GitHub.
2. Go to the repository settings.
3. Enable GitHub Pages under the "Pages" section and select the branch containing the `index.html` file.
4. Access your calculator at `https://<your-username>.github.io/online-calculator`.

## Contributing
Feel free to fork this repository, submit issues, or create pull requests to suggest improvements.

## License
This project is licensed under the MIT License.
