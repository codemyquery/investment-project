import { Skeleton } from "@mui/material"
import React from "react";

interface SkeletonLoaderProps {
    rowCount: number,
    height?: string,
    width?: string
}

export const SkeletonLoader = ({
    rowCount,
    width,
    height
}: SkeletonLoaderProps) => {
    const skelton: JSX.Element[] = [];
    for (let i = 0; i < rowCount; i++) {
        skelton.push(<Skeleton key={i} width={width} height={height} />);
    }
    return <>{skelton.map(skelton => (skelton))}</>;
}