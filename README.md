# hello-graphql

`npm start`

ブラウザ
http://localhost:5000/graphql

`curl -X POST -H "Content-Type: application/json" http://localhost:5000/graphql`

```
curl -XPOST -H "Content-Type:application/graphql"  -d '
 query getUser {
   user(id: 3) {
     name
   }
 }' http://localhost:5000/graphql
```

```
curl -XPOST -H "Content-Type:application/graphql"  -d '
 query getUser {
   users {
     name
     sex
   }
 }' http://localhost:5000/graphql
```

### variables

```
query getSinglePost($userId: Int!) {
  user(id: $userId) {
    name
    sex
  }
}
```

```
{
  "userId": 1
}
```
