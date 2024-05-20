import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.css';

import cadastrar from '../../../public/icones/cadastrar.svg';

export default function CadUsu() {
    
    return (
        <div className={styles.container}>
            <div>
                <h2>Criar uma conta</h2>
            </div>
            <form id="form" className={styles.form}>
                <div className={styles.formControl} id="valNome">
                    <label for="username">Nome de usuário</label>
                    <div className={styles.divInput}>
                        <input
                            type="text"
                            id="username"
                            placeholder="Digite seu nome de usuário..."
                        />

                        <span className={styles.sucesso}>
                            check_circle
                        </span>
                        <span className={styles.erro}>
                            error
                        </span>

                    </div>                    
                    <small id="nome">Insira o nome completo do usuário</small>
                </div>
        
                <div className={styles.formControl} id="valEmail">
                  <label for="email">Email</label>
                  <div className={styles.divInput}>
                    <input type="text" id="email" placeholder="Digite seu email.." />
                    <span className={styles.sucesso}>
                        check_circle
                    </span>
                    <span className={styles.erro}>
                        error
                    </span>
                  </div>                  
                  <small>Insira o e-mail corretamente!</small>
                </div>
        
                <div className={styles.doisItens}>
                    <div className={styles.formControl} id="valEstado">
                        <label for="estado">Estado</label>
                        <div className={styles.divInput}>
                          <select name="selUf" id="estado">
                            <option selected disabled value="0">Sel. estado</option>
                            <option value="1">SP</option>
                            <option value="2">RJ</option>
                            <option value="3">PR</option>
                          </select>
                          <span className={styles.sucesso}>
                              check_circle
                          </span>
                          <span className={styles.erro}>
                              error
                          </span>
                        </div>                  
                        <small>Campo obrigatório!</small>
                    </div>

                    <div className={styles.formControl} id="valCidade">
                        <label for="cidade">Cidade</label>
                        <div className={styles.divInput}>
                            <select name="selCidade" id="cidade">
                                <option selected disabled value="0">Selecione a cidade</option>
                                <option value="1">Tupã</option>
                                <option value="2">Parapuã</option>
                                <option value="3">Marília</option>
                            </select>
                          <span className={styles.sucesso}>
                              check_circle
                          </span>
                          <span className={styles.erro}>
                              error
                          </span>
                        </div>                  
                        <small>Selecione a cidade!</small>
                    </div>
                </div>

                <div className={styles.formControl} id="valLog">
                    <label for="logradouro">Logradouro</label>
                    <div className={styles.divInput}>
                        <input
                            type="text"
                            id="logradouro"
                            placeholder="Digite o endereço..."
                        />

                        <span className={styles.sucesso}>
                            check_circle
                        </span>
                        <span className={styles.erro}>
                            error
                        </span>

                    </div>                    
                    <small>Insira os dados referente ao endereço</small>
                </div>

                <div className={styles.doisItens}>
                    <div className={styles.formControl} id="valNum">
                        <label for="num">Número</label>
                        <div className={styles.divInput}>
                            <input
                                type="text"
                                id="num"
                                placeholder="nº do endereço"
                            />
                          <span className={styles.sucesso}>
                              check_circle
                          </span>
                          <span className={styles.erro}>
                              error
                          </span>
                        </div>                  
                        <small>Campo obrigatório!</small>
                      </div>

                      <div className={styles.formControl} id="valBairro">
                        <label for="bairro">Bairro</label>
                        <div className={styles.divInput}>
                            <input
                                type="text"
                                id="bairro"
                                placeholder="Insira o nome do bairro"
                            />
                          <span className={styles.sucesso}>
                              check_circle
                          </span>
                          <span className={styles.erro}>
                              error
                          </span>
                        </div>                  
                        <small>Selecione a cidade!</small>
                      </div>
                </div>

                <div className={styles.doisItens}>
                    <div className={styles.formControl} id="valComp">
                        <label for="comp">Complemento</label>
                        <div className={styles.divInput}>
                            <input
                                type="text"
                                id="comp"
                                placeholder="Complemento do endereço"
                            />
                          <span className={styles.sucesso}>
                              check_circle
                          </span>
                          <span className={styles.erro}>
                              error
                          </span>
                        </div>                  
                        <small>-</small>
                      </div>

                      <div className={styles.formControl} id="valCelular">
                        <label for="celular">nº celular</label>
                        <div className={styles.divInput}>
                            <input
                                type="text"
                                id="celular"
                                placeholder="Insira o nº do celular"
                            />
                          <span className={styles.sucesso}>
                              check_circle
                          </span>
                          <span className={styles.erro}>
                              error
                          </span>
                        </div>                  
                        <small>O nº do celular é obrigatório</small>
                      </div>
                </div>

                <div className={styles.formControl} id="validaSn1">
                  <label for="password">Senha</label>
                  <div className={styles.divInput}>
                    <input
                        type="password"
                        id="password"
                        placeholder="Digite sua senha..."
                    />
                    <span className={styles.sucesso}>
                        check_circle
                    </span>
                    <span className={styles.erro}>
                        error
                    </span>
                  </div>                  
                  <small>A senha precisa ter no mínimo 7 caracteres.</small>
                </div>
        
                <div className={styles.formControl} id="validaSn2">
                  <label for="password-confirmation">Confirmação de senha</label>
                  <div className={styles.divInput}>
                    <input
                        type="password"
                        id="password-confirmation"
                        placeholder="Digite sua senha novamente..."
                    />
                    <span className={styles.sucesso}>
                        check_circle
                    </span>
                    <span className={styles.erro}>
                        error
                    </span>
                  </div>                  
                  <small>Confirmação obrigatória, as senhas inseridas devem ser iguais!</small>
                </div>
        
                <button type="submit">
                    <Image src={cadastrar} alt="cadastrar" />
                    Enviar
                </button>
            </form>
        </div>
    )
}