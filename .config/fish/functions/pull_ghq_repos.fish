function pull_ghq_repos
    set root (ghq root)
    set repos (ghq list)
    for repo in $repos
        cd $root/$repo
        git pull
    end
    cd $HOME
end