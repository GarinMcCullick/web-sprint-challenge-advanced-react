# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
stateful components keep track of changes in data while functional components use props to print out what is passed to them.
2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount is called before rendering occurs and just before the component mounts, this way state does not affect it/ re-render it.
componentWillUpdate happens everytime a re-rendering occures.
3. Define stateful logic.
code that uses state to manipulate data.
4. What are the three step of creating a successful test? What is done in each phase?
Arrange-render the document
Act-find what you are testing ex: getBy's...
Assert- this is where the expectations come in, state what can be expected of the returned data.