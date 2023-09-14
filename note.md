<https://studio.apollographql.com/sandbox/>

<https://www.youtube.com/watch?v=5199E50O7SI&t=2017s>

# To Diagnose #

npx diagnose-endpoint@1.1.0 --endpoint=<http://localhost:4000>

Node and Apollo

```
query ExampleQuery($after: String) {
  allFilms(after: $after) {
   films{
     id,
     director,
     episodeID
   },
   pageInfo {
    startCursor
    endCursor
    }
  }
}

```
