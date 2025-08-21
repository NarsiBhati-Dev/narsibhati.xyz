"use client";

import { MEASUREMENT_ID } from "@/config";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function TrackPageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
    // @ts-ignore
    window.gtag?.("config", MEASUREMENT_ID, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}
