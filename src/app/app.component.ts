import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'AirportPanel';

    numeroResultados = 6;

    horas = [
        '10:20',
        '10:30',
        '10:35',
        '10:40',
        '11:00',
        '11:20',
        '11:40',
        '12:10',
        '12:25'
    ];

    destinos = [
        'Itália',
        'Estados Unidos da América',
        'Egito',
        'México',
        'Espanha',
        'França',
        'China',
    ];

    voos = [
        'JJ 6654',
        'G3 1452',
        'JJ 4125',
        'G3 8541',
        'AD 8434',
        '2Z 4231',
        'AA 4712'
    ];

    embarques = [
        '10:20',
        '10:30',
        '10:35',
        '10:40',
        '11:00',
        '11:20',
        '11:40',
        '12:10',
        '12:25'
    ];

    portas = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10'
    ];

    lista = [];

    constructor() {
        setInterval(() => {
            this.lista = [];
            for (let i = 0; i < this.numeroResultados; i++) {
                this.lista.push({});
            }
        }, 5000);
    }

    opcoes(param) {
        // tslint:disable-next-line:prefer-const
        let result = [];
        let a = this.horas;
        if (param === 'horas') {
            a = this.horas;
        } else if (param === 'destinos') {
            a = this.destinos;
        } else if (param === 'voos') {
            a = this.voos;
        } else if (param === 'embarques') {
            a = this.embarques;
        } else if (param === 'portas') {
            a = this.portas;
        }
        for (let i = 0; i < this.numeroResultados; i++) {
            result.push(a[this.getNumeroAleatorio()]);
        }
        console.log('!! result', result);
        return result;
    }

    getNumeroAleatorio() {
        return Math.ceil(Math.random() * this.numeroResultados);
    }
}
