import { Property } from "../types/property";

const baseUrl = process.env.BASE_URL;

export async function getProperties(): Promise<Property[]> {
  const response = await fetch(`${baseUrl}/api/properties`);
  return response.json();
}
