import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.3.2:3333',
});

export default api;

/**
 *
 * iOS com emulador: localhost
 * iOS fisico: IP da máquina
 * Android com Emulador: localhost (adb reverse)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.2.3 ou 10.0.3.2 (Genymotion)
 * Android fisico: Ip da máquina
 *
 */
