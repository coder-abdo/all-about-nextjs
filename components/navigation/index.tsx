import Link from 'next/link';
import { GiAstronautHelmet as Astronaunt } from 'react-icons/gi';
import { navigationStyles } from './styles';
export default function Navigation() {
  return (
    <nav css={navigationStyles}>
      <Link href="/">
        <a aria-label="Back to Home">
          <Astronaunt />
        </a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}
