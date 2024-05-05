import ContentLoader from 'react-content-loader';

export function RepoCardSkeleton() {
  return (
    <ContentLoader
      speed={2}
      height={100}
      width="100%"
      preserveAspectRatio="none"
      backgroundColor="#111117"
      foregroundColor="#20202b"
      beforeMask={<rect rx="10" ry="10" width="100%" height="100%" fill="none" stroke="#20202b" />}
    >
      <rect x="16" y="16" rx="12" ry="12" width="180" height="24" />
      <rect x="16" y="66" rx="9" ry="9" width="120" height="18" />
      <rect x="calc(100% - 172px)" y="66" rx="9" ry="9" width="48" height="18" />
      <rect x="calc(100% - 118px)" y="66" rx="9" ry="9" width="48" height="18" />
      <rect x="calc(100% - 64px)" y="66" rx="9" ry="9" width="48" height="18" />
    </ContentLoader>
  );
}
