import { getCssText } from "../styles/stitches";
import RootStyle from "./RootStyle";
import globalStyles from "../styles/global";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Stitches stack</title>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <style>{globalStyles()}</style>
      </head>
      <body>
        <RootStyle>{children}</RootStyle>
      </body>
    </html>
  );
}
