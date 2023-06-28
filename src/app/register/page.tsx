'use client'

import { Registered } from '@/components/Registered'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

interface Company {
  id: string
  valueEmail: string
  valueCnpj: string
  valueInscricaoEstadual: string
  valueRazaoSocial: string
  valueNomeFantasia: string
  valueEndereco: string
  valueTelefone: string
  valueSenha: string
}

export default function Register() {
  const [listCompany, setListCompany] = useState<Company[]>([])
  const [email, setEmail] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [inscricaoEstadual, setInscricaoEstadual] = useState('')
  const [razaoSocial, setRazaoSocial] = useState('')
  const [nomeFantasia, setNomeFantasia] = useState('')
  const [endereco, setEndereco] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')

  function handleAddCompany(event: FormEvent) {
    event.preventDefault()

    const company = {
      id: crypto.randomUUID(),
      valueEmail: email,
      valueCnpj: cnpj,
      valueInscricaoEstadual: inscricaoEstadual,
      valueRazaoSocial: razaoSocial,
      valueNomeFantasia: nomeFantasia,
      valueEndereco: endereco,
      valueTelefone: telefone,
      valueSenha: senha,
    }
    setListCompany([company])

    setEmail('')
    setCnpj('')
    setEndereco('')
    setRazaoSocial('')
    setInscricaoEstadual('')
    setSenha('')
    setNomeFantasia('')
    setTelefone('')
  }
  return (
    <div className="mt-6 flex h-screen items-start justify-between gap-10 px-8 mobile:flex-col bg-gray-400">
      <form className="w-[35rem] mobile:w-full">
        <div className="flex items-center justify-between">
          <h1 className="mb-4 text-3xl font-bold">Faça seu cadastro</h1>
          <Link href="/">Voltar para tela de login</Link>
        </div>
        <div className="flex flex-col space-y-2">
          <input
            className="rounded-md border border-gray-400 p-4"
            type="text"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className="rounded-md border border-gray-400 p-4"
            type="text"
            placeholder="CNPJ"
            onChange={(e) => setCnpj(e.target.value)}
            value={cnpj}
          />
          <input
            className="rounded-md border border-gray-400 p-4"
            type="text"
            placeholder="Inscrição Estadual"
            onChange={(e) => setInscricaoEstadual(e.target.value)}
            value={inscricaoEstadual}
          />
          <input
            className="rounded-md border border-gray-400 p-4"
            type="text"
            placeholder="Razão Social"
            onChange={(e) => setRazaoSocial(e.target.value)}
            value={razaoSocial}
          />
          <input
            className="rounded-md border border-gray-400 p-4"
            type="text"
            placeholder="Nome Fantasia"
            onChange={(e) => setNomeFantasia(e.target.value)}
            value={nomeFantasia}
          />
          <input
            className="rounded-md border border-gray-400 p-4"
            type="text"
            placeholder="Endereço"
            onChange={(e) => setEndereco(e.target.value)}
            value={endereco}
          />
          <input
            className="rounded-md border border-gray-400 p-4"
            type="text"
            placeholder="Telefone"
            onChange={(e) => setTelefone(e.target.value)}
            value={telefone}
          />
          <input
            className="rounded-md border border-gray-400 p-4"
            type="text"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />
        </div>

        <button
          onClick={handleAddCompany}
          disabled={senha.length === 0}
          className="mt-4 w-full rounded-md bg-blue-600 p-4 text-lg font-bold text-white disabled:opacity-70 disabled:cursor-not-allowed"
          type="submit"
        >
          Cadastrar
        </button>
      </form>

      <div className="flex-1">
        {listCompany.length === 0 ? (
          <h1 className="mb-2 mt-10 text-center text-4xl font-bold">
            Meus dados
          </h1>
        ) : (
          <div>
            <h2 className="mb-4 text-4xl font-bold">Empresa cadastrada com sucesso</h2>
            {listCompany.map((company) => (
              <Registered
                key={company.id}
                email={company.valueEmail}
                cnpj={company.valueCnpj}
                inscricaoEstadual={company.valueInscricaoEstadual}
                razaoSocial={company.valueRazaoSocial}
                endereco={company.valueEndereco}
                nomeFantasia={company.valueNomeFantasia}
                telefone={company.valueTelefone}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
