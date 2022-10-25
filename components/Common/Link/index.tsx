import clsx from 'clsx';
import Link from 'next/link'
import { memo } from "react";
const LinkElement = ({ children, href, className } : any) => {
  return (
    <Link href={href}>
      <a className={clsx('', className)}>
        {children}
      </a>
    </Link>
  );
};

export default memo(LinkElement);
