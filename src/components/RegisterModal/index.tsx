import styles from './RegisterModal.module.scss'
import { FaUser } from 'react-icons/fa'
import { BsPrinter, BsTrash } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'
import { useAuth } from '@/contexts/AuthContext'
interface RegisterModalProps {
  RecordType: 'employees' | 'clients'
}

export function RegisterModal(props: RegisterModalProps) {
  const { registerEmployeesModal } = useAuth()
  return (
    <div className={styles.RegisterModalContainer}>
      <header>
        <section>
          <div>
            <span>
              <FaUser className={styles.userIcon} color="#6A6A6A" />
            </span>
            <div>
              <p>Novo Cadastro</p>
              <p>
                Insira os dados do{' '}
                {props.RecordType === 'employees' ? 'Funcionário' : 'Cliente'}
              </p>
            </div>
          </div>
          <p>Princial</p>
        </section>
        <section>
          <button onClick={registerEmployeesModal}>X</button>
          <button>PRONTUÁRIOS</button>
        </section>
      </header>
      <hr />
      <main>
        <section className={styles.optionsSection}>
          <button>
            <BsPrinter />
            <p>IMPRIMIR</p>
          </button>
          <button className={styles.deleteButton}>
            <BsTrash />
            <p>EXCLUIR</p>
          </button>
          <button>
            <HiDocumentText />
            <p>SALVAR</p>
          </button>
        </section>
        <section className={styles.inputsSection}>
          <div className={styles.inputsDiv}>
            <div className={styles.principalLabels}>Identificação</div>
            <div>
              <label htmlFor="">Nome</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Dt. Nascimento</label>
              <input type="text" />
              <label htmlFor="">Estado civil</label>
              <select name="" id="">
                <option value="">Selecione</option>
                <option value="">Solteiro</option>
                <option value="">Casado</option>
              </select>
              <label htmlFor="">Número de filhos</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">CPF</label>
              <input type="text" />
              <label htmlFor="">Escolaridade</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Sexo</label>
              <input type="text" />
              <label htmlFor="">Naturalidade</label>
              <input type="text" />
            </div>
          </div>
          <div className={styles.inputsDiv}>
            <div className={styles.principalLabels}>Informações Militares</div>
            <div>
              <label htmlFor="">Nome de Guerra</label>
              <input type="text" />
              <label htmlFor="">RG Militar</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Unidade</label>
              <input type="text" />
              <label htmlFor="">Posto/Gradução ou Categoria</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Função Administrativa</label>
              <input type="text" />
              <label htmlFor="">Quadro</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Situação Funcional</label>
              <input type="text" />
              <label htmlFor="">Data de inclusão</label>
              <input type="text" />
            </div>
          </div>
          <div className={styles.inputsDiv}>
            <div className={styles.principalLabels}>Endereço</div>
            <div>
              <label htmlFor="">CEP</label>
              <input type="text" />
              <label htmlFor="">Número</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Cidade</label>
              <input type="text" />
              <label htmlFor="">Bairro</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Estado</label>
              <input type="text" />
            </div>
          </div>
          <div className={styles.inputsDiv}>
            <div className={styles.principalLabels}>Contato</div>
            <div>
              <label htmlFor="">E-mail</label>
              <input type="text" />
              <div>
                <label htmlFor="">Celular</label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className={styles.inputsDiv}>
            <div className={styles.principalLabels}>Registro Profissional</div>
            <div>
              <label htmlFor="">Conselho</label>
              <input type="text" />
              <label htmlFor="">Número</label>
              <input type="text" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
