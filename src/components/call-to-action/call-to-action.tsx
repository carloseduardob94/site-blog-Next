import { ArrowRightIcon, Store } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="py-24 bg-[url('/bg-gradient-call-to-action.svg')] bg-no-repeat bg-cover bg-center">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="p-4 rounded-full bg-cyan-300 w-fit -mt-[124px]">
            <Store className="text-cyan-100" />
          </div>
          <h2 className="font-sans text-gray-100 text-balance text-heading-xl mt-14">Crie uma loja online e inicie <br /> suas vendas ainda hoje</h2>
          <Button className="rounded-full w-fit mt-6 mb-10" asChild>
            <Link href="/">
              Criar loja grátis
              <span>
                <ArrowRightIcon />
              </span>
            </Link>
          </Button>

        </div>

      </div>
    </section>
  )
}
