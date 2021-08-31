import axios from 'axios';

class TrainsPageService {
    async getTrainKilometers(page) {
        const config = { headers: {"Content-Type": "text/plain"} };
        const response = await axios.put(
            `${window.env.API_URL}/train/lastKm/pageable`,
            page,
            config
        );

        if (!response.data || response.status !== 200) {
            throw new Error('Falha na busca das Kms de Trem!');
        }

        return response.data;
      }
}

export default new TrainsPageService();