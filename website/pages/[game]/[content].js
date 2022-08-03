import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MarkdownView from 'react-showdown'
import axios from 'axios'
import Prism from 'prismjs'

function GameContentPage() {
    let [success, setSuccess] = useState(false)
    let [found, setFound] = useState(false)
    let [markdownContent, setMarkdownContent] = useState("")

    const router = useRouter()
    const { game, content } = router.query

    useEffect(() => {
        let req = axios.post(`/api/content?game=${game}&content=${content}`)
            .then((res) => {
                setSuccess(true)
                setFound(true)
                setMarkdownContent(res.data.content || "# Big Error Time")
                Prism.highlightAll()
            })
            .catch((err) => {
                setSuccess(false)
                setFound(false)
                setMarkdownContent('Invalid')
                Prism.highlightAll()
            })
    }, [game, content])

    useEffect(() => {
        Prism.highlightAll()
    }, [success, found])

    return (<div className={'markdowncontainer'}>
        <MarkdownView
            markdown={markdownContent}
            options={{ tables: true, emoji: true }}
        />
    </div>)
}

export default GameContentPage
