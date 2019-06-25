import {Injectable} from '@angular/core';
import {LoadingController, ToastController} from '@ionic/angular';
import {Socket} from 'ngx-socket-io';
import {ELocalNotificationTriggerUnit, LocalNotifications} from '@ionic-native/local-notifications/ngx';

// import {LocalNotificationsOriginal} from '@ionic-native/local-notifications';


@Injectable({
    providedIn: 'root'
})
export class AlertsService {

    constructor(public loadingController: LoadingController,
                private socket: Socket, // Agregamos un socket
                private localNotifications: LocalNotifications, // Modulo para las notificaciones de celular
                public toastController: ToastController // Notificaciones internas
    ) {

        this.socket.on('salio', (data) => { // Escuchar cuando alguien sale
            console.log('salio ', data);
            this.scheduleNotification(data.paciente.nombre); // Se muetra la notificación con el nombre del paciente que salio
        });
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Cargando',
        });
        await loading.present();

        const {role, data} = await loading.onDidDismiss();

        console.log('Loading dismissed!');
    }

    closeLoading() {
        this.loadingController.dismiss();
    }

    scheduleNotification(paciente) {
        console.log('notificaion');
        this.presentToast(`El paciente ${paciente} esta a punto de escaparse`); // presentamos notificacion local
        this.localNotifications.schedule({ // Notificaion del celular
            id: 1,
            title: 'Alerta Activada',
            text: `El paciente ${paciente} esta a punto de escaparse`,
            data: {mydata: 'My hidden message this is'},
            // trigger: {in: 1, unit: ELocalNotificationTriggerUnit.SECOND},
            foreground: true // Show the notification while app is open
        });
    }


    async presentToast(mensaje) {
        const toast = await this.toastController.create({ // Defininicion caracteristicas notificacion local
            message: mensaje,
            duration: 2000
        });
        toast.present(); // presenta notificacion local
    }
}
