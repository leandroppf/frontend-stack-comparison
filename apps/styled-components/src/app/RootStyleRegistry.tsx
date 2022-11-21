"use client";

import { useStyledComponentsRegistry } from "../lib/styled-components";
import { useServerInsertedHTML } from "next/navigation";
import GlobalStyle from "../styles/global";

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>;
  });

  return (
    <StyledComponentsRegistry>
      <>
        <GlobalStyle />
        {children}
      </>
    </StyledComponentsRegistry>
  );
}
