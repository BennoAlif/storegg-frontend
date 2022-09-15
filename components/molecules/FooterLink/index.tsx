import React from 'react';

interface FooterLinkProps {
  link: string;
  title: string;
}

export default function FooterLink(props: FooterLinkProps) {
  const { link, title } = props;
  return (
    <li className="mb-6">
      <a href={link} className="text-lg color-palette-1 text-decoration-none">
        {title}
      </a>
    </li>
  );
}
