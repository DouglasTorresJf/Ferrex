interface RegisteredProps {
  email: string
  cnpj: string
  inscricaoEstadual: string
  razaoSocial: string
  nomeFantasia: string
  endereco: string
  telefone: string
}

export function Registered({
  email,
  cnpj,
  inscricaoEstadual,
  razaoSocial,
  nomeFantasia,
  endereco,
  telefone,
}: RegisteredProps) {
  return (
    <div className="mb-2 flex flex-col space-y-4 rounded bg-gray-400 p-2 mobile:w-full">
      <strong className="text-xl font-normal ">E-mail: {email}</strong>
      <strong className="text-xl font-normal ">CNPJ: {cnpj}</strong>
      <strong className="text-xl font-normal ">
        Inscrição Estadual: {inscricaoEstadual}
      </strong>
      <strong className="text-xl font-normal ">
        Razão Social: {razaoSocial}
      </strong>
      <strong className="text-xl font-normal ">
        Nome Fantasia: {nomeFantasia}
      </strong>
      <strong className="text-xl font-normal ">Endereço: {endereco}</strong>
      <strong className="text-xl font-normal ">Tefefone: {telefone}</strong>
    </div>
  )
}
