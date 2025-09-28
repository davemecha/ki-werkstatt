import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';

export function usePosterResize(posterRef: RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    const updateScale = () => {
      const poster = posterRef.current;
      if (!poster) return;

      const containerHeight =
        poster.parentElement?.offsetHeight || window.innerHeight;
      const containerWidth =
        poster.parentElement?.offsetWidth || window.innerWidth;

      // A3 dimensions in mm
      const posterWidth = 297;
      const posterHeight = 420;

      // Convert mm to pixels (96 DPI approximation)
      const mmToPx = 96 / 25.4;
      const posterWidthPx = posterWidth * mmToPx;
      const posterHeightPx = posterHeight * mmToPx;

      // Calculate scale factor with padding
      const padding = 30; // 40px padding
      const scaleX = (containerWidth - padding * 2) / posterWidthPx;
      const scaleY = (containerHeight - padding * 2) / posterHeightPx;
      const scale = Math.min(scaleX, scaleY, 1); // Don't scale up

      poster.style.transform = `scale(${scale})`;

      // Center the poster
      const scaledWidth = posterWidthPx * scale;
      const scaledHeight = posterHeightPx * scale;
      poster.style.marginLeft = `${(containerWidth - scaledWidth) / 2}px`;
      poster.style.marginTop = `${(containerHeight - scaledHeight) / 2}px`;
    };

    // Initial scale and update on resize
    updateScale();
    window.addEventListener('resize', updateScale);

    // Handle orientation change on mobile
    window.addEventListener('orientationchange', () => {
      setTimeout(updateScale, 100);
    });

    // Handle fullscreen changes
    document.addEventListener('fullscreenchange', updateScale);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateScale);
      window.removeEventListener('orientationchange', updateScale);
      document.removeEventListener('fullscreenchange', updateScale);
    };
  }, []);
}
