import { Response } from '../types';

export function validateResponse(response: any): Response {
  if (!response || !response.Search || !response.totalResults) {
  	throw new Error('Invalid response');
  }

  return response;
}
