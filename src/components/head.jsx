import { MetaProvider, Title, Link } from '@solidjs/meta';
import { createEffect } from "solid-js";
import { useLocalTheme, useLocalTitle, useLocalIcon } from '../settings';

function Head({defaultTitle}) {
    const [localTitle, setLocalTitle] = useLocalTitle();
    const [localIcon, setLocalIcon] = useLocalIcon();

    var title = localTitle ? localTitle : (defaultTitle ? defaultTitle + " | Galaxy" : "Galaxy")
    var icon = localIcon ? localIcon : "/logo.png"

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