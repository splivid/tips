// This route gets the detials for a game
const fs = require('fs')

export default async function handler(req, res) {
    if (!req.query.game) {
        return res.status(404).json({
            success: false,
            found: false,
            error: "Game property not passed"
        })
    }

    try {
        let foundFile = fs.readFileSync(`content/${req.query.game}/_game.json`)
        let contentList = fs.readdirSync(`content/${req.query.game}/`)
        let finishedContentList = []

        contentList.forEach(fileName => {
            if (fileName != '_game.json') { // Make sure the file isn't the game details file, we already send that
                finishedContentList.push(fileName.split('.')[0]) // find the content
            }
        });

        return res.status(200).json({
                success: true,
                found: true,
                game: JSON.parse(foundFile.toString()),
                contentList: [...finishedContentList]
        })
    } catch {
        return res.status(404).send({
            success: false,
            found: false,
            error: 'Content or game not found!'
        })
    }
}
