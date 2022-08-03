const fs = require('fs')

export default async function handler(req, res) {
    if (!req.query.game || !req.query.content) return res.status(404).json({
        success: false,
        found: false,
        error: 'Game or content not present in query'
    })

    try {
        let foundFile = fs.readFileSync(`content/${req.query.game}/${req.query.content}.md`)
        const fileStr = foundFile.toString()

        return res.status(200).json({
                success: true,
                found: true,
                content: fileStr
        })
    } catch {
        return res.status(404).send({
            success: false,
            found: false,
            error: 'Content or game not found!'
        })
    }
}
