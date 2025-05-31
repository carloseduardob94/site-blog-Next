import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { allPosts } from "contentlayer/generated";
import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown";


export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const post = allPosts.find((post) => post.slug.toLowerCase() === slug)

  const publishedDate = new Date(post?.date ?? '').toLocaleDateString('pt-BR')

  return (
    <main className="mt-32">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="text-action-sm">
              <Link href="/blog" className="text-gray-200">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-gray-200" />
          <BreadcrumbItem>
            <span className="text-blue-200 text-action-sm">{post?.title}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
        <article className="bg-gray-600 rounded-lg overflow-hidden border-[1px] border-gray-400">
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            <Image src={post?.image ?? ''} alt={post?.title ?? ''} fill className="object-cover" />
          </figure>

          <header className="p-4 md:p-6 lg:p-12 pb-0 mt-8">
            <h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl text-gray-100">{post?.title}</h1>
            <Avatar.Container>
              <Avatar.Image src={post?.author.avatar.trim() ?? ''} alt={post?.author.name ?? ''} size="sm" />
              <Avatar.Content>
                <Avatar.Title>{post?.author.name}</Avatar.Title>
                <Avatar.Description>

                  Publicado em
                  <time dateTime={post?.date}> {publishedDate}</time>
                </Avatar.Description>
              </Avatar.Content>
            </Avatar.Container>
          </header>

          <div className="prose prove-invert max-w-none px-4 mt-12 md:px-6 lg:px-12">
            <Markdown content={post?.body.raw ?? ''} />
          </div>
        </article>
      </div>
    </main>
  )
}