import Image from "next/image";

const customerHistories = [
  {
    content: "Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.",
    author: {
      name: "Annette Bones",
      role: "CEO na Anne Corp",
      avatar: "/avatar-1.png"
    }
  },
  {
    content: "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
    author: {
      name: "Jacob Jones",
      role: "CEO na JJ Org",
      avatar: "/avatar-2.png"
    }
  }
]

export function CustomerHistorySection() {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2 className="font-sans text-balance text-center text-heading-xl text-gray-100">Quem utiliza, aprova!</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {customerHistories.map((customer) => (
            <div key={customer.author.name} className="flex flex-col gap-4 rounded-lg bg-gray-600 border border-gray-400 p-10">
              <p className="text-body-md text-gray-200">{customer.content}</p>

              <div className="flex items-center gap-3 mt-10">
                <Image
                  src={customer.author.avatar}
                  alt={customer.author.name}
                  width={36}
                  height={36}
                  className="rounded-full"
                />

                <div className="flex flex-col">
                  <strong className="text-body-sm font-medium text-gray-200">{customer.author.name}</strong>
                  <span className="text-body-xs text-gray-300">{customer.author.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
