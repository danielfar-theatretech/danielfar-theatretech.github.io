root=/

if [ -z "$1" ]
then
    echo "Please provide a commit message"
else
    echo "getting current branch name" &&
	current_branch=$(git branch --show-current) &&
	echo "name got \"$current_branch\""
	echo "moving to gh-pages branch" &&
	git checkout gh-pages &&
	read -p "Press [Enter] key to continue..." &&
	echo "getting dist folder" &&
	git checkout $current_branch -- dist &&
	read -p "Press [Enter] key to continue..." &&
	echo "moving all files from dist into root dir" &&
	mv dist/* . &&
	rmdir dist &&
	pause && 
	echo "adding files to be tracked" &&
	git add . && # add all files (that arent in gitignore) to the repo
	echo "committing changes as \"$1\"" &&
	git commit -m "$1" &&
	echo "pushing to origin" &&
	git push origin  &&
	echo "returning to branch \"$current_branch\"" &&
	git checkout $current_branch
fi

