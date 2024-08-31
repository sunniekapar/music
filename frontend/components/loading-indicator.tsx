import { MoreHorizontal } from "lucide-react";

export default function LoadingIndicator() {
  return (
    <div className="flex justify-center py-2">
      <MoreHorizontal className="animate-pulse" />
    </div>
  );
}
