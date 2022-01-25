# SaGITarius

This is a small project to prove I can converse in more than my home language. Next time, request react :)

We built this using the angular cli. We'll be using scss to guide our styling, we'll structure it using atomic design to guide our thinking, and typescript to guide our data.

We're also using ngx-infinite-scroll to handle the scroll loading. Partially because im too lazy to build a scroll loader, and partially to show that I know how to implement 3rd party packages.
A side note regarding terminology: what has been requested in the brief was an infinite scroll, not pagination. Pagination would imply a navigable element, to go towards a specific page. This is where infinite scrolls kinda suck, as its hard to get (back) to a specific range. It's great for addictive scrolling though. Perhaps an improvement here would be anchored containers with a floating pagination controller, allowing the user to navigate to a specific pages container. Currently out of spec and out of budget however.

In terms of auth, we can reduce rate limiting issues by registering an oauth app with bitbucket, and passing the auth tokens in our api header. This is not mentioned in spec, and my time is unfortunately a bit limited to implement it. In turn, I have pushed a modal, which tells the user to chill a bit.

Other things I generally like implementing, but haven't due to lack of time:
- a more robust global styling and templating system with mixins and variables and a bunch of other niceties. considering our user base for this are likely devs, and their natural habitat is the dark, an automatic dark style wouldve been cool.
- storybook: this I generally use on react projects, and makes for a good source of truth, and a nice playground to develop components on their own. This also allows for a nice place for documentation.
- more robust testing, this is generally done with jest. I also like using puppeteer for visual regression testing, just to make sure devs dont have to pay that much attention to any visual changes.
- linting
- tests implemented as commit hooks

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
