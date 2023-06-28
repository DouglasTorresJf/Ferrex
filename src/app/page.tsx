import { Login } from '@/components/Login'

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* letf-content */}
      <div className="flex w-[25rem] flex-1 items-center justify-center bg-orange-500 mobile:hidden">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-white">Ferrex</h1>
          <p className="mb-4 text-lg text-white">
           Transportando suas cargas com um menor custo .
          </p>
    
        </div>
      </div>

      {/* right-content */}
      <Login />
    </div>
  )
}
