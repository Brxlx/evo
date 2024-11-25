import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Evo - AI',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
