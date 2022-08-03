import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MarkdownView from 'react-showdown'
import axios from 'axios'
import Prism from 'prismjs'

function GameContentPage() {
    let [success, setSuccess] = useState(false)
    let [found, setFound] = useState(false)
    let [gameDetails, setGameDetails] = useState({})
    let [contentList, setContentList] = useState([])

    const router = useRouter()
    const { game } = router.query

    useEffect(() => {
        let req = axios.post(`/api/gamedetails?game=${game}`)
            .then((res) => {
                setSuccess(true)
                setFound(true)
                setGameDetails(res.data.game)
                setContentList(res.data.contentList)
            })
            .catch((err) => {
                setSuccess(false)
                setFound(false)
                setGameDetails({})
                setContentList([])
            })
    }, [game])

    return (<div>
        <h1>{gameDetails.name}</h1>
        <p>{gameDetails.desc}</p>

        {contentList.map((f) => {
            return <a href={`/${game}/${f}`}>{f}</a>
        })}
    </div>)
}

export default GameContentPage
