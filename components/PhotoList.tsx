"use client";

import { PhotoListProps } from "@/types";
import PhotoCard from "./PhotoCard";
import NoItemsNotice from "./NoItemsNotice";
import { useState } from "react";
import Modal from "./Modal";

export default function PhotoList({ photos }: PhotoListProps) {
    const [showModal, setShowModal] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    if (!photos || photos.length === 0) {
        return <NoItemsNotice text="Nenhuma foto postada ainda" />;
    }

    return (
        <>
            <ul className="grid-common-styles mx-4">
                {photos.map((photo, i) => (
                    <PhotoCard
                        key={i}
                        photoUrl={photo.fields.file.url}
                        index={i}
                        openModal={(idx) => {
                            setCurrentPhotoIndex(idx);
                            setShowModal(true);
                        }}
                    />
                ))}
            </ul>
            {showModal && (
                <Modal
                    closeModal={() => setShowModal(false)}
                    currentPhotoIndex={currentPhotoIndex}
                    photos={photos}
                />
            )}
        </>
    );
}
