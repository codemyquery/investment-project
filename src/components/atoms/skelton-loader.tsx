import { Skeleton, SxProps, Theme } from "@mui/material"
import React from "react";

interface SkeletonLoaderProps {
    rowCount: number,
    height?: string,
    width?: string,
    sx?: SxProps<Theme> | undefined
}

export const SkeletonLoader = ({
    rowCount,
    width,
    height,
    sx
}: SkeletonLoaderProps) => {
    const skelton: JSX.Element[] = [];
    for (let i = 0; i < rowCount; i++) {
        skelton.push(<Skeleton key={i} width={width} height={height} sx={sx} />);
    }
    return <>{skelton.map(skelton => (skelton))}</>;
}