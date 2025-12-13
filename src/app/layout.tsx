import "./globals.css";
import Image from 'next/image'
import Link from 'next/link'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
      <div className="flex h-screen flex-col items-center w-full text-primary-light  font-sans ">
        <header className='h-[50px] px-5 w-full gap-2 bg-secondary flex items-center'>
          <Image
            src='/outsera-logo.jpg'
            alt='Outsera Logo'
            width={30}
            height={30}
            className='rounded-sm'
          />
          Outsera Movies
        </header>
        <main className="flex w-full items-center justify-between sm:items-start">
          <nav className='bg-secondary-light w-full max-w-[260px] h-[calc(100vh-50px)] flex flex-col max-w-3xs p-4 gap-2'>
            <Link href='/'>Dashboard</Link>
            <Link href='/list'>List</Link>
          </nav>
          <div className='bg-secondary-light w-full h-[calc(100vh-50px)] p-4'>
            <div className='bg-primary rounded-lg w-full h-full p-3'>
              {children}
            </div>
          </div>

        </main>
      </div>
      </body>
    </html>
  );
}
