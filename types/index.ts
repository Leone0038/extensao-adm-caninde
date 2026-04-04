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
    description: Document | string;
    image: { fields: { file: { url: string } } };
    index: number;
}

export interface NewsListProps {
    news: Entry<EntrySkeletonType, undefined, string>[];
}

export type FilterType = "latest" | "oldest";

export interface NewsPageSearchParams {
    searchParams: Promise<{ search: string; filter: FilterType }>;
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
    title: string;
    description: string;
    image: { fields: { file: { url: string } } };
    index: number;
    projectName: string;
}

export interface PhotoListProps {
    photos: Entry<EntrySkeletonType, undefined, string>[];
}

export interface VideoCardProps {
    title: string;
    description: string;
    video: { fields: { file: { url: string } } };
    projectName: string;
}
