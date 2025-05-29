export const basicGitCommands = `
### Basic Git Commands

_Repository Setup_
\`\`\`bash
# Initialize a new repository
git init

# Clone an existing repository
git clone <repository-url>

# Add remote origin
git remote add origin <repository-url>
\`\`\`

_Daily Workflow_
\`\`\`bash
# Check repository status
git status

# Add files to staging area
git add <file-name>          # Add specific file
git add .                    # Add all files
git add -A                   # Add all files including deletions

# Commit changes
git commit -m "Your commit message"
git commit -am "Add and commit in one step"

# Push changes
git push origin main
git push -u origin main      # Set upstream and push
\`\`\`

_Branching_
\`\`\`bash
# List branches
git branch                   # Local branches
git branch -r               # Remote branches
git branch -a               # All branches

# Create and switch to new branch
git checkout -b <branch-name>
git switch -c <branch-name>  # Modern alternative

# Switch branches
git checkout <branch-name>
git switch <branch-name>     # Modern alternative

# Merge branch
git checkout main
git merge <branch-name>

# Delete branch
git branch -d <branch-name>  # Safe delete
git branch -D <branch-name>  # Force delete
\`\`\`

_Viewing History_
\`\`\`bash
# View commit history
git log
git log --oneline           # Compact view
git log --graph --oneline   # Visual graph

# View differences
git diff                    # Working directory vs staging
git diff --cached          # Staging vs last commit
git diff HEAD              # Working directory vs last commit
\`\`\`
`;

export const sshSetupGuide = `
### SSH Key Setup

_1. Generate SSH Key_
\`\`\`bash
# Generate new SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"

# For older systems that don't support Ed25519
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
\`\`\`

---

_2. Add SSH Key to Agent_

_**macOS/Linux**_
\`\`\`bash
# Start SSH agent
eval "$(ssh-agent -s)"

# Add SSH key to agent
ssh-add ~/.ssh/id_ed25519
\`\`\`

_**Windows (PowerShell)**_
\`\`\`powershell
# Start SSH agent
Start-Service ssh-agent

# Add SSH key to agent
ssh-add ~/.ssh/id_ed25519
\`\`\`

---
_3. Add Public Key to GitHub_
_Add Public Key to GitHub_
\`\`\`bash
# Copy public key to clipboard (macOS)
pbcopy < ~/.ssh/id_ed25519.pub

# Copy public key to clipboard (Linux)
xclip -selection clipboard < ~/.ssh/id_ed25519.pub

# Copy public key to clipboard (Windows)
clip < ~/.ssh/id_ed25519.pub

# Or display the key to copy manually
cat ~/.ssh/id_ed25519.pub
\`\`\`

1. Go to GitHub → Settings → SSH and GPG keys
2. Click "New SSH key"
3. Paste your public key
4. Give it a descriptive title


---
_4. Test SSH Connection_
\`\`\`bash
# Test GitHub connection
ssh -T git@github.com
\`\`\`

---

_SSH Config (Optional)_
Create \`~/.ssh/config\` file:
\`\`\`
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519
\`\`\`
`;

export const githubCliGuide = `
### GitHub CLI (gh) Reference

_Installation_
\`\`\`bash
# macOS (Homebrew)
brew install gh

# Windows (Chocolatey)
choco install gh

# Linux (apt)
sudo apt install gh
\`\`\`

_Authentication_
\`\`\`bash
# Login to GitHub
gh auth login

# Check authentication status
gh auth status
\`\`\`

_Repository Operations_
\`\`\`bash
# Create new repository
gh repo create <repo-name>
gh repo create <repo-name> --public
gh repo create <repo-name> --private

# Clone repository
gh repo clone <username>/<repo-name>

# Fork repository
gh repo fork <username>/<repo-name>

# View repository info
gh repo view
gh repo view <username>/<repo-name>
\`\`\`

_Issues_
\`\`\`bash
# List issues
gh issue list

# Create new issue
gh issue create
gh issue create --title "Bug report" --body "Description"

# View issue
gh issue view <issue-number>

# Close issue
gh issue close <issue-number>
\`\`\`

_Pull Requests_
\`\`\`bash
# List pull requests
gh pr list

# Create pull request
gh pr create
gh pr create --title "Feature" --body "Description"

# View pull request
gh pr view <pr-number>

# Checkout pull request
gh pr checkout <pr-number>

# Merge pull request
gh pr merge <pr-number>
\`\`\`

_Releases_
\`\`\`bash
# List releases
gh release list

# Create release
gh release create v1.0.0
gh release create v1.0.0 --notes "Release notes"

# View release
gh release view v1.0.0
\`\`\`

_Workflow Commands_
\`\`\`bash
# List workflows
gh workflow list

# Run workflow
gh workflow run <workflow-name>

# View workflow runs
gh run list
\`\`\`
`;

export const advancedGitCommands = `
### Advanced Git Commands

_Undoing Changes_
\`\`\`bash
# Unstage files
git reset HEAD <file-name>
git restore --staged <file-name>  # Modern alternative

# Discard working directory changes
git checkout -- <file-name>
git restore <file-name>           # Modern alternative

# Reset to previous commit (keep changes)
git reset --soft HEAD~1

# Reset to previous commit (discard changes)
git reset --hard HEAD~1

# Revert a commit (creates new commit)
git revert <commit-hash>
\`\`\`

_Stashing_
\`\`\`bash
# Stash changes
git stash
git stash save "Work in progress"

# List stashes
git stash list

# Apply stash
git stash apply
git stash apply stash@{1}

# Pop stash (apply and remove)
git stash pop

# Drop stash
git stash drop stash@{1}
\`\`\`

_Rebasing_
\`\`\`bash
# Interactive rebase
git rebase -i HEAD~3

# Rebase onto another branch
git rebase main

# Continue rebase after resolving conflicts
git rebase --continue

# Abort rebase
git rebase --abort
\`\`\`

_Tags_
\`\`\`bash
# Create lightweight tag
git tag v1.0.0

# Create annotated tag
git tag -a v1.0.0 -m "Version 1.0.0"

# List tags
git tag

# Push tags
git push origin v1.0.0
git push origin --tags

# Delete tag
git tag -d v1.0.0
git push origin --delete v1.0.0
\`\`\`

_Useful Aliases_
Add to \`~/.gitconfig\`:
\`\`\`ini
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    lg = log --oneline --graph --decorate
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = !gitk
\`\`\`
`;
