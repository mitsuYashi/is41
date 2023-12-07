import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '脆弱アプリ',
  description: 'SQLインジェクションを起こせるアプリ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <main>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </main>
      </body>
    </html>
  );
}
