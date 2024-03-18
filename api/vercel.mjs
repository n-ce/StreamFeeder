import { xml } from "../main.mjs"

export default function handler(req, res) {
  return res.send(
    xml(
      req.query.url
    )
  )
}
