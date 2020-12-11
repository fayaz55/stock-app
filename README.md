# Stock App Project (Development)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.
This is an angular stock market project I made which takes real time stock data and showcases the info on the web app.

## How to use App 

To use the web app, you need to get your own stock API for free from `marketstackapi.com`. Once you get your authentication key simply paste the key in `data.service.ts` in line 9 for the `accesskey` variable. This file is located in the `src\shared` folder 

```TypeScript 

private accesskey = ' '; // Place Access Key Here

```
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Reference Source

https://medium.com/@Zeroesandones/how-to-build-a-real-world-application-using-angular-9-1572371049dd

