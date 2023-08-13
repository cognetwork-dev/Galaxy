import logo from '../assets/logo.png';
import { A } from "@solidjs/router";
import { IoOptions } from 'solid-icons/io';
import { IoGameController } from 'solid-icons/io';
import { SiDiscord } from 'solid-icons/si';
import { AiOutlineGithub } from 'solid-icons/ai';

function Nav() {
  return (
    <>
      <div class="nav">
        <A href="/">
            <img src={logo} alt="Nebula logo" draggable="false" class="logo" />
        </A>
        <div class="navItems">
            <div class="navItem">
                <SiDiscord fill="var(--text-inverse)" />
            </div>
            <div class="navItem">
                <AiOutlineGithub fill="var(--text-inverse)" />
            </div>
            <div class="navItem">
                <IoGameController fill="var(--text-inverse)" />
            </div>
            <div class="navItem">
                <IoOptions fill="var(--text-inverse)" />
            </div>
        </div>
      </div>
    </>
  );
}

export default Nav