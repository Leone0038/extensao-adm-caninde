import { Document } from "@contentful/rich-text-types";
import { Entry, EntrySkeletonType } from "contentful";
import { StaticImageData } from "next/image";

export interface ProjectMenuProps {
    id: string
}

export interface ProjectMenuOptions {
    href: string
    label: string
    icon: string
}

export interface ProjectSubPageProps {
    searchParams: Promise<{index: number}>
    params: Promise<{id: string}>
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
    img: StaticImageData;
    width: number;
    height: number;
    priority: boolean;
    styles?: string;
}

export interface NewsCardProps {
    title: string;
    newsText: Document;
    image: { fields: { file: { url: string } } };
    index: number;
    author: string;
    createdAt: string;
}

export interface NewsListProps {
    news: Entry<EntrySkeletonType, undefined, string>[];
}

export type FilterType = "latest" | "oldest";

export interface NewsPageSearchParams {
    searchParams: Promise<{ search: string; filter: FilterType; page: number }>;
}

export interface TitleProps {
    text: string;
    styles?: string;
}

export interface DashBoardCounter {
    membersServedAmount: number;
    completedCoursesAmount: number;
    impactedMunicipalitiesAmount: number;
}

export interface PhotoCardProps {
    photoUrl: string;
    index: number;
}

export interface PhotoListProps {
    photos: { fields: { file: { url: string } } }[];
}

export interface VideoLinkProps {
    videoLinks: Document;
}


export interface NoItemsNoticeProps {
    text: string;
}

export interface AboutInfoCardProps {
    children?: React.ReactNode;
    title: string;
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
    photos: { fields: { file: { url: string } } }[];
    videos: Document;
    scientificWorks: Document;
    results: Document;
}


export interface ProjectCardListProps {
    projects: Entry<EntrySkeletonType, undefined, string>[];
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

export interface CourseCardProps {
    courseName: string;
    description: string;
    image: { fields: { file: { url: string } } };
    index: number;
}

export interface CourseCardListProps {
    courses: Entry<EntrySkeletonType, undefined, string>[];
}

export interface WorkShopCardProps {
    workshopName: string;
    description: string;
    image: { fields: { file: { url: string } } };
    index: number;
}

export interface WorkShopCardListProps {
    workshops: Entry<EntrySkeletonType, undefined, string>[];
}

export interface TopScholarshipRecipientCardProps {
    name: string;
    description: string;
}

export interface TopScholarshipRecipientCardListProps {
    topScholarshipRecipients: Entry<EntrySkeletonType, undefined, string>[];
}

export interface PaginationProps {
    totalPages: number;
    currentPage: number;
}

export interface BreadCrumbsProps {
    projectName?: string;
    id?: string
    year?: number
}

export interface ExtensionProjectsLinkProps {
    href: string;
    label: string
}