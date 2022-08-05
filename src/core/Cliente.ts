export default class Cliente {
	#id: string
	#nome: string
	#idade: number

	constructor(idade: number, nome: string, id: string = null){
		this.#nome = nome
		this.#idade = idade
		this.#id = id
	}

	static vazio(){
		return Cliente('', 0)
	}

	get id(){
		return this.#id
	}

	get nome(){
		return this.#nome
	}

	get idade(){
		return this.#idade
	}
}