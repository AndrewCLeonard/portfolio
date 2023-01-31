## React lessons learned

### Array.prototype.map()

The [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) show the map method with curly braces:

```
// Arrow function
map((element) => { /* … */ })
map((element, index) => { /* … */ })
map((element, index, array) => { /* … */ })

```

However, when using map in React, you need to use parentheses:

```
export default function navCategories() {
const listCategories = categories.map((category) => (
<li key={category.name}>{category.name}</li>
));

return <ul>{listCategories}</ul>;
}
```
