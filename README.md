# Digital Transformation Tips

## Source Code
Link to [Source Code](https://github.com/pogi7/dx-tips)

## Deployment on Github Pages
Link to [Documentation Deployed on Github Pages](https://pogi7.github.io/dx-tips/)

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Software Dependencies

You will need NodeJS 18 to test the code.  You can use a Github codespace or install NodeJS 18 locally.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Making a new version
Read the official Docusaurus documentation [here](https://docusaurus.io/docs/versioning#tagging-a-new-version)

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
