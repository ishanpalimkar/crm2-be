# GitHub Account Switching Runbook

This document describes the configuration and workflow for switching between your personal and work GitHub accounts across repositories.

## Prerequisites
- SSH keys generated for both personal and work accounts:
  - `~/.ssh/id_rsa_personal_account`
  - `~/.ssh/id_rsa_work_account`
- GitHub CLI (`gh`) installed and configured for HTTP-based auth.
- Projects organized under separate folders, e.g., `~/projects/personal/` and `~/projects/work/`.

## 1. SSH Configuration
Add the following to your `~/.ssh/config` to define host aliases:

```ssh-config
# Personal GitHub account
Host github-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_personal_account

# Work GitHub account
Host github-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_work_account
```

## 2. GitHub CLI Hosts Authentication
Login (or re-authenticate) each host alias:

```bash
# Personal (SSH)
gh auth login --hostname github-personal --git-protocol ssh --ssh-key ~/.ssh/id_rsa_personal_account

# Work (HTTPS)
# (Uses existing cli auth or prompt)
gh auth login --hostname github.com --git-protocol https
```

Verify status:
```bash
gh auth status --hostname github-personal
gh auth status --hostname github.com
```

## 3. Git Configuration Includes
Use `[includeIf]` in your global `~/.gitconfig` to apply different user identities per directory:

```gitconfig
[includeIf "gitdir:~/projects/personal/"]
  path = ~/.gitconfig-personal

[includeIf "gitdir:~/projects/work/"]
  path = ~/.gitconfig-work
```

Create `~/.gitconfig-personal`:
```gitconfig
[user]
  name = ishanpalimkar
  email = ishan0313@gmail.com

[url "git@github-personal:"]
  insteadOf = "github.com:"
```

Create `~/.gitconfig-work`:
```gitconfig
[user]
  name = taolpalimkarishan
  email = ishan.palimkar@in.artofliving.org

[url "https://github.com/"]
  insteadOf = "github.com:"
```

## 4. Cloning & Remotes
### Personal Repositories
```bash
git clone git@github-personal:<username>/<repo>.git ~/projects/personal/<repo>
```

### Work Repositories
```bash
git clone https://github.com/<org>/<repo>.git ~/projects/work/<repo>
```

For an existing repo, switch the remote and ensure correct host alias:
```bash
git remote set-url origin git@github-personal:<username>/<repo>.git  # for personal
# or for work (HTTPS)
git remote set-url origin https://github.com/<org>/<repo>.git
```

## 5. Verifying Context
Inside any git repository, run:
```bash
git config user.name
git config user.email
git remote -v
```
And to check GH CLI auth:
```bash
gh auth status --hostname github-personal
gh auth status --hostname github.com
```

## 6. Troubleshooting & Tips
- Ensure file permissions for your `~/.ssh/id_rsa_*` are `600`.
- If `includeIf` does not apply, confirm your repo path matches the pattern (no trailing slash issues).
- You can inspect which SSH key is used by:
  ```bash
  GIT_SSH_COMMAND="ssh -v" git ls-remote origin
  ```
- To remove stale GH CLI tokens:
  ```bash
  gh auth logout --hostname github-personal --confirm
  gh auth logout --hostname github.com --confirm
  ```

---
*End of runbook.* 