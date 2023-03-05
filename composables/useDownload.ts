export function useDownload(content: any, filename: string, type: string) {
    let hiddenElement = document.createElement('a');
    hiddenElement.href = type + 'charset=utf-8,' + encodeURI(content);
    hiddenElement.target = '_blank';
    hiddenElement.download = filename;
    hiddenElement.click();
}