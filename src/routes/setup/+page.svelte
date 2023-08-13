<script lang="ts">
  import Neofetch from "@assets/img/Neofetch.png";
</script>

<main class="mx-auto w-full max-w-4xl flex flex-col px-4 md:text-lg">
  <h1 class="text-4xl font-heading font-bold my-2">My Setup</h1>
  <p>My Setup is pretty simple, I try not to complicate too much</p>
  <h2 class="mt-8 mb-2 text-3xl font-heading font-bold">My Fonts and Theme</h2>
  <p>
    I use
    <a href="https://www.jetbrains.com/lp/mono/" class="text-brand underline font-semibold">
      JetBrains Mono
    </a>
    as my font, and most of OS is themed around
    <a href="https://github.com/catppuccin" class="text-brand underline font-semibold">
      Catppuccin
    </a> which includes most of my apps, my terminal, and my OS theme.
  </p>
  <h2 class="mt-8 mb-2 text-3xl font-heading font-bold">My OS</h2>
  <p>
    After years of distro hopping, trying out different distros and DEs, I have finally settled on <a
      href="https://nixos.org/"
      class="text-brand underline font-semibold">NixOS</a
    >
    with <a href="https://www.gnome.org/" class="text-brand underline font-semibold">Gnome</a> as my
    Desktop Environment. If you know about NixOS then you can checkout my
    <a
      href="https://github.com/BlankParticle/nixos-flake"
      class="text-brand underline font-semibold">flake</a
    >.
  </p>
  <p>
    If you have no idea what NixOS is like most of people then you can think it as a distro that is
    powerful as ArchLinux but run entirely by config files. You can break stuff but then just reboot
    and go to a older version of your OS to fix it, it take out the pain of breaking ArchLinux. You
    can just push your config to github and reinstall your OS from that config in a few minutes.
    Also with the use of flake and direnv you can create a Development Environment that can contain
    any version of anything limited to that folder and will be enabled and disabled automatically.
  </p>
  <p>
    So if you want a distro that is like Arch but doesn't break and you wont mind doing everything
    the Nix way you can try NixOS or If you want to start small you can just get the Nix Package
    Manager.
  </p>
  <img src={Neofetch} alt="The Obligatory Neofetch screenshot" height="976px" width="1424px" />
  <h2 class="mt-8 text-3xl font-heading font-bold">My Used Applications</h2>
  <h3 class="my-2 text-2xl font-heading font-bold">Visual Studio Code</h3>
  <p>
    I use VS Code to get most of my coding done, I am still not into Vim/Neovim shenanigans although
    I have Neovim with LazyVim installed which I use sometimes.
  </p>
  <p>I use quite a few extensions besides the theme and Language extensions,</p>
  <ul class="list-disc px-4">
    <li>
      <a
        href="https://marketplace.visualstudio.com/items?itemName=GitHub.copilot"
        class="text-brand underline font-semibold"
      >
        Github Copilot
      </a>
    </li>
    <li>
      <a
        href="https://marketplace.visualstudio.com/items?itemName=LeonardSSH.vscord"
        class="text-brand underline font-semibold"
      >
        Discord Rich Presence
      </a>
    </li>
    <li>
      <a
        href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
        class="text-brand underline font-semibold"
      >
        GitLens
      </a>
    </li>
    <li>
      <a
        href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"
        class="text-brand underline font-semibold"
      >
        Code Spell Checker
      </a>
    </li>
    <li>
      <a
        href="https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one"
        class="text-brand underline font-semibold"
      >
        Markdown All in One
      </a>
    </li>
  </ul>
  <h3 class="mt-4 mb-2 text-2xl font-heading font-bold">Google Chrome</h3>
  <p>
    I daily drive google chrome, I know it is not the best thing to do but hear me out. I need a
    chromium based browser to test my web apps, I used brave in past but there are many problems
    with Brave, the biggest one that put me off was removed Web Bluetooth API and no way enable it.
    Also random crashes are as common as Arch breaking.
  </p>

  <h3 class="mt-4 mb-2 text-2xl font-heading font-bold">KeepassXC</h3>
  <p>
    I use <a href="https://keepassxc.org/" class="text-brand underline font-semibold">KeepassXC</a>
    as my Password manager, it is free and Open Source, It stores my passwords in a encrypted database
    also connects to my browser via an extension. I can also sync the database using a software like
    <a href="https://syncthing.net/" class="text-brand underline font-semibold">Sync Thing</a>
    and access my KeepassXC database on my mobile with
    <a href="https://keepassdx.com/" class="text-brand underline font-semibold">KeepassDX</a>.
  </p>

  <p class="mt-8">
    If You want to know more or discuss something don't hesitate contact me on
    <a href="/discord" class="text-brand underline font-semibold">Discord</a>
    or
    <a href="/email" class="text-brand underline font-semibold">Email</a>.
  </p>
</main>
