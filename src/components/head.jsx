import { MetaProvider, Title, Link } from '@solidjs/meta';

function Head({defaultTitle}) {
    var title = defaultTitle ? defaultTitle + " | Nebula" : "Nebula"
    var icon = "/logo.png"

    return (
      <MetaProvider>
          <Title>{title}</Title>
          <Link rel="icon" href={icon} />
      </MetaProvider>
    );
}

export default Head;