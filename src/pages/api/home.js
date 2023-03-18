import { getHome } from "./../../utils/queries";
import { client } from "../../utils/client";

export default async function handler(req, res) {
  const data = await client.fetch(getHome());

  if (data) {
    res.status(200).json(data);
  } else {
    res.json([]);
  }
}
