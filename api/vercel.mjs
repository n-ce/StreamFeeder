import { xml } from "../main.mjs"

export default function handler(req, res) {
  return res.json({
    message: xml(req.query.url)
  })
}
