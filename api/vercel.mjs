import { xml } from "../main.mjs"

export default handler = (req, res) => res.json({
  message: xml(req.query.url)
})
