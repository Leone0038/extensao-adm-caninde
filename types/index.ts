import { Document } from "@contentful/rich-text-types";
import { Entry, EntrySkeletonType } from "contentful";
import { StaticImageData } from "next/image";

export interface ProjectMenuProps {
    id: string;
}

export interface ProjectMenuOptions {
    href: string;
    label: string;
    icon: string;
}

export interface ProjectSubPageProps {
    searchParams: Promise<{ index: number }>;
    params: Promise<{ id: string }>;
}

export interface SlideShowProps {
    photoIndex: number;
    photos: {
        fields: {
            file: {
                url: string;
            };
        };
    }[];
}

export interface SocialMediaLinks {
    icon: string;
    href: string;
    alt: string;
}

export interface CommentCardProps {
    title: string;
    comment: string;
    index: number;
    createdAt: Date;
}

export interface CommentCardListProps {
    comments: Entry<EntrySkeletonType, undefined, string>[];
}

export type MessageType =
    | "add-comment-success"
    | "add-comment-error"
    | "delete-comment-error"
    | "delete-comment-success"
    | "login-error";

export interface InitialStateType {
    messageType: MessageType | null;
    errorMessage?: string;
}

export interface NavLink {
    label: string;
    href: string;
    styles?: string;
}

export interface LogoProps {
    img: StaticImageData | string;
    width: number;
    height: number;
    priority: boolean;
    styles?: string;
    alt: string;
    parentStyles?: string;
}


export interface TitleProps {
    text: string;
    styles?: string;
}
export interface PhotoCardProps {
    photoUrl: string;
    index: number;
    description: string
    openModal: (index: number) => void;
}

export interface PhotoListProps {
    photos: { fields: { file: { url: string }, description: string } }[];
}

export interface VideoLinkProps {
    videoLinks: Document;
}

export interface VideoListProps {
    videos: { fields: { file: { url: string } } }[];
}

export interface VideCardProps {
    videoUrl: string
}

export interface NoItemsNoticeProps {
    text: string;
}


export interface ScientificWorkContainerProps {
    scientificWorks: Document;
}

export interface Project {
    title: string;
    summary: Document;
    bursers: Document;
    coordinator: string;
    year: number;
    photos: { fields: { file: { url: string }, description: } }[];
    videos: { fields: { file: { url: string } } }[];
    scientificWorks: Document;
    results: Document;
    logo: { fields: { file: { url: string } } };
    videoLinks: Document
}


export interface ProjectTitle {
    title: string;
    id: string;
}

export interface SingleProjectPageParams {
    params: Promise<{ id: string }>;
}

export interface ProjectResultCardProps {
    results: Document;
}



export interface PaginationProps {
    totalPages: number;
    currentPage: number;
}

export interface BreadCrumbsProps {
    projectName?: string;
    id?: string;
    year?: number;
}

export interface ExtensionProjectsLinkProps {
    href: string;
    label: string;
}

export interface ModalProps {
    currentPhotoIndex: number;
    photos: {
        fields: {
            file: {
                url: string;
            };
        };
    }[];
    closeModal: () => void;
}
