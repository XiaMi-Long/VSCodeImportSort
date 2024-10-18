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
                imports = imports.map((item) => {
                    return item + '\r\n'
                })
                break
            case 'import':
                imports = words.match(ImportSort.regex)
                break
        }

        if (imports) {
            ImportSort.imports = imports
        }
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
