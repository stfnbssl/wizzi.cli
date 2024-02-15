import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <article>
      <header>Remix + PicoCSS template </header>
      Start your awesome project here!
      <br />
      <br />
      <Link to="/examples">See examples here</Link>
    </article>
  );
}
