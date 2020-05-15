<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  JAM Gatsby example application
</h1>

A simple app with modern [JAM](https://jamstack.org/) architecture. Technologies used:

*  UI:
1. **[Gatsby](https://www.gatsbyjs.org)** Allows to build JAM application using React
(basically it renders every route in compilation time and each page have their own set of html/css/js and loads extremely fast,
 after it loads it in background loads all heave deps such as react core)
2. **[React](https://reactjs.org)** UI Library for building interfaces, using latest version with modern hooks approach
3. **[Material UI](https://material-ui.com)** Full set of components to building modern
sites with a complete guide of what to use and how to use for typical cases
4. **[React toastify](https://github.com/fkhadra/react-toastify)** Set of components for showing toasts for users with a
very customizable interface

* CSS:
1. **[Css modules](https://github.com/css-modules/css-modules)** Approach for isolating styles between components, by the way it
allows to get rid of BEM methodology because it looks significant overhead for nothing
2. **[Classnames](https://github.com/JedWatson/classnames)** Library for react for conditionally applying styles
3. **[Normalize css](https://github.com/necolas/normalize.css/)** Bunch of styles for making browser behaviour/look consistent between each other
4. **[Post CSS](https://postcss.org/)** Superset of css, also used a lot of utility libraries for making trivial things one-liners

* State management:
1. **[GraphQL](https://www.apollographql.com/)** 
Library for both data fetching and local state management, which allows to completely
remove redux and maintain local state using client queries
2. **[React hook form](https://react-hook-form.com/)** 
Library for controlling forms, besides there are alternatives like **[Redux form](https://redux-form.com/)** and
**[Formik](https://github.com/jaredpalmer/formik)**

* Build/Deploy:
1. **[Gitlab CI](https://docs.gitlab.com/ee/ci/)**
CI with easy to setup config, free for open source projects
2. **[Gitlab pages](https://about.gitlab.com/product/pages/)**
Free environment for simple sites

* Code conventions:
1. **[Typescript](https://www.typescriptlang.org/)** Superset of ES6 with static typing
2. **[Eslint](https://eslint.org/)** Pluggable javascript linter with adapter for typescript, since tslint is deprecated
3. **[Prettier](https://prettier.io/)** Code formatter for maintaining one codestyle per project,
because obviously each developer have own habbits, but this should not be a reason of inconveniences and holy wars,
this library allows to align your style written code to unified in project

* Content manupulation:
1. **[Contentful](https://www.contentful.com/)** 
Headless CDN for content management, allows to store only sensitive information, for loading in build time,
has build-in functionality for rebuilding separate pages when content in cdn updated, also provides i18n
2. **[React intl](https://www.npmjs.com/package/react-intl)** Library for internationalization

* Utility:
1. **[Lodash](https://lodash.com/docs/)** Set of functions for common operations
2. **[Yup](https://github.com/jquense/yup)** Object validator, used for form validation, validation logic can be extracted into
separate repo if backend will be on node-js
3. **[Immer](https://github.com/immerjs/immer)** Library for object manipulation in immutable paradigm with mutable code
(no need for use lodash.merge, long spread operators)
4. **[Babel](https://babeljs.io/)** Compiler for javascript, allows to transpile code for older browsers, dynamically include polyfills

## Decisions made
* Leave contentful integration in separate branch and use local files for i18n, because:
1. It looks significant overhead to support for simple project.
2. Bare free-plan support, in free-tier you cannot even use graphql api to fetch schema and validate queries/types
* Do not use proven Redux-form, because it may be tricky to merge redux state and GraphQL, also react-hook-form is easier in use
* Do not write unit-tests at least for now, because: 
1. Too simple front-end
2. Not real application, just example

## Project structure
**src/components/** - shared components folder, can be in future extracted to separate repo  
**src/features/** - each feature implementation, because src/pages should contain route-sensitive information
and doesn't allow to split code for decoupling logic  
**src/graphql/** - graphql related info, e.g. schema, fragments  
**src/pages/** - gatsby-specific folder for maintaining routing, each file or folder/index.js represents url  
**src/typings/** - typescript definition files for not supported initially extensions(e.g. css, svg) or libraries without *d.ts files  
   
## 🚀 Quick start

1.  **Start developing.**

    Navigate into your site’s directory and start it up.

    ```shell
    cd jam-blog/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `jam-blog` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 Questions?
Write an email to [me](mailto:vitaliy.makarevich.work@gmail.com)  
Look on **[Gatsby documentation](https://www.gatsbyjs.org/docs/)**
