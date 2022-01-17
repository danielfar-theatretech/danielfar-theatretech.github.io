root=/

current_branch = $(git branch --show-current)

echo "moving to gh-pages branch"
git checkout gh-pages
echi "getting dist folder"
git checkout master -- dist
echo "moving all files from dist into root dir"
mv dist/* dist/.* . && rmdir dist
echo "adding files to be tracked"
git add . # add all files (that arent in gitignore) to the repo
echo "committing changes as \"$1\""
git commit -m "$1"
echo "pushing to origin"
git push origin 
echo "returning to branch \"{$current_branch}\""
git checkout main