import {useDownload} from "~/composables/useDownload";

export function useDownloadCsv(content: any, filename: string, type: string) {
    useDownload(content, filename, 'data:text/csv');
}