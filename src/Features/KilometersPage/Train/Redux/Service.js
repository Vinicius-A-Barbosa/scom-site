import axios from 'axios';

class TrainKilometersService {
    async getTrainKilometers() {
        const response = await axios.get('http://localhost:8082/train/kilometers/all');

        if (!response.data || response.status !== 200) {
            throw new Error('Falha na busca das Kms de Trem!');
        }

        return response.data;
      }
}

export default new TrainKilometersService();