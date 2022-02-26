import { container, title } from '@shared/home';
import { Logo } from './logo';

export default function Header() {
  return (
    <header css={container}>
      <Logo />
      <h1 css={title}>hello from next js</h1>
    </header>
  );
}
