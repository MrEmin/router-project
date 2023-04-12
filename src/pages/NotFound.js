import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque possimus
        iste dolorum praesentium doloribus nihil, libero sed asperiores quaerat
        sequi ratione in quo, sit recusandae accusamus reprehenderit odio minus
        earum ad? Consequuntur facilis nobis repellat deleniti fugiat error,
        ipsa laborum nam temporibus et, earum aliquam quam quisquam cupiditate
        quasi.
      </p>
      <p>Go to the <Link to="/">Homepage</Link></p>
    </div>
  );
}
