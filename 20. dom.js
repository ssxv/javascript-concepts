// Document Object Model (DOM) is created by browser when it parses HTML or XML
// Below is the process to create DOM

// 1. Parsing: When browser receives the HTML or XML from the server, it starts the
// parsing of the of the document. Parsing involves breaking down the document into
// the structured representation that the browser can understand and manupulate

// 2. Tokenization: Browsers parses the HTML or XML into the tokesn which represents
// different part of the document such as element, attribute, and text content

// 3. Building the DOM tree: Using these tokens browser constructs tree like structure
// known as DOM tree. This tree represents the hierarchical structure of the document
// in which each element, attribute and text node represented as a node in the tree

// 4. Node Objects: Each node in the DOM tree is represented by a corresponding object in memory
// These object known as DOM nodes, have properties and function which can be used to interact with
// and manupulate the document

// 5. Document Object: At the top of the DOM tree there is document object, which represents the entire HTML
// or XML. This object serve as entry point for manupulating DOM

// Rendering: Once the DOM tree is constructed, the browser uses it to render the content on the page.