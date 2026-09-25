import { usePathname } from "next/navigation";

type IsLanding = {
  isLanding: boolean;
};

export function useIsLanding() {
  const pathname = usePathname();

  return {
    isLanding: pathname === "/",
  };
}
