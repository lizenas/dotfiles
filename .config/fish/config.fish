# Environment variables
set -Ux EDITOR kak
set -Ux DEFAULT_CHEAT_DIR ~/.config/cheat
set -Ux CHEATCOLORS true
set -Ux _Z_DATA $HOME/.config/z
set -Ux fish_user_paths "/usr/local/sbin" $fish_user_paths
set -Ux NUGET_PACKAGES $HOME/.cache/NuGet/packages

# Change cursor shape to line instead of block
#printf '\033]50;CursorShape=1\x7'