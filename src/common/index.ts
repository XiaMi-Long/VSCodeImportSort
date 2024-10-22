import os from 'os'
class ImportSort {
    private static importRegex: RegExp = /import\s+[\s\S]+?\s+from\s+['"][^'"]+['"]\s*;?\r?\n?/g

    private static commonRegex: RegExp = /\r?\n/g

    private static regex: any = null

    private static regexType: 'import' | 'common' | '' = ''

    private static imports: string[] = []

    private static result: string[] = []

    constructor() {}

    static clean() {
        ImportSort.imports = []
        ImportSort.result = []
        ImportSort.regex = null
        ImportSort.regexType = ''
        return ImportSort
    }

    static setImportRegex() {
        ImportSort.regex = ImportSort.importRegex
        ImportSort.regexType = 'import'
        return ImportSort
    }

    static setCommonRegex() {
        ImportSort.regex = ImportSort.commonRegex
        ImportSort.regexType = 'common'
        return ImportSort
    }

    /**
     * 分割单词
     * @param words
     * @returns
     */
    static splitWords(words: string) {
        let imports = null
        switch (ImportSort.regexType) {
            case 'common':
                imports = words.split(ImportSort.regex)
                imports = imports
                    .filter((item) => item.length > 0)
                    .map((item) => {
                        return item + '\r\n'
                    })
                break
            case 'import':
                imports = words.match(ImportSort.regex)?.map((item) => {
                    const lastLengthStr = item[item.length - 1]
                    return lastLengthStr === '\n' || lastLengthStr === '\r' ? item : item + os.EOL
                })
                break
        }

        if (imports) {
            ImportSort.imports = imports
        }
        console.log(JSON.stringify(os.EOL))

        return ImportSort
    }

    /**
     * 降序
     * @returns
     */
    static descendSort() {
        ImportSort.result = [...ImportSort.imports].sort((a, b) => {
            return [...b].length - [...a].length
        })

        return ImportSort
    }

    /**
     * 升序
     * @returns
     */
    static ascendSort() {
        ImportSort.result = [...ImportSort.imports].sort((a, b) => {
            return [...a].length - [...b].length
        })

        return ImportSort
    }

    static getResult() {
        return ImportSort.result.join('')
    }
}

export { ImportSort }
