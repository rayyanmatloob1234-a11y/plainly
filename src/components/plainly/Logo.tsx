import { FileText } from "lucide-react";

export function Logo({ size = 22 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex items-center justify-center rounded-md"
        style={{ width: size, height: size, backgroundColor: "var(--teal)" }}
      >
        <FileText size={size * 0.6} color="#fff" strokeWidth={2} />
      </div>
      <span className="text-[16px] font-medium tracking-tight text-text-primary">Plainly</span>
    </div>
  );
}