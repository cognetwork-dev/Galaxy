import Logo from '../assets/logo.svg';
import { A } from "@solidjs/router";
import { IoOptions } from 'solid-icons/io';
import { IoGameController } from 'solid-icons/io';
import { SiDiscord } from 'solid-icons/si';
import { AiOutlineGithub } from 'solid-icons/ai';

function Nav() {
  function gamesGo() {
    window.navigate("https://radon.games/games")
  }

  return (
    <>
      <div class="nav">
        <A href="/" class="logo">
            <Logo />
        </A>
        <div class="navItems">
            <a href="https://discord.com/invite/yk33HZSZkU" class="navItem">
                <SiDiscord fill="var(--text-inverse)" />
            </a>
            <a href="https://github.com/cognetwork-dev/Galaxy" class="navItem">
                <AiOutlineGithub fill="var(--text-inverse)" />
            </a>
            <div onclick={gamesGo} class="navItem">
                <IoGameController fill="var(--text-inverse)" />
            </div>
            <A href="/options" class="navItem">
                <IoOptions fill="var(--text-inverse)" />
            </A>
        </div>
      </div>
    </>
  );
}

export default Nav;