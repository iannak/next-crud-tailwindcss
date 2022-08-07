import Cliente from "./CLiente"

export default interface ClienteRepositorio {
	salvar(cliente: Cliente): Promise<Cliente>
	excluir(cliente: Cliente): Promise<void>
	obterTodos(): Promise<Cliente[]>
}