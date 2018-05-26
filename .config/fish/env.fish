# Environment variables
set -Ux EDITOR micro
set -Ux _Z_DATA $HOME/.config/z
set -Ux fish_user_paths "/usr/local/sbin" $fish_user_paths
set -Ux NUGET_PACKAGES $HOME/.cache/NuGet/packages
set -Ux GNUPGHOME $HOME/.config/gnupg
set -Ux DEFAULT_CHEAT_DIR ~/.config/cheat
set -Ux CHEATCOLORS true


set -Ux ENV_VARS_SET true