import os from 'os'
type Import = {
    line: string
    urls: {
        word: string
        len: number
    }[]
}

function ImportSort(str: string) {
    const urlRegex = /(["'])(.*?)\1/
    const lineRegex = /import\s+[\s\S]+?\s+from\s+['"][^'"]+['"]\s*;?\r?\n?/g

    let imports: Import[] = []

    function splitLine() {
        const importWords = str.match(lineRegex)?.map((item) => {
            const lastLengthStr = item[item.length - 1]
            return lastLengthStr === '\n' || lastLengthStr === '\r' ? item : item + os.EOL
        })

        if (!importWords) throw new Error('importWords is null')

        imports = importWords.map((item) => {
            const urls = item.match(urlRegex)
            if (urls) {
            }

            return {
                line: item,
                urls,
            }
        })
    }
}
