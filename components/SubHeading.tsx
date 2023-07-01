import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SubHeading({ children }: Props) {
  return <h3 className="mt-2 uppercase text-teletext-green">{children}</h3>;
}
