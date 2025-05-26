import { Inter } from "next/font/google";
import { Footer } from "../footer";
import { Header } from "../header"

type LayoutProps = {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter'
})


export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${inter.className} relative flex min-h-screen flex-col bg-gray-700 font-inter`}>
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  )
}