---
sidebar_position: 2
---

# Tables

Tables are created using [tanstack table](https://tanstack.com/table/v8).

:::info tables directory

Create a `src/vision/viewpoints/tables` directory (case-sensitive)

:::

The `src/vision/viewpoints/tables` directory is responsible for: 

- Defining what OML Vision Tables can render
  - Name of the Table
  - Commands that can be executed from the Table
  - Name of the columns for the Table
  - Queries that the Table's content needs
  - How to map Table queries to columns
  - Commands to populate in the Context or Right click Menu

Each file in the directory is formatted as a JSON data structure.

<!-- TODO: Change to opencaesar repo -->
An example of what this looks like is seen below with the source code found [here](https://github.com/pogi7/kepler16b-example/blob/main/src/vision/viewpoints/tables)

## Defining A Table

A table must be properly defined in order to be rendered by OML Vision.

The following are JSON key-value pairs that can be defined for a Table.

### path
:::danger REQUIRED

```typescript
path: string
```

:::


This string defines the path of the Table.

:::tip USER INTERFACE

The name of the `path` is the same path that was defined in the `pages.json`.

![Table Path](./img/tablePath.png)

:::

### name
:::note OPTIONAL

```typescript
name: string
```

:::


This string gives a name to the table.  

<!-- TODO: Change from diagrams to commands -->
### diagrams
:::note OPTIONAL

```typescript
diagrams: {
    all-rows: string
  }
```

:::


The diagrams object defines the commands that the Table is able to execute. 

:::tip USER INTERFACE

The `diagrams` correspond to the commands that appear when a user right clicks a row in the Table.

![Table Commands](./img/tableCommands.png)

:::

#### all-rows
:::danger REQUIRED

```typescript
all-rows: string
```

:::


This string defines that all rows have the commands defined available for them to execute.  The name of the string is arbitrary, but a good name for `all-rows` is "all-rows".

### columnNames
:::danger REQUIRED

```typescript
columnNames: {}
```

:::


This object contains the columns that will render on the Table. 

:::tip USER INTERFACE

The `columnNames` are rendered in the headers of the Table shown in the red boxes.

![Table Column Names](./img/tableColumnNames.png)

:::

### queries
:::danger REQUIRED

```typescript
queries: {}
```

:::

This object contains the queries that will query the RDF Triplestore for the content that will populate in the Table. 

**Look at the sparql docs for more info found [here](/docs/api-documentation/sparql)**

:::tip FUSEKI

You can test queries by going to localhost:3030 which is created once data is loaded into the Fuseki DB.  You can watch more info about testing queries with Fuseki by going [here](https://www.youtube.com/watch?v=w_pJ3XiBWeM&t=621s)

The AI & DS Channel (2021, February 18). SPARQL Query [Video]. YouTube. https://www.youtube.com/watch?v=w_pJ3XiBWeM&t=621s

:::

### rowMapping
:::danger REQUIRED

```typescript
rowMapping: {}
```

:::

This object defines how the `queries` map to the `columnNames`

#### id
:::danger REQUIRED

```typescript
id: string
```

:::

This string the `id` for the `rowMapping`.

:::tip USER INTERFACE

The `id` correspond to one of the `columnNames`.

![Table Row Mapping Id](./img/tableRowMappingId.png)

:::

#### name
:::note OPTIONAL

```typescript
name: string
```

:::

This string gives a name to the `rowMapping`.  

#### labelFormat
:::danger REQUIRED

```typescript
labelFormat: string
```

:::

This string contains the label of the row for the `rowMapping`.

:::tip USER INTERFACE

The `labelFormat` is rendered in the rows of the Table shown in the red boxes.

![Table Column Names](./img/tableRowMappingLabelFormat.png)

:::

:::tip STRING INTERPOLATION

OML Vision supports string interpolation with the queries that were formatted.  The format is `"{string}"`  

An example is found [here](https://github.com/pogi7/kepler16b-example/blob/main/src/vision/viewpoints/tables/objectives.json#L25)

![Table String Interpolation](./img/tableStringInterpolation.png)

:::

#### subRowMappings
:::note OPTIONAL

```typescript
subRowMappings: {
    id: string
    name: string
    labelFormat: string
  }[]
```

:::

This `subRowMappings` array of objects defines the `id`, `name`, and `labelFormat` for the subrows of the Table.

**The `id`, `name`, and `labelFormat` have the same data structure as `rowMapping`**