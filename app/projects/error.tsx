"use client";
import { RouteError } from "@/components/route-state";
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) { return <RouteError onRetry={reset} />; }
