import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, 1),
    new Cliente('João', 29, 2),
    new Cliente('Karoline', 29, 3),
    new Cliente('Michel', 40, 4),
    new Cliente('Anna Karolina', 31, 5)
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir... ${cliente.nome}`)
  }

  return (
    <div className={`flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600`}>
     <Layout titulo="Cadastro Simples">
       <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
     </Layout>
    </div>
  )
}
