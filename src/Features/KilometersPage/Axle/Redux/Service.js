import axios from 'axios';

class AxleKilometersService {
    async getAxleKilometers() {
        const response = await axios.get('http://localhost:8082/axle/kilometers/all');

        if (!response.data || response.status !== 200) {
            throw new Error('Falha na busca das Kms de Eixo!');
        }

        return response.data;
      }
}

export default new AxleKilometersService();