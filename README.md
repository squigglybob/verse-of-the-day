# verse-of-the-day Web app

## The brief

[Dev Project Test](https://onesheep.org/developer-project-test)

## Local installation

1. Clone this repository onto your local machine
2. create a .env.development file in the root of the repo with `REACT_APP_BIBLIA_API_KEY=your_key_here`
3. install npm dependencies with `npm i`
4. type `npm start` to start a local development server
5. Navigate to the development server address and enjoy.

## Time Spent on the project

20 hours 7 minutes

## Design Decisions

I wanted to include two ways of searching by passage and also by word or phrase.

Initially I thought of having 2 seperate dialogues but quickly realised that I could 

To put in one route with a param or have 2 distinct routes
To have one modal or 2?
to use Dialog components in form (i'd rather abstract out but for now is ok, but is less flexible)

## Lessons learned

Distilling possibilities down to minimal tests.
How to mock functions
How to wait for react elements to have changed before testing other things. (loading spinner)
Once working, I found a bug :) win!
The benefit was immediate as I could then refactor the Search component and know that things were working as they should,
and also implement the fuzzy search changes to the Search component.

Don't mess around with git without being very thorough and careful ;) :-/

## Time considerations

testing was needed, as I need to grow in this and I know the benefits, so went through the pain of the learning process

## Further Developments

Filter for search by phrase (order by relevance, passage order, how many per fetch)
Change bible version (stored in global context "store")

## The Dev Environment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [code splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [analyzing the bundle size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [making a progressive web app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [advanced configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [npm run build fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
