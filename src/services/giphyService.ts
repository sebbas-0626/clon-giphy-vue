const apiKey = 'lUYR7ZJvy0JQJRQ63GAw7mDOwH2NKkDw';
const apiUrl = 'https://api.giphy.com/v1/gifs/search';

export const searchGifs = async (query: string, limit = 20): Promise<any[]> => {
  try {
    const response = await fetch(`${apiUrl}?api_key=${apiKey}&q=${query}&limit=${limit}`);
    const { data } = await response.json();
    return data.map((item: any) => {
      return {
        id: item.id,
        title: item.title,
        url: item.images.fixed_height_downsampled.url
      }
    });
  } catch (error) {
    console.error('Error fetching Giphy data:', error);
    throw error;
  }
}
