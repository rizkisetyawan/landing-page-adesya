import { client } from "../../utils/client";

export default async function handler(req, res) {
  const data = await client.fetch(`{
    'home': *[_type == 'home'][0],
    'sections': *[_type == 'sections'],
    'services': *[_type == 'services'],
    'projects': *[_type == 'projects'] {
      order,
      title,
      'images': images[]->image
    },
    'clients': *[_type == 'clients'],
    'contacts': *[_type == 'contacts'][0],
  }`);

  if (data) {
    res.status(200).json(data);
  } else {
    res.json([]);
  }
}
