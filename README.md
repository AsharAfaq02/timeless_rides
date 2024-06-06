This is the Timeless Rides website Code

This page containes the pages: Home, Marketplace, Discussion Forum, Profile, and Timeline.

The Carousel, Nav-bar, and Nav-button components are referenced in the Home component.

the Nav-button controls the routes to all of the different pages, these pages are setup as components

The routing is done in app-routing.module.ts, where the different pages are imported as components, and are then given routes using the Routes class.

Lazy loading occurs in the home page, the function sits in the main.ts file

Calling a function from a js file: I created a file names mysql.js in the assets directory. In that file, I created a function with a return statement. Then, I referenced that file in angular.json. Then, I declared the function as const object in profile.component.ts. I created an object of this imported function object in the export class, and then called it in the html file.
