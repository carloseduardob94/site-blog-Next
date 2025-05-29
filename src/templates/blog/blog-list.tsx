import { Search } from "@/components/search";
import { useRouter } from "next/router";
import { PostCard } from "./components/post-card";

export function BlogList() {
  const router = useRouter();
  const query = router.query.q as string
  const pageTitle = query ? `Resultados para "${query}"` : "Dicas e estratégias para impulsionar o seu negócio"

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center uppercase md:text-left py-2 px-4 bg-cyan-300">BLOG</span>

            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">{pageTitle}</h1>
          </div>
          <Search />
        </div>
      </header>
      {/* SEARCH */}
      {/* LISTAGEM DE POSTS */}
      <PostCard />
    </div>
  )
}