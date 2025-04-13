import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Filme } from '../dto/contato';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  URL_BASE = `${environment.url}/movies`;

  constructor(private http: HttpClient) {}

  public novo(): Filme {
    let filme: Filme = {
      id: undefined,
      title: '',
      gender: '',
      year: '',
      _rid: '',
      _attachments: '',
      _ts: 0,
    };

    return filme;
  }

  /**
   * ```
   * import { Contato } from '../dto/contato';
   *
   * Retorna um objeto Contato mapeado
   * ```
   *
   * @param parametros
   * @returns @see {filme}
   */
  public mapParams(parametros: Params): Filme {
    let filme: Filme = {
      id: parametros['id'],
      title: parametros['title'],
      gender: parametros['gender'],
      year: parametros['year'],      
    };

    return filme;
  }

  /**
   *
   * @param page
   * @param linesPerPage
   * @param obj
   * @returns Observable de Lista de Patchs paginado
   */
  public filter(    
    obj: Filme
  ): Observable<any> {
    
    let endpoint = `${this.URL_BASE}/filtros`;

    const params = new HttpParams()      
      .set('payload', JSON.stringify(obj));

    return this.http.get(endpoint, { params });
  }


  /**
   * ```
   * Recupera a lista com os 10 primeiros Contatos ordendo pelo Atributo nome
   *
   * ```
   * @param id
   * @returns Observable<any>
   *
   * @author Artur Cavalcante
   * @since 16-06-2023 14:36
   */
  public findFilmes(): Observable<any> {
    let endpoint = `${this.URL_BASE}`;

    return this.http.get(`${endpoint}`);
  }



  /**
   * ```
   * Obtém um contato específico de acordo com o código enviado
   *
   * ```
   * @param id
   * @returns Observable<any>
   *
   * @author Artur Cavalcante
   * @since 16-06-2023 14:36
   */
  public findById(id: number): Observable<any> {
    let endpoint = `${this.URL_BASE}`;

    return this.http.get(`${endpoint}/${id}`);
  }

  /**
   * ```
   * Envia uma requisição POST com um corpo JSON e retorna
   * uma resposta HTTP com o código 201.
   *  ```
   *
   * @param obj O objeto Contato.
   *
   * @return An `Observable` da resposta, com o status da resposta do servidor.
   */
  public save(obj?: Filme): Observable<any> {
    let endpoint = `${this.URL_BASE}`;

    return this.http.post(`${endpoint}`, obj);
  }


  /**
   * ```
   * Envia uma requisição UP com O id e um corpo JSON e retorna
   * uma resposta HTTP com o código 204.
   *  ```
   *
   * @param obj O objeto Contato.
   *
   * @return An `Observable` da resposta, com o status da resposta do servidor.
   */
  public update(id: number, obj?: Filme): Observable<any> {
    let endpoint = `${this.URL_BASE}/${id}`;

    return this.http.put(`${endpoint}`, obj);
  }


  /**
   * ```
   * Envia uma requisição DELETE  para remover contato
   *  ```
   *
   * @param id .
   *
   * @return An `Observable` da resposta.
   */
  public remover(id: number): Observable<any> {
    let endpoint = `${this.URL_BASE}/${id}`;

    return this.http.delete(`${endpoint}`);
  }


  /**
   * ```
   * Envia uma requisição DELETE  para remover endereço
   *  ```
   *
   * @param id .
   *
   * @return An `Observable` da resposta.
   */
  public removerEndereco(id: number): Observable<any> {
    let endpoint = `${this.URL_BASE}/enderecos/${id}`;

    return this.http.delete(`${endpoint}`);
  }
}
