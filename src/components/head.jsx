import { MetaProvider, Title, Link } from '@solidjs/meta';
import { createEffect } from "solid-js";
import { useLocalTheme } from '../settings';

function Head({defaultTitle}) {
    var title = defaultTitle ? defaultTitle + " | Nebula" : "Nebula"
    var icon = "/logo.png"

    var [ localTheme, setLocalTheme ] = useLocalTheme();

    document.body.setAttribute("data-theme", localTheme)

    createEffect(() => {
      document.body.setAttribute("data-theme", localTheme)
    });

    return (
      <MetaProvider>
          <Title>{title}</Title>
          <Link rel="icon" href={icon} />
      </MetaProvider>
    );
}

export default Head;