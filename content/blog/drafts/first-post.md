+++
title = "Syntax Highlighting Example"
date = 2025-01-02
description = "Demonstrating code syntax highlighting with Zola"
+++

One of Zola's built-in features is automatic syntax highlighting for code blocks. This post demonstrates how it works.

## JavaScript Example

Here's a simple JavaScript function:

```javascript
function greet(name) {
    const message = `Hello, ${name}!`;
    console.log(message);
    return message;
}

greet("World");
```

## Rust Example

Since Zola is written in Rust, here's a Rust example:

```rust
fn main() {
    let numbers = vec![1, 2, 3, 4, 5];

    let sum: i32 = numbers.iter().sum();

    println!("The sum is: {}", sum);
}
```

## Python Example

And a Python snippet for good measure:

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Print first 10 Fibonacci numbers
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
```

## HTML Example

Even HTML gets highlighted:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Example Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

## How It Works

Zola automatically detects the language from the code fence and applies appropriate syntax highlighting. No configuration needed!

The highlighting theme can be customized in `config.toml` by setting the `highlight_theme` variable.
