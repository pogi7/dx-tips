---
sidebar_position: 2
---

# Automated Builds and Testing

Let's discover the basics of pleasant and effective **developer experience in less than 5 minutes**.

## Version Control

[Version control](https://www.atlassian.com/git/tutorials/what-is-version-control) is a way to keep track and manage changes to software code.  

Version control can allow developer teams to keep track, mitigate, and resolve errors that may arise from code degradation or human error.  

### Git

:::tip What is Git?

[Atlassian](https://www.atlassian.com/git/tutorials/what-is-git) does a good job explaining what Git is and the benefits of adopting the technology within a development team.

:::

According to [Stack Overflow's 2022 insights](https://survey.stackoverflow.co/2022#version-control-version-control-system), Git is the de facto version control software that personal and professional developers use.

Git is used for managing code locally on a computer.  This computer can be a personal computer, a bare metal server, or a cloud instance.

Git stores code in repos.  These local repos can be stored on remote hosting services.

### Github

:::tip What is Github?

[Github](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git) does a good job explaining how Git and Github interact with each other and the benefits of using Github.

:::

According to [Stack Overflow's 2022 insights](https://survey.stackoverflow.co/2022#section-version-control-version-control-platforms), Github is the most used version control platform that personal and professional developers use.

Github is used to store Git repos that can be accessed by developers with the correct authorization.  

For a developer, Github is used for a development team to see new changes in a codebase and keep track of and manage those changes.

An example of a Github repo is shown [here](https://github.com/opencaesar/oml-vision)

## Documenting Code

Documenting code is very important because it allows you and the rest of the development team to understand how your code works and is supposed to behave.

Documentation helps dev teams onboard new developers much faster and prevent information from being lost due to turnover or forgetting. 

### Comments

Code comments are very helpful for developers because you can put the code documentation right next to the code.  

It is highly recommended to follow the documentation standard for your language that your dev team is using.

The list includes some of the most widely used programming languages from [Stack Overflow's 2022 insights](https://survey.stackoverflow.co/2022#section-most-popular-technologies-programming-scripting-and-markup-languages):
- [Python](https://peps.python.org/pep-0257/)
- [Java](https://www.baeldung.com/javadoc#javadoc-comments)
- [Typescript](https://tsdoc.org/)

An example of a Typescript comment that matches a Typescript standard is shown [here](https://github.com/opencaesar/oml-vision/blob/0db2cc46778f1441474c0d4aebc071df453cf52d/controller/src/utilities/loaders/loadCommandFiles.ts#L6-L15)

### READMEs

READMEs are nice to explain higher level functionality of a program, function, class, or piece of software within an app or a piece of software that interacts with your dev team's app.

READMEs can be included at any level of a Git repo, but generally recommended at the root or top level of a repo so that all developers will know where the README is.  

READMEs can be written in any programming language, but they are generally written in [plain text](https://www.adobe.com/uk/acrobat/resources/document-files/text-files/txt.html) (.txt) or [Markdown](https://www.markdownguide.org/) (.md) files.

An example of a README.md in a Github repo is shown [here](https://github.com/opencaesar/oml-vision/blob/0db2cc46778f1441474c0d4aebc071df453cf52d/README.md)

### Wikis

Wikis are a good alternative to READMEs when you don't want to store high level documentation about your app inside a Git repo.

According to [Stack Overflow's 2022 insights](https://survey.stackoverflow.co/2022#section-most-popular-technologies-asynchronous-tools), a very common wiki that dev teams use is [Confluence](https://www.atlassian.com/software/confluence)  

An example of a Confluence page detailing the architecture of an app is shown [here](https://openmbee.atlassian.net/wiki/spaces/OPENMBEE/pages/320765953/Flexo-MMS+Architecture)