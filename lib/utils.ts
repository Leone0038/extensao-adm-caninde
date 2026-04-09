import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const getTimeAgo = (createdAt: string) => {
    return formatDistanceToNow(createdAt, {
        addSuffix: true,
        locale: ptBR,
    });
};

export const cleanUrl = (url: string): string => {
    return url.startsWith("//") ? `https:${url}` : url;
};
