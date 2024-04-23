---
sidebar_position: 5
---

# Sparql

SPARQL is the main query language that is used to query the RDF triplestore.  

Examples of correctly formatted `sparql` directory for OML Vision are found here:

- [Kepler16b sparql directory](https://github.com/pogi7/kepler16b-example/tree/main/src/vision/sparql)
- [Open Source Rover sparql directory](https://github.com/UTNAK/open-source-rover/tree/main/src/vision/sparql)

You can read more about SPARQL [here](https://www.ontotext.com/knowledgehub/fundamentals/what-is-sparql/)

## Formatting Query

There are several ways to correctly format a SPARQL query.  

Once the SPARQL query is correctly formatted create a file for the query and place it in the `src/vision/sparql` directory.

### Fuseki Web User Interface

Fuseki's RDF triplestore has a convenient way to format queries using their web user interface.

:::tip FUSEKI

You can test queries by going to localhost:3030 which is created once data is loaded into the Fuseki DB.  You can watch more info about testing queries with Fuseki by going [here](https://www.youtube.com/watch?v=w_pJ3XiBWeM&t=621s)

The AI & DS Channel (2021, February 18). SPARQL Query [Video]. YouTube. https://www.youtube.com/watch?v=w_pJ3XiBWeM&t=621s

:::

### SPARQL Notebooks

If you feel comfortable working with notebooks you can use SPARQL Notebooks to format queries.  You can read more about SPARQL notebooks [here](https://marketplace.visualstudio.com/items?itemName=Zazuko.sparql-notebook)

### String Interpolation

OML Vision supports string interpolation with the queries that were formatted for all viewpoints (Tables, Trees, or Diagrams).  The format is `"{string}"`  

An example is found [here](https://github.com/pogi7/kepler16b-example/blob/main/src/vision/viewpoints/diagrams/components.json#L11)

![Table String Interpolation](./viewpoints/img/tableStringInterpolation.png)

