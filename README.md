# ReactJS POC

**NOTE:** You must be running the `mg-react2` branch of `ividev` for this
to work.

This is a very simple app which lays out one possible way of using ReactJS
in the OC framework. There are two chambers, one entirely managed in the
current way with no knowledge of React. One of the buttons on this page,
however, uses React to manage it's DOM.

The second chamber, manages itself entirely through React but one of the
buttons is actually an OC Button control. This button updates the text
every second to prove we can successfully update the OC props and model
via React.

## Key Components

- ReactButton - this is a React component with a similar interface
  and UI to our current button control
- ReactButton-wrapped - this is the above component, wrapped as an OC control
- WrappedButton - this is a React component that wraps our current
  button Control
- chamber1.js - this is the chamber managed in the "classic" way
- RealChamber2.jsx - this is the chamber managed by React. The weird
  dual include thing with chamber2.js won't be necessary in the long run.

## TODO

- Think through how this affects focus very carefully
- Think through how profiles will do overrides (I think it should be
  very simple to just use the RequireJS overrides they're currently
  using to override classes) since the current system of templates will
  not be available
- Loading and parsing JSX is not production ready.
    - We need to come up with a solid way to do this in both production
      and development
    - Ideally would not require the `jsx!` prefix for require
    - Ideally it could compile JSX on the fly during development
    - For the framework code this could be part of the build process
      just like we use for ES7 stubs ('use compiler')
    - For apps we could just come up with a recommended grunt or gulp
      workflow or even rely on WebStorm's built-in file watchers
- Check for memory leaks when unmounting components
- Do some profiling to see how this compares to the old way
- Try it out with React Lite and Preact (both should work fine)
- Extract ReactChamber to a mixin that could be used to share code with
  a ReactModuleView for situations where chambers aren't used.
    - explore a scenario where chambers are managed entirely by the 
      parent view (i.e. the state of which one is visible is controlled
      by the props of the parent view)

