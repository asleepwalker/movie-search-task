import { baseUrl, apiKey } from './config';
import { validateResponse } from './utils';
import { Response } from '../types';

export const searchApi = (input: string, page: number = 1): Promise<Response> =>
  fetch(`${baseUrl}?s=${input.toLowerCase()}&page=${page}&apikey=${apiKey}`)
    .then((response) => response.json())
    .then(validateResponse);
