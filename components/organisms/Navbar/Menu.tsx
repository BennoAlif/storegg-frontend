import cx from 'classnames';
import Link from 'next/link';

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, active, href = '/' } = props;
  const classTittle = cx({
    'nav-link': true,
    active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={classTittle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
