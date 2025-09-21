import axios from 'axios';

const callGeminiViaBackend = async (prompt: string) => {
  try {
    const response = await axios.post('http://localhost:5000/api/gemini', {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    });
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error calling Gemini API via backend:', (error as any).response?.data || (error as any).message);
  }
};

export default callGeminiViaBackend;