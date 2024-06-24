---
sidebar_position: 4
---

# Standard Development Environments

Package managers are a good way to standardize the way that software is developed in a dev team leading to an improvement in the pleasantness and effectiveness of DX.

### What is it? 
A standard development environment is where all developers in the dev team have the same environment in which they do development.  This is usually at the OS, programming language, and app level.

### Why should I care? 
Standard development environments help developers work on the same platform.  Typically development teams also develop using the same platform (not the same hosting environment) as the production environment. Like package managers, this standardization leads to quicker onboarding, higher success of knowledge transfer, and less user-error bugs introduced into the code base.  A common complaint people will say when standard development environments are not implemented is `It works on my machine!`.  Standard development environments mitigates the occurence of this problem from occuring as often.

### How to Implement? 
1. Common development server: While expensive this ensures all developers are using the same development environment
2. Docker: While having a learning curve, it does not alter the host OS so when docker is stopped a developer can go back to using Windows, macOS, or Linux.  According to [Stack Overflow's 2022 insights](https://survey.stackoverflow.co/2022#section-most-popular-technologies-other-tools), widely used by personal and professional developers.
3. Track software dependencies in a file: For programming languages or apps, that is usually a [requirements.txt](https://learnpython.com/blog/python-requirements-file/)(Python), [package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)(Javascript), or [values.yml](https://helm.sh/docs/chart_template_guide/values_files/#helm)(Kubernetes's Helm) file.