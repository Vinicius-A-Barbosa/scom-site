import axios from 'axios';

class AxleKilometersService {
    async getAxleKilometers() {
        const response = await axios.get(`${window.env.API_URL}/axle/kilometers/all`);

        if (!response.data || response.status !== 200) {
            throw new Error('Falha na busca das Kms de Eixo!');
        }

        return response.data;
      }
}

export default new AxleKilometersService();