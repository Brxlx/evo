import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Evo - AI',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
