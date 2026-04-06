import { Document } from "@contentful/rich-text-types";
import { Entry, EntrySkeletonType } from "contentful";
import { StaticImageData } from "next/image";

export interface NavLink {
    label: string;
    href: string;
}

export interface LogoProps {
    img: StaticImageData;
    width: number;
    height: number;
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
    searchParams: Promise<{ search: string; filter: FilterType ; page: number}>;
}

export interface TitleProps {
    text: string;
    align?: string;
}

export interface DashBoardCounter {
    membersServedAmount: number;
    completedCoursesAmount: number;
    impactedMunicipalitiesAmount: number;
}

export interface PhotoCardProps {
    title: string;
    description: string;
    image: { fields: { file: { url: string } } };
    index: number;
    createdAt: string;
}

export interface PhotoListProps {
    photos: Entry<EntrySkeletonType, undefined, string>[];
}

export interface VideoCardProps {
    title: string;
    description: string;
    video: { fields: { file: { url: string } } };
    createdAt: string;
}

export interface VideoListProps {
    videos: Entry<EntrySkeletonType, undefined, string>[];
}

export interface NoItemsNoticeProps {
    text: string;
}

export interface AboutInfoCardProps {
    children?: React.ReactNode;
    title: string;
}
export interface ScientificWorkContainerProps {
    scientificWorkFile: { fields: { file: { url: string } } };
    author: string;
    createdAt: string;
    description: string;
}
export interface ScientificWorkContainerListProps {
    scientificWorks: Entry<EntrySkeletonType, undefined, string>[];
}

export interface ProjectCardProps {
    title: string;
    description: Document;
    createdAt: string;
    material: { fields: { file: { url: string } } }[];
}
export interface ProjectCardListProps {
    projects: Entry<EntrySkeletonType, undefined, string>[];
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
    currentPage: number
}