import axios from 'axios';

class ConverterKilometersService {
    async getConverterKilometers() {
        const response = await axios.get(`${window.env.API_URL}/converter/kilometers/all`);

        if (!response.data || response.status !== 200) {
            throw new Error('Falha na busca das Kms de Conversor!');
        }

        return response.data;
      }
}

export default new ConverterKilometersService();