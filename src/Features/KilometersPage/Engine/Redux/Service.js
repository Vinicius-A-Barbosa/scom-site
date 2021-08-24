import axios from 'axios';

class EngineKilometersService {
    async getEngineKilometers() {
        const response = await axios.get('http://localhost:8082/engine/kilometers/all');

        if (!response.data || response.status !== 200) {
            throw new Error('Falha na busca das Kms de Motor!');
        }

        return response.data;
      }
}

export default new EngineKilometersService();