---
sidebar_position: 2
---

# Artifical Intelligence

Artifical intelligence is a great tool that can vastly improve the pleasantness and effectiveness of a developer's experience.

## LLM 

According to [Stack Overflow's 2023 insights](https://survey.stackoverflow.co/2023/#section-sentiment-and-usage-ai-tools-in-the-development-process), use of AI specifically LLMs are on the rise for personal and professional developers.

LLM or Large Language Models are great tools since they have been trained on large data sets.  

This means that LLMs can usually generate an answer if you give it a sufficient prompt.  

LLM are very popular since they can give an answer very quickly.  Sometimes LLM will hallucinate which by giving an incorrect answer while claiming it's correct.  It's a good idea to always verify the output a LLM gives.

:::tip Prompt Engineering

[AWS](https://aws.amazon.com/what-is/prompt-engineering/) does a good job explaining what prompt engineering is and the benefits of good prompt engineering when trying to get answers from a LLM.

:::

### API

LLMs can be accessed through their API.  This allows developer flexibility in how the LLM can generate information for an app.

OpenAI's example of their LLM API is found [here](https://platform.openai.com/)

### Web Interface

Most people are most familiar with the web interface on interacting with LLMs.  [ChatGPT](https://chat.openai.com) is the most popular, but their are others such as Anthropic's [ClaudeAI](https://claude.ai).

Personal and professional developers will use the web interface to input a prompt and ask the AI to either generate or interpret code and documentation.

### IDE Extensions

IDE (Integrated Development Environment) Extensions help developers incorporate a LLM into the platform they use to write code and documentation.

Some examples of AI LLM IDE Extensions include
- [Github Copilot](https://github.com/features/copilot)
- [Tabnine](https://www.tabnine.com)

## Rules Based AI

Rules Based AI is slightly less known than LLM that are trained using machine learning.

Rules based AI generates responses based on a set of known and predefined rules.  

This means that rules based AI will always give a correct answer based on its predefined rules, but it is significantly slower than a LLM.

Industries that can't afford hallucinations like healthcare or space exploration are more likely to use rules based AI on production quality software.


### Database

One way to get around the slower nature of a rules based AI is to incorporate the rules into a database.  One database that does is called [RDFox](https://www.oxfordsemantic.tech/rdfox).  The rules based AI is incoporated when the database "reasons" about data.
