# What is git

- Git is a DevOps tool used for source code management. It is a free and open-source version control system used to handle small to very large projects efficiently.

-Developers used to submit their codes to the central server without having copies of their own
-Any changes made to the source code were unknown to the other developers
-There was no communication between any of the developers

# Difference between . and ..

- . => Current Directory
- .. => Parent Directory

# Notes Of Todays Session

- First we have to use - git init => git init is the command which intializes our repository as a git repo and now we can work on the repo and use all features of the git.
- .git folder gets created as a folder which is hidden at the start
- git status => displays the status of the repository
- git add [filename] => adds the new files that are in repositry and makes them ready to be commited
- git graph extension for VSCODE shows graphs and trees of the commits
- commit is a point in time, a point in the history of your code that you can go back too..
- git commit -m ["message"] -m means message. the message should be meaningful
- Staging Area => currently the code which is being worked on
- Working Copy has two types of files :- Tracked Files and Untracked Files
- refs are also known as branches.
- For git, a branch is nothing but a pointer to a commit.
- Git stores it's information in a tree structure
- git checkout -b [branch-name] used for making a new branch from the latest commit
- git checkout [branch-name] is used to change branches
- git remote add origin [repo URL] - add an external repository generally from github.
- git push --all - push all the local code to the repository
- git fetch will fetch remote object and make pointers in the hidden folder but it wont merge the changes to local repo
- git pull internally executes two commands - git fetch and git merge which fetches objects from remote branch and merge them with the local code.


# cheat sheet of git's most used commands
![39](https://user-images.githubusercontent.com/80661803/177531790-67536d16-9044-431f-ae0e-4606c25e6b92.png)

