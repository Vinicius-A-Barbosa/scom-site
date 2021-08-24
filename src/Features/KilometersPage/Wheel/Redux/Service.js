import axios from 'axios';

class WheelKilometersService {
    async getWheelKilometers() {
        const response = await axios.get('http://localhost:8082/wheel/kilometers/all');

        if (!response.data || response.status !== 200) {
            throw new Error('Falha na busca das Kms de Trem!');
        }

        return response.data;
      }
}

export default new WheelKilometersService();