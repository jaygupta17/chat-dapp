import { Navbar } from "@/components/navbar";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";

export default function Layout({children}:{children:ReactNode}) {
    return(
        <div className="relative flex flex-col">
            <Navbar />
            <Divider />
            <main className="container mx-auto max-w-7xl pt-5 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link>
            </footer>
          </div>
    )
}