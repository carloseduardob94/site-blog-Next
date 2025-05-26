import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export function FeatureSection() {
  return (
    <section className="container bg-gray-700 grid gap-6 md:grid-cols-2 pb-8 pt-8 md:py-10">
      <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-500 md:p-12">
        <span className="text-body-tag uppercase text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm">Simples</span>
        <h2 className="font-sans text-gray-100 text-heading-lg">Crie um catálogo de produtos online em poucos minutos</h2>
      </div>

      <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-500 md:p-12">
        <span className="text-body-tag uppercase text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm">Prático</span>
        <h2 className="font-sans text-gray-100 text-heading-lg">Venda para seu público através de uma plataforma única</h2>
      </div>

      <div className="col-span-full flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 rounded-lg p-6 bg-gray-500">
          <div className="flex flex-col gap-4">
            <span className="text-body-tag uppercase text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm">Personalizado</span>
            <h2 className="font-sans text-gray-100 text-heading-lg">Tenha uma loja online personalizada com a cara da sua marca.</h2>

            <Button asChild className="rounded-full mt-4 p-3 md:mt-auto hidden md:flex w-fit">
              <Link href="/criar-loja">Criar loja grátis <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>


          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-md overflow-hidden">
              <Image
                src="/feature-section-image.svg"
                alt="Loja online personalizada"
                width={440}
                height={330}
                className="object-cover w-full"
              />
            </div>

            <Button asChild className="rounded-full mt-4 md:mt-auto gap-2 w-full md:hidden">
              <Link href="/criar-loja">Criar loja grátis <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>

      </div>


    </section>
  )
}