import { getImageUrl } from "../utils";

export default function Profile({ person, width = 70, height = 70 }) {
  return (
    <>
      <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src={getImageUrl(person)}
          alt={person.name}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awards.length} </b>
          </li>
            <ul>
              
            </ul>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
      </section>
    </>
  );
}
