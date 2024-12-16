import { ShortCutsProps } from "../../styles/shortcuts";

interface IconButtonProps extends ShortCutsProps {
  width: number;
  height: number;
  src?: string | undefined;
  alt?: string;
}

export default function IconButton({ width, height, src, alt }: IconButtonProps) {
  return (
    <button>
      <img src={src} alt={alt} style={{ width, height }} />
    </button>
  );
}
