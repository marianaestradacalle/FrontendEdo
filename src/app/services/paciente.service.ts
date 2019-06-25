import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL_API} from '../../environments/environment';
import {EncargadoService} from './encargado.service';

@Injectable({
    providedIn: 'root'
})
export class PacienteService {
    url = URL_API;
    Paciente;

    constructor(private http: HttpClient, private encargadoService: EncargadoService) {

    }

    getP(cc) {
        return this.http.get(this.url + 'paciente/'+ cc);
    }

    getAP() {
        return this.http.get(this.url + 'paciente/');
    }

    registroP(body) {
        return this.http.post(this.url + 'paciente', {...body, encargado: this.encargadoService.encargado.cc});
    }

    eliminarP(cc) {
        return this.http.delete(this.url + 'paciente', cc);
    }

    actualizarP(body) {
        return this.http.put(this.url, 'paciente', body);
    }

    registrarF(body) {
        return this.http.put(this.url + 'paciente/familiar', body);
    }
}
