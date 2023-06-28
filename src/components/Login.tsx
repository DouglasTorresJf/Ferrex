import { Mail, Lock } from 'lucide-react'
import Link from 'next/link'

export function Login() {
  return (
    <div className="flex w-[36.25rem] flex-col items-center justify-center bg-gray-400">
      <form className="w-full px-10">
        <h2 className="text-2xl mb-8 text-center font-bold text-black">Seja bem vindo !</h2>
        
        <div className="relative mb-2">
          <input
            className="w-full rounded-md border-2 border-gray-600 py-4 pl-12 pr-4 font-medium text-black outline-none"
            type="text"
            placeholder="Digite seu e-mail"
          />
          <Mail
            className="absolute left-0 top-0 ml-2 mt-4 text-gray-400"
            size={24}
          />
        </div>

        <div className="relative">
          <input
            className="w-full rounded-md border-2 border-gray-600 py-4 pl-12 pr-4 font-medium text-black outline-none"
            type="password"
            placeholder="Digite sua senha"
          />
          <Lock
            className="absolute left-0 top-0 ml-2 mt-4 text-gray-400"
            size={24}
          />
        </div>

        <div className="mt-4 flex flex-col items-center">
          <Link
            className="flex w-full items-center justify-center rounded-md bg-blue-600 p-4 text-lg font-bold text-white"
            href="--/não vai passar"
          >
            Login
          </Link>
          <a className="mt-4 font-bold hover:text-gray-500" href="">
            Esqueceu a senha
          </a>
          <a className="mt-4 font-bold hover:text-gray-500" href="/register">
            Não tem uma conta ? Cadastre-se
          </a>
  
        </div>
      </form>
    </div>
  )
}
