# Environment variables
set -Ux XDG_CONFIG_HOME $HOME/.config
set -Ux XDG_DATA_HOME $HOME/.local/share
set -Ux XDG_CACHE_HOME $HOME/.cache

set -Ux CARGO_HOME $HOME/.local/share/cargo
set -Ux RUSTUP_HOME $HOME/.local/share/rustup

set -Ux NUGET_PACKAGES $HOME/.cache/NuGet/packages
set -Ux GNUPGHOME $HOME/.config/
set -Ux DEFAULT_CHEAT_DIR $HOME/.config/cheat
set -Ux _Z_DATA $HOME/.config/z

set -Ux EDITOR micro
set -Ux CHEATCOLORS true

set -Ux fish_user_paths /usr/local/opt/coreutils/libexec/gnubin /usr/local/sbin $CARGO_HOME/bin
set -Ux ENV_VARS_SET true