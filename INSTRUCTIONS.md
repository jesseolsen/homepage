# VibeCodingMachine – AI Instructions

This is a Markdown (.md) file.

***NOTE: See the .vibecodingmachine/REQUIREMENTS.md file for project requirements and current status.***

***NOTE: THESE INSTRUCTIONS ARE FOR AI ONLY.
THIS FILE SHOULD NOT BE MODIFIED BY AI OR HUMAN.***

<instructions>

## RULES

**🚨 CRITICAL: DO NOT BLOCK AUTOMATION**
- **DO NOT EXECUTE ANY COMMAND THAT ASKS FOR USER INPUT, INCLUDING SUDO**
- **DO NOT RUN COMMANDS THAT REQUIRE PASSWORD PROMPTS, INTERACTIVE INPUT, OR MANUAL CONFIRMATION**
- **DO NOT USE SUDO** — If permissions are needed, find alternative approaches
- **AUTOMATION MUST CONTINUE UNINTERRUPTED** — Any command that blocks will stall the entire system
- **IF A COMMAND REQUIRES INPUT** — Find a non-interactive alternative or skip the operation
- **PREFER NON-INTERACTIVE OPTIONS** — Use flags like `-f`, `-y`, `--force` when available
- **ALWAYS USE TIMEOUTS** — For long-running commands, always use timeout mechanisms

## 🤖 Status Communication Protocol

**CRITICAL**: As an AI agent, you MUST communicate your current processing status to allow the auto-mode system to continue automatically.

### 🚨🚨🚨 FILE UPDATES ARE MORE IMPORTANT THAN SCREEN OUTPUT 🚨🚨🚨

- **THE ELECTRON APP CANNOT SEE YOUR SCREEN OUTPUT** — It only sees file changes
- **MANDATORY VISUAL VERIFICATION**: For UI fixes, you MUST take screenshots and actually LOOK at them before claiming success

### Required Status Stages

You MUST work through ALL of these stages by updating the STATUS field in `.vibecodingmachine/REQUIREMENTS.md`:

1. **PREPARE** — Read requirements, plan approach
2. **ACT** — Implement the change
3. **CLEAN UP** — Remove debug code, fix linting
4. **VERIFY** — Take screenshots, confirm the fix works visually
5. **TESTS** — Run tests, ensure nothing is broken
6. **DONE** — Report completion

Update the "Current Status" section:
```
## 🚦 Current Status

STATUS: PREPARE
```

When fully done, write `STATUS: DONE` AND report:
```
COMPLETION: 100%
```

on its own line in your final response.

### Response Format

After each significant action, update `.vibecodingmachine/REQUIREMENTS.md` with:

```markdown
## RESPONSE FROM LAST CHAT

### ONE LINE STATUS:
[Current status — one sentence]

### ONE LINE SUMMARY:
[What was done — one sentence]

### MULTILINE DETAILS: (1-20 lines max)
[Details of what was implemented, verified, and tested]
```

## 🚀 Dev Server

To start the local dev server for verification (run in the background, then screenshot):

```bash
# Mac/Linux
bash .vibecodingmachine/scripts/launch.sh &
LAUNCH_PID=$!
sleep 3  # wait for server to start
# ... take screenshots ...
kill $LAUNCH_PID 2>/dev/null || true
```

```powershell
# Windows
Start-Job { & .vibecodingmachine\scripts\launch.ps1 }
Start-Sleep 3  # wait for server to start
# ... take screenshots ...
Get-Job | Stop-Job
```

The server URL is in `.vibecodingmachine/config.json` → `launch.url` (default `http://localhost:8000`).

If the launch script fails, fix it (update the command or port) so future launches work without an agent.

---

## 📸 Screenshot Verification

For ALL visual/UI fixes:

1. Take a Playwright headless screenshot (see `.vibecodingmachine/TOOLS.md`)
2. Read the image file
3. Describe what you ACTUALLY see (not what you expect)
4. Confirm the fix works visually before marking DONE

See `.vibecodingmachine/TOOLS.md` for screenshot commands.

## 🧪 Testing Requirements

- Run existing tests before marking DONE
- If tests fail, fix them or document why they can't be fixed
- Do not skip tests unless explicitly told to

## Git Workflow

- Work on a feature branch when making significant changes
- Commit with descriptive messages
- Do not force-push unless explicitly told to

</instructions>
