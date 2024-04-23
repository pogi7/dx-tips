---
sidebar_position: 5
---

# Properties

Properties are created using [NASA JPL React Stellar FormField](https://nasa-jpl.github.io/react-stellar/?path=/docs/components-formfield--docs).

:::info propertiesLayouts.json file

Create a `src/vision/viewpoints/properties/propertiesLayouts.json` file (case-sensitive)

:::

The `src/vision/viewpoints/properties/propertiesLayouts.json` file is responsible for: 

- Defining what OML Vision Properties can render
  - Name of the Property
  - Type of Property
  - Queries for the Property content
  - How to map Property queries to Property Layouts
  - How to group Properties together

The file is formatted as a JSON data structure.

<!-- TODO: Change to opencaesar repo -->
An example of what this looks like is seen below with the source code found [here](https://github.com/pogi7/kepler16b-example/blob/main/src/vision/viewpoints/properties/propertyLayouts.json)

An example of how a `src/vision/viewpoints/properties/propertiesLayouts.json` file relates to UI elements is shown below.

![Property Layouts JSON](./img/propertyLayoutsJson.png)

## Defining A Property

A Property must be properly defined in order to be rendered by OML Vision.  

The following are JSON key-value pairs that can be defined for a Property.

### id
:::danger REQUIRED

```typescript
id: string
```

:::

This string defines the path to the Property.

### label
:::danger REQUIRED

```typescript
label: string
```

:::


This label defines the name of the Property that is rendered in the user interface.  

### sparqlQuery
:::danger REQUIRED

```typescript
sparqlQuery: string
```

:::

This sparqlQuery contains the query that will query the RDF Triplestore for the content that will populate in the Property. 

**Look at the sparql docs for more info found [here](/docs/api-documentation/sparql)**

:::tip IRI

OML Vision requires a unique identifier called an IRI in order to render content in the Property view.  OML Vision can find the IRI of the selected element in the UI.  The sparqlQuery must contain `<${iri}>`.

Examples:

[Finding IRI in sparqlQuery for Property View](https://github.com/pogi7/kepler16b-example/blob/main/src/vision/sparql/general-properties.sparql#L9) 

[Selected Element IRI](https://github.com/pogi7/kepler16b-example/blob/main/src/vision/sparql/components.sparql#L5-L7)

:::

### icon
:::note OPTIONAL

```typescript
icon: string
```

:::

The icon defines what icon to render next to the label in the UI.

:::tip NASA JPL React Stellar

OML Vision uses React Stellar for all icons rendered in the UI.  For a full list of icons that are available, please refer to the official documentation located [here](https://nasa-jpl.github.io/react-stellar/?path=/docs/components-icons-icon--docs).

:::

### groups
:::danger REQUIRED

```typescript
groups: []
```

:::

The groups allow for data to be grouped together.

### controls
:::danger REQUIRED

```typescript
controls: []
```

:::

The controls allow for data to be rendered and updated by user input within a group. 

### type
:::danger REQUIRED

```typescript
type: string
```

:::


The type defines what component to be rendered. 

**The component library for the possible components to be rendered is located [here](https://github.com/microsoft/vscode-webview-ui-toolkit/tree/main).**

:::tip TYPES

These are the current types
1. `text` -  This type renders a [VSCode Text Field](https://github.com/microsoft/vscode-webview-ui-toolkit/tree/main/src/text-field).
2. `radio` -  This type renders a [VSCode Radio](https://github.com/microsoft/vscode-webview-ui-toolkit/tree/main/src/radio).
3. `number` -  This type renders a [VSCode Number Field](https://github.com/opencaesar/oml-vision/tree/9b93a3c99c4f07172fa1545ad21572d8d03d4616/view/src/components/shared/VSCodeNumberField).  
**The VSCodeNumberField is a custom component that is not a part of the standard [vscode-webview-ui-toolkit](https://github.com/microsoft/vscode-webview-ui-toolkit) library**
:::

### helpExpression
:::note OPTIONAL

```typescript
helpExpression: string
```

:::

The helpExpression explains to users what the control does.  It is a tool tip.

### readOnly
:::note OPTIONAL

```typescript
readOnly: boolean
```

:::

The readOnly boolean indicates whether the control can be updated or not.  A UI indicator is shown to the user when the control is read-only.

Refer to the `not-allowed` section in the CSS docs found [here](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)

## Abilities

### Collapse and Uncollapse Property Groups

You can collapse the property groups by clicking the `-` button and you can uncollapse the property groups by clicking the `+` button.

### Tool Tips 

Tool tips can be shown in the Property View by hovering over the tool tip icon.

![Tool Tip](./svg/ToolTip.svg)