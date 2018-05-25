function lnmv
    set dest_dir $argv[1]
    set files $argv[2..-1]

    for f in $files
        set dest $dest_dir/$f
        mv -- $f $dest
        and ln -s -- $dest $f
    end
end