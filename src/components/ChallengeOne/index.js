// https://beta.reactjs.org/learn/passing-props-to-a-component#challenges

import { getImageUrl } from "../utils";

export default function profile({ person, width = 70, height = 70 }) {
  return (
    <>
      <section className="profile">
        <h2>{person.name}</h2>
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
