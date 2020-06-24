# verse-of-the-day Web app

## The brief

[Dev Project Test](https://onesheep.org/developer-project-test)

## Live Demo

[Live Demo](https://verse-of-the-day-452a4.web.app/)

I have tried using github pages for hosting this, but there are some strange things that you have to do to get a one page React app to work in a subdirectory.

So instead I have gone for using Firebase which was much simpler to set up.

However there is a double load that doesn't happen when running locally that I haven't had time to look into as yet.

## Local installation

1. Clone this repository onto your local machine
2. create a .env.development file in the root of the repo with `REACT_APP_BIBLIA_API_KEY=your_key_here`
3. install npm dependencies with `npm i`
4. type `npm start` to start a local development server
5. Navigate to the development server address and enjoy.

## Time Spent on the project

20 hours 7 minutes

## Design Decisions

I wanted to include two ways of searching by passage and also by word or phrase, so initially I thought of having 2 seperate dialogues triggered by a speed dial, floating action button, but when I tried it out, it didn't feel good from a user flow perspective. Better would be to have 1 dialogue with the ability to switch between 2 search forms.

For the search routes, initially I planned to have them go to 1 route /search with 2 parameters, one to determine the type of search (passage/phrase) and the second containing the search string.

I chose to divide that into 2 hardcoded routes /search/passage and /search/phrase so that the SearchComponent would not be multi purpose.  Having just thought about it now though, I could have had one route with 2 parameters as originally thought, and have 2 seperate sub components display depending on whether it was a passage or a phrase search. This might be better in the long run if further search types were created as less would have to be done with the routing due to being a bit more general. But there are tradeoffs.

Something I am not quite happy about at the moment is having Dialogue specific components within the SearchForm components as this ties the form to being within a Dialogue. This is currently like this in order to best leverage Material UI's built in styling for content and button areas. But in the future this could be abstracted out, so that the parent component of the form passes in the wrapper components for the

## Lessons learned

Distilling possibilities of tests down to minimal tests.

How to mock functions

How to wait for react elements to have changed before testing other things. (loading spinner)

Once working, I found a bug :) win!

The benefit was immediate as I could then refactor the Search component and know that things were working as they should,

and also implement the fuzzy search changes to the Search component.

Don't mess around with git without being very thorough and careful ;O) :O/

## Time considerations

3 hours was devoted to testing as it is something that I need to learn for JS and React.

As I need to grow in this I went through the pain of the learning process (which was painful but done now :)

## Further Developments

Filter for search by phrase (order by relevance, passage order, how many per fetch)

Change bible version (stored in global context "store" or just at App level) available in cog area

404 page (meant to get that in there before the end, sorry)

Better styling

Chapters larger than 9 have a bug in the Regexp used to decipher them from the URL.

If there is an error on passage search

Split the text by \r\n so that I can output in seperate paragraphs...

## Refactoring needed

Refactor the API module to create query urls programmatically

Refactor the titles in the site to be consistent (H1 H2 etc. in seperate components)

## Fixes done

### Highlighting of words in search

If you search 'the' with the phrase search, then any fragment of a word was being highlighted.

'\b' word boundaries have been added to the regexp for highlighting to stop this

### Error message staying on

The error message is now reset before each new get of data

### Error when getting chapters bigger than 9

The url parser had a bug in the regexp used to pull out the book and chapter names

This has now been fixed

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
