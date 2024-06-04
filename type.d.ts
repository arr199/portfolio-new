import { ComponentPropsWithoutRef } from 'react';

interface NavLinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string;
  children: React.ReactNode;
}
