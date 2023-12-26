import { getFirestore, collection, addDoc, setDoc, deleteDoc, query, getDocs, getDoc } from 'firebase/firestore';
import ClienteRepositorio from "../../core/ClienteRepositorio";
import Cliente from "../../core/Cliente";
import firebaseApp from "../config";

export default class ColecaoCliente implements ClienteRepositorio {
  #conversor = {
    toFirestore(cliente: Cliente){
      return {
        nome: cliente.nome,
        idade: cliente.idade,
      };
    },

    fromFirestore(snapshot: any, options: any): Cliente {
      const dados = snapshot.data(options);
      return new Cliente(dados.nome, dados.idade, snapshot.id);
    }
  };

  private colecao() {
    // Use a função getFirestore para obter a instância do Firestore
    return collection(getFirestore(firebaseApp), 'clientes').withConverter(this.#conversor);
  }

  async salvar(cliente: Cliente): Promise<Cliente> {
    if (cliente?.id) {
      await setDoc(this.colecao().doc(cliente.id), cliente);
      return cliente;
    } else {
      const docRef = await addDoc(this.colecao(), cliente);
      const doc = await getDoc(docRef);
      return doc.data();
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    await deleteDoc(this.colecao().doc(cliente.id));
  }

  async obterTodos(): Promise<Cliente[]> {
    const querySnapshot = await getDocs(query(this.colecao()));
    return querySnapshot.docs.map(doc => doc.data()) as Cliente[];
  }
}
