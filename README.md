# HeartBit wallet APP(Android, iOS) client

## Project Structure

As our app grows, we'll typically separate "screen" components into a screens directory, and start further categorizing files within the components directory. A "screen" component should take up the full screen, such as a Profile screen or a Settings screen.

If we're using a library like react-navigation, we may organize our navigators/routers into a separate navigation directory (also sometimes navigators or routing).

A few other common categories of file:

- api: network API calls, often organized by provider or route
- assets: images and other files to bundle with the app
- hooks: custom hooks
- reducers: reducer functions, for managing app data with the useReducer hook (or another library)
- theme: shared colors and text styles (sometimes called styles)
- utils: miscellaneous tools like string formatting

ref: https://www.reactnative.express/app/project_structure > Medium projects
