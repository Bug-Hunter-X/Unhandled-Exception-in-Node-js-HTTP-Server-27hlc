# Unhandled Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions. The `bug.js` file shows an HTTP server that is susceptible to crashes due to unhandled exceptions. The `bugSolution.js` provides a solution using `try...catch` blocks and proper error handling.

## Bug

The `bug.js` file contains a simple HTTP server. However, it lacks proper error handling. If an unexpected error occurs during request processing, the server will crash without any informative error message.

## Solution

The `bugSolution.js` demonstrates how to handle potential errors using `try...catch` blocks.  This ensures that the server doesn't crash unexpectedly and provides a mechanism to gracefully handle and log errors.