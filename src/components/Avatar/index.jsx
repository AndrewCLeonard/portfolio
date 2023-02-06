import { getImageUrl } from "../utils";

export default function Avatar({ person, size }) {
  return (
    <>
      <img
        className="avatar" // no css for this yet
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </>
  );
}
