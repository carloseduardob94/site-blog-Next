import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";
import { PT_Sans_Caption } from "next/font/google";

const ptSansCapition = PT_Sans_Caption({
  weight: '700',
  subsets: ['latin'],
})

export function SupportSection() {
  return (
    <section className=" pb-8 pt-10 bg-gradient-to-r from-gray-500 to-gray-700">
      <div className="container flex flex-col items-center gap-12">
        <h2 className={`${ptSansCapition.className} text-balance text-center text-heading-xl text-gray-100`}>Sua loja de afiliados, simples, do jeito que deveria ser</h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <PaintbrushVertical className="w-6 h-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">Personalize seu site</strong>
            <p className="text-body-sm text-gray-200">Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com a sua cara.</p>
          </div>

          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-200 mb-4">
              <Store className="w-6 h-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">Venda de qualquer loja</strong>
            <p className="text-body-sm text-gray-200">Não importa a loja, o Site.Set permite que você insira qualquer link de afiliado.</p>
          </div>

          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <HeartHandshake className="w-6 h-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">Receba suporte amigável</strong>
            <p className="text-body-sm text-gray-200">Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
