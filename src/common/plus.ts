import os from 'os'

type SplitImportType = {
    line: string
    pathWords: string[]
}

class ImportSortPlus {
    private static importRegex: RegExp = /import\s+[\s\S]+?\s+from\s+['"][^'"]+['"]\s*;?\r?\n?/g

    private static wordRegex: RegExp = /from\s+['"][]/g

    private static importSplits: object[] = []

    constructor() {}

    /**
     * 分割单词
     * @param words
     * @returns
     */
    static splitImport(words: string) {
        let importWords = null

        importWords = words.match(ImportSortPlus.importRegex)?.map((item) => {
            const lastLengthStr = item[item.length - 1]
            return lastLengthStr === '\n' || lastLengthStr === '\r' ? item : item + os.EOL
        })

        if (importWords) {
            ImportSortPlus.importSplits = importWords.map((item) => {
                return {}
            })
        }
        // console.log(JSON.stringify(os.EOL))

        return ImportSortPlus
    }

    static splitWord() {
        ImportSortPlus.importSplits.forEach((item) => {
            console.log(item.split(ImportSortPlus.wordRegex))
        })
    }
}

export { ImportSortPlus }
