import axios from 'axios';

class BogieKilometersService {
    async getBogieKilometers() {
        const response = await axios.get(`${window.env.API_URL}/bogie/kilometers/all`);

        if (!response.data || response.status !== 200) {
            throw new Error('Falha na busca das Kms de Truque!');
        }

        return response.data;
      }
}

export default new BogieKilometersService();