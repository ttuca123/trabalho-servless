import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { isCPF } from 'brazilian-values';
import { Filme } from 'src/app/dto/contato';
import { Endereco } from 'src/app/dto/endereco';
import { ContatoService } from 'src/app/services/contato.service';
import { GeoService } from 'src/app/services/geo.service';
import { View } from 'src/app/utils/view';


@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.scss'],
  
})
/**
 * @author Artur Cavalcante
 * @since 16-06-2023
 */
export class ContatoFormComponent extends View implements OnInit {
  
  filme: Filme;     
  titleField = new FormControl('', [Validators.required]);
  genderField = new FormControl('', [Validators.required]);
  yearField = new FormControl('', [Validators.required]);  

  constructor(
    private contatoService: ContatoService,    
    private route: ActivatedRoute,
    private router: Router,
    public override loading: MatDialog
  ) {
    super('Cadastro de Filme', loading);
  }

  ngOnInit() {
    this.filme = this.contatoService.novo();    
    this.route.params.subscribe((parametros: Params) => {
      const codigo = parametros['id'];
      console.log('codigo: ' + codigo);

      if (codigo) {
        this.contatoService.mapParams(parametros);

        this.contatoService.findById(codigo).subscribe(
          (contato) => {
            this.filme = contato.data;

            console.log(this.filme);
          },
          (err) => {
            console.error(err);
          }
        );
      }
    });    
  }
  

  onSubmit() {
    
    if (this.filme != undefined && (this.filme.id == undefined)) {
      this.inserir();
    }else{
      this.update();
    }
  }


  /**
   * ```
   * Update de Contato
   * ```
   * @author Artur Cavalcante
   */
  update(){
      
      this.exibirLoading('Atualizando Contato');
      this.subscription = this.contatoService
      .update(this.filme.id, this.filme)
      .subscribe(_ => {
        this.fecharLoading();
        alert('Atualização realizada com sucesso!');
      }, err=> {
        alert('Ocorreu um erro!');
        console.error(err);        
        this.fecharLoading();
      })
  }
  

  /**
   * ```
   *  Inserir um novo filme
   * ```
   *
   */
  inserir() {    
    this.exibirLoading('Salvando Filme');    
    let payload = this.montarPayload(this.filme);    
    console.log(payload);
    this.subscription = this.contatoService
      .save(payload)
      .subscribe((_) => {
        this.exibirSucesso();
        this.limpar();
        this.fecharLoading();
        this.filme = this.contatoService.novo();
        alert('Inclusão realizada com sucesso!');
        
      }, err => {
        alert('Ocorreu um erro!');
        console.error(err);        
        this.fecharLoading();
      }); 
  }

  montarPayload(filme){

    let payload = {
      "title": filme.title,
      "gender": filme.gender,
      "year": filme.year      
    }

    return payload;

  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
