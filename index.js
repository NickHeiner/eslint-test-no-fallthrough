const x = 1;

// Lint error
switch (x) {
  case 1:
      <JSXElem style={{ text: availableUntilDate }} />
      // falls through
  default:
      console.log('x');
      break;
}

// Lint error
switch (x) {
  case 1:
      <JSXElem style={{ text: availableUntilDate }} />
      // eslint-disable-next-line no-fallthrough
  default:
      console.log('x');
      break;
}

// Lint passes
switch (x) {
  case 1:
      <JSXElemWithNoProps />
      // eslint-disable-next-line no-fallthrough
  default:
      console.log('x');
      break;
}

// Lint passes
switch (x) {
  case 1:
      console.log('not JSX');
      // eslint-disable-next-line no-fallthrough
  default:
      console.log('x');
      break;
}

// Lint passes
switch (x) {
  case 1:
    console.log('not JSX');
    // falls through
  default:
      console.log('x');
      break;
}
