const Renderer = {
    heading(text, level) {
        if (level === 1) {
            return `<q-title :level="${level}" colorful>${text}</q-title>`;
        }
        return `<q-title :level="${level}">${text}</q-title>`;
    },
    em(text) {
        return `<q-footnote style="margin-top: -32px">${text}</q-footnote>`
    },
    listitem(text, task, checked) {
        return `<li style="list-style: circle;"><q-text>${text}</q-text></li>`;
    },
    paragraph(text) {
        return `<q-text>${text}</q-text>`;
    },
    blockquote(quote) {
        return `<q-quote block>${quote}</q-quote>`
    },
    hr() {
        return `<q-divider></q-divider>`
    },
    code(code, infostring) {
        return `<codeblock lang="${infostring}">${code}</codeblock>`
    }
};

export default Renderer