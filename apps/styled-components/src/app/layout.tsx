import RootStyleRegistry from "./RootStyleRegistry";
import RootStyle from "./RootStyle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Styled components stack</title>
      </head>
      <body>
        <RootStyleRegistry>
          <RootStyle>{children}</RootStyle>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
