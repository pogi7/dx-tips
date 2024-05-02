---
sidebar_position: 1
---

# Agile Development

Adopting an agile way of thinking within a dev team is an important way to improve the pleasantness and effectiveness of a team's DX.

Agile development is a way of thinking.  It's a culture that a team should adopt.  Agile is usually used in processes that can improved iteratively and where order of operations isn't extremely important.  Agile is usually not used to its fullest in industries that need to be risk adverse such as healthcare or space exploration.

## DevSecOps

[DevSecOps](https://www.redhat.com/en/topics/devops/what-is-devsecops) or Development, Security, and Operations is a way of implementing agile by having the dev team be responsible for the development, security, and operations of the app instead of passing those responsibilities off to other dev teams.

### CICD Pipelines

[CICD](https://www.redhat.com/en/topics/devops/what-is-ci-cd) or Continuous Integration and Continuous Deployment is way to achieve DevSecOps by having the dev team continuously integrate new changes to the app and continuously deploying these changes to the app.

This is commonly used to automatically build and test an app to ensure that the app functions as intended and verify that there is high code quality.

An example of a CICD pipeline using Github Actions can be found [here](https://github.com/pogi7/dx-tips/actions)

:::tip This app is deployed using a CICD pipeline

:::


## Scrum
[Scrum](https://www.atlassian.com/agile/scrum) is one way that Agile can be achieved.

Pros: 
- Fixed increment of when to do work (i.e 2 weeks, 1 month, etc.)
- Incremental improvements to the app

Cons:
- Meeting heavy
- Required roles such as scrum master, product owner, etc.


## Kanban

[Kanban](https://www.atlassian.com/agile/kanban) is another way that Agile can be achieved.

Pros: 
- Meeting Light
- Continuous improvements to the app

Cons:
- No fixed increment of when to do work (i.e 2 weeks, 1 month, etc.)
- Work continuously comes in with little room for planning this work when compared to scrum

## Ticket System
Both Scrum and Kanban use a ticket system to keep track of work.  These tickets help developers organize the requirements for their work and determining when their work is finished for a particular feature request or bug report.

- According to [Stack Overflow's 2022 insights](https://survey.stackoverflow.co/2022#section-most-popular-technologies-asynchronous-tools), the most widely used ticket system by personal and professional developers is [Jira](https://www.atlassian.com/software/jira)
