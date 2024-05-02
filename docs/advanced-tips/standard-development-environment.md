---
sidebar_position: 4
---

# Standard Development Environments

Package managers are a good way to standardize the way that software is developed in a dev team leading to an improvement in the pleasantness and effectiveness of DX.

A standard development environment is where all developers in the dev team have the same environment in which they do development.  This is usually at the OS, programming language, and app level.

## OS Level

For most developers standardizing the development environment at the OS (operating system) level is the most important improvement to DX.  

A common complaint people will say is `It works on my machine!` when this isn't done right.

### Force Everyone to Have the Same Local OS

Pros: 
- All developers are on the same local OS.

Cons:
- People may be comfortable with Windows, macOS, or Linux to do other things that doesn't involve development.
- Local OS may get out of date

### Developers working On a Common Server

Pros: 
- All developers are on the same common OS.
- All software can be installed on the server.
- Can be hosted in the cloud or on-premises (on-prem)

Cons:
- Expensive 
- Performance will suffer as more devs come into the project and the app becomes more resource intensive

### Docker

Pros: 
- Does not alter the host OS so when docker is stopped a developer can go back to using Windows, macOS, or Linux.
- According to [Stack Overflow's 2022 insights](https://survey.stackoverflow.co/2022#section-most-popular-technologies-other-tools), widely used by personal and professional developers.
- Docker can be run on any machine (cloud, local, server, etc.) that has the Docker engine installed
- New OS is run in the docker container which can be used to standardize development environments for the dev team
- Can be easily integrated into an IDE.  For example VSCode has [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers) which use Docker

Cons:
- Moderately to High Learning Curve 
- Can get complicated

## Programming Language Level

Most programming languages have package managers that specify the dependencies or libraries that a developer must have before running the app in a standardized development environment.  

The package managers usually store that info in a file.

Here are some for the most popular programming languages:
- [requirements.txt](https://learnpython.com/blog/python-requirements-file/)
- [package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)
- [pom.xml](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html)

## App Level

Similar to the programming language file, an app may store its dependencies needed to run the app in a standardized development environment in a file.

An example of an app having a package manager that stores its dependencies in a `values.yml` file is Kubernetes's [Helm](https://helm.sh/docs/chart_template_guide/values_files/#helm)
