## React lessons learned

## Diagram

https://miro.com/app/board/o9J_luTM0tA=/

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

## Challenge One

```
import { getImageUrl } from "../utils";

export default function Profile({ person, width = 70, height = 70 }) {
  return (
    <>
      <section className="profile">
        <h2>person.name</h2>
        <img
          className="avatar"
          src={getImageUrl(person.imageId)}
          alt={person.name}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b>({person.awards.map((award) => {})})
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
      </section>
    </>
  );
}
```
